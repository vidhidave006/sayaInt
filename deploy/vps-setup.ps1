# =====================================================================
#  sayaInt  ->  one-shot VPS deploy (Windows Server + IIS)
#  Live URL : https://mokshtechno.ezcods.cloud
#
#  RUN ON THE VPS (RDP), in an ADMIN PowerShell:
#
#    Set-ExecutionPolicy Bypass -Scope Process -Force
#    irm https://raw.githubusercontent.com/vidhidave006/sayaInt/main/deploy/vps-setup.ps1 -OutFile vps-setup.ps1
#    .\vps-setup.ps1 -Email you@example.com -RunnerToken <TOKEN>
#
#  -Email       : for the Let's Encrypt certificate (optional but recommended)
#  -RunnerToken : GitHub -> repo -> Settings -> Actions -> Runners ->
#                 "New self-hosted runner" -> copy the token after --token
#                 (optional; without it the site still goes live now,
#                  future `git push` auto-deploy just won't be wired yet)
# =====================================================================

#Requires -RunAsAdministrator
param(
  [string]$Domain      = "mokshtechno.ezcods.cloud",
  [string]$SitePath    = "C:\inetpub\sites\mokshtechno",
  [string]$RepoUrl     = "https://github.com/vidhidave006/sayaInt.git",
  [string]$RepoWeb     = "https://github.com/vidhidave006/sayaInt",
  [string]$BuildDir    = "C:\deploy\sayaInt",
  [string]$SiteName    = "mokshtechno",
  [string]$Email       = "",
  [string]$RunnerToken = ""
)

$ErrorActionPreference = "Stop"
$ProgressPreference    = "SilentlyContinue"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
function Step($m) { Write-Host "`n=== $m ===" -ForegroundColor Cyan }

# ---------------------------------------------------------------------
Step "1/8  IIS + features"
Install-WindowsFeature -Name Web-Server,Web-Static-Content,Web-Default-Doc,Web-Http-Errors,Web-Mgmt-Console -IncludeManagementTools | Out-Null

# ---------------------------------------------------------------------
Step "2/8  Chocolatey + Node LTS + Git"
if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
  Invoke-Expression ((New-Object Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
}
choco install -y --no-progress nodejs-lts git
# refresh PATH for this session
$env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User")

# ---------------------------------------------------------------------
Step "3/8  Clone / update repo"
if (Test-Path (Join-Path $BuildDir ".git")) {
  git -C $BuildDir fetch --all
  git -C $BuildDir reset --hard origin/main
} else {
  New-Item -ItemType Directory -Force (Split-Path $BuildDir) | Out-Null
  git clone $RepoUrl $BuildDir
}

# ---------------------------------------------------------------------
Step "4/8  npm ci + build (static export -> out/)"
Push-Location $BuildDir
cmd /c "npm ci"
if ($LASTEXITCODE -ne 0) { throw "npm ci failed" }
cmd /c "npm run build"
if ($LASTEXITCODE -ne 0) { throw "npm run build failed" }
Pop-Location

# ---------------------------------------------------------------------
Step "5/8  Publish files -> $SitePath"
New-Item -ItemType Directory -Force $SitePath | Out-Null
robocopy "$BuildDir\out" $SitePath /MIR /R:2 /W:2 /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy failed ($LASTEXITCODE)" }

# ---------------------------------------------------------------------
Step "6/8  IIS website + firewall"
Import-Module WebAdministration
if (Get-Website -Name $SiteName -ErrorAction SilentlyContinue) {
  Set-ItemProperty "IIS:\Sites\$SiteName" -Name physicalPath -Value $SitePath
} else {
  New-Website -Name $SiteName -PhysicalPath $SitePath -HostHeader $Domain -Port 80 | Out-Null
}
Start-Website -Name $SiteName -ErrorAction SilentlyContinue
netsh advfirewall firewall add rule name="HTTP-80"  dir=in action=allow protocol=TCP localport=80  | Out-Null
netsh advfirewall firewall add rule name="HTTPS-443" dir=in action=allow protocol=TCP localport=443 | Out-Null

# ---------------------------------------------------------------------
Step "7/8  HTTPS (Let's Encrypt via win-acme)"
if ($Email) {
  $wa = "C:\win-acme"
  if (-not (Test-Path "$wa\wacs.exe")) {
    New-Item -ItemType Directory -Force $wa | Out-Null
    $rel = Invoke-RestMethod "https://api.github.com/repos/win-acme/win-acme/releases/latest" -Headers @{ "User-Agent" = "sayaint-setup" }
    $asset = $rel.assets | Where-Object { $_.name -match "x64\.trimmed\.zip$" } | Select-Object -First 1
    $zip = "$env:TEMP\win-acme.zip"
    Invoke-WebRequest $asset.browser_download_url -OutFile $zip
    Expand-Archive $zip -DestinationPath $wa -Force
  }
  & "$wa\wacs.exe" --source iis --host $Domain --siteid ((Get-Website -Name $SiteName).id) `
      --installation iis --accepttos --emailaddress $Email --unattended
} else {
  Write-Host "  skipped (no -Email). Run later: C:\win-acme\wacs.exe" -ForegroundColor Yellow
}

# ---------------------------------------------------------------------
Step "8/8  GitHub Actions self-hosted runner (auto-deploy on push)"
if ($RunnerToken) {
  $rd = "C:\actions-runner"
  if (-not (Test-Path "$rd\config.cmd")) {
    New-Item -ItemType Directory -Force $rd | Out-Null
    $rel = Invoke-RestMethod "https://api.github.com/repos/actions/runner/releases/latest" -Headers @{ "User-Agent" = "sayaint-setup" }
    $asset = $rel.assets | Where-Object { $_.name -match "win-x64-.*\.zip$" -and $_.name -notmatch "noexternals|noruntime" } | Select-Object -First 1
    $zip = "$env:TEMP\actions-runner.zip"
    Invoke-WebRequest $asset.browser_download_url -OutFile $zip
    Expand-Archive $zip -DestinationPath $rd -Force
  }
  Push-Location $rd
  .\config.cmd --url $RepoWeb --token $RunnerToken --labels windows --name "$env:COMPUTERNAME" --unattended --runasservice --replace
  Pop-Location
} else {
  Write-Host "  skipped (no -RunnerToken). Site is live; wire auto-deploy later." -ForegroundColor Yellow
}

Write-Host "`nDONE." -ForegroundColor Green
Write-Host "  http://$Domain  (and https:// if SSL step ran)"
Write-Host "  Future: git push to main -> runner rebuilds -> IIS updated."
