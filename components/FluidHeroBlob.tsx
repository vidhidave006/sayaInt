"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FluidHeroBlob() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. Vertex & Fragment Shader for Chromatic Iridescent Liquid Bubble (Pinterest Reference)
    const vertexShader = `
      uniform float uTime;
      uniform float uSpeed;
      uniform float uNoiseDensity;
      uniform float uNoiseStrength;
      uniform vec2 uMouse;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vDisplacement;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;

      // 3D Simplex Noise
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

      float snoise(vec3 v){
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        vNormal = normal;
        
        // Organic Zero-Gravity Bubble Surface Undulation
        float time = uTime * uSpeed;
        vec3 noisePos = position * uNoiseDensity + vec3(time * 0.35, time * 0.28, time * 0.42);
        
        // Gentle fluid folds & surface tension waves
        float noise1 = snoise(noisePos);
        float noise2 = snoise(noisePos * 2.4 - vec3(time * 0.2)) * 0.4;
        float noise3 = snoise(noisePos * 4.8 + vec3(time * 0.15)) * 0.15;
        
        float totalDisplacement = (noise1 + noise2 + noise3) * uNoiseStrength;
        vDisplacement = totalDisplacement;

        // Subtle interactive mouse attraction
        vec3 mouseOffset = vec3(uMouse.x * 0.3, uMouse.y * 0.3, 0.0);
        vec3 newPos = position + normal * totalDisplacement + mouseOffset * 0.1;
        vPosition = newPos;

        vec4 worldPos = modelMatrix * vec4(newPos, 1.0);
        vWorldPosition = worldPos.xyz;

        vec4 mvPosition = viewMatrix * worldPos;
        vViewPosition = -mvPosition.xyz;

        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      uniform vec3 uLightPos1;
      uniform vec3 uLightPos2;
      uniform vec3 uLightPos3;
      uniform float uTime;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vDisplacement;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;

      // Cosine-based Thin-Film Rainbow Spectral Chromatic Dispersion
      vec3 rainbow(float t) {
        vec3 a = vec3(0.65, 0.55, 0.5);
        vec3 b = vec3(0.5, 0.6, 0.65);
        vec3 c = vec3(1.0, 1.0, 1.0);
        vec3 d = vec3(0.0, 0.33, 0.67);
        return a + b * cos(6.28318 * (c * t + d));
      }

      void main() {
        // Compute perturbed surface normal
        vec3 dX = dFdx(vWorldPosition);
        vec3 dY = dFdy(vWorldPosition);
        vec3 normal = normalize(cross(dX, dY));

        vec3 viewDir = normalize(cameraPosition - vWorldPosition);

        // 1. Extreme Thin-Film Fresnel Edge Reflection
        float NdotV = dot(normal, viewDir);
        float fresnel = pow(clamp(1.0 - abs(NdotV), 0.0, 1.0), 2.2);
        float deepFresnel = pow(clamp(1.0 - abs(NdotV), 0.0, 1.0), 4.5);

        // 2. Light 1: Golden Amber / Warm Light from Top-Right
        vec3 lightDir1 = normalize(uLightPos1 - vWorldPosition);
        float diff1 = max(dot(normal, lightDir1), 0.0);
        vec3 reflectDir1 = reflect(-lightDir1, normal);
        float spec1 = pow(max(dot(viewDir, reflectDir1), 0.0), 64.0);

        // 3. Light 2: Electric Cyan / Azure Spotlight from Bottom-Left
        vec3 lightDir2 = normalize(uLightPos2 - vWorldPosition);
        float diff2 = max(dot(normal, lightDir2), 0.0);
        vec3 reflectDir2 = reflect(-lightDir2, normal);
        float spec2 = pow(max(dot(viewDir, reflectDir2), 0.0), 40.0);

        // 4. Light 3: Magenta / Soft Pink Rim Light
        vec3 lightDir3 = normalize(uLightPos3 - vWorldPosition);
        float diff3 = max(dot(normal, lightDir3), 0.0);

        // 5. Chromatic Dispersion along bubble rim & folds (Pinterest Look)
        float spectralCoord = fresnel * 1.35 + vDisplacement * 0.8 + diff1 * 0.4 - diff2 * 0.3 + sin(uTime * 0.2) * 0.1;
        vec3 chromaticRim = rainbow(spectralCoord);

        // Vibrant Flame Gold / Amber & Neon Orange Accents on one side
        vec3 goldAmber = vec3(1.0, 0.72, 0.1);
        vec3 neonOrange = vec3(1.0, 0.32, 0.05);
        vec3 electricCyan = vec3(0.0, 0.85, 1.0);
        vec3 deepAzure = vec3(0.05, 0.3, 0.95);
        vec3 magentaPink = vec3(1.0, 0.2, 0.65);

        // 6. Translucent Core Base (Deep Obsidian Sapphire glass with inner dark refraction)
        vec3 baseCore = vec3(0.02, 0.04, 0.09); // Dark transparent liquid body
        baseCore += deepAzure * (1.0 - fresnel) * 0.15; // Subtle inner blue depth

        // Mix in chromatic dispersion along the perimeter
        vec3 finalColor = baseCore;

        // Add warm golden/amber glow on top hemisphere
        finalColor += mix(goldAmber, neonOrange, diff1) * diff1 * fresnel * 2.8;

        // Add electric cyan/blue glow on opposite rim
        finalColor += mix(electricCyan, deepAzure, diff2) * diff2 * fresnel * 2.4;

        // Add spectral rainbow fringe (Pink, Green, Yellow, Blue transition)
        finalColor += chromaticRim * deepFresnel * 1.8;

        // Add magenta / violet secondary flare
        finalColor += magentaPink * diff3 * fresnel * 1.2;

        // 7. Sharp Glass / Bubble Specular Hotspots
        finalColor += vec3(1.0, 0.98, 0.92) * spec1 * 2.6; // Golden white specular glint
        finalColor += vec3(0.8, 0.95, 1.0) * spec2 * 1.8;  // Cyan white specular glint

        // Bubble transparency: Center is translucent dark glass, edges are radiant chromatic fire
        float alpha = clamp(0.75 + fresnel * 0.25, 0.7, 0.98);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    // 3. Geometry: High-subdivision Fluid Bubble Sphere
    const geometry = new THREE.IcosahedronGeometry(1.85, 64);

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 0.3 },
      uNoiseDensity: { value: 0.9 },
      uNoiseStrength: { value: 0.38 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uLightPos1: { value: new THREE.Vector3(4.5, 4.0, 3.5) },   // Top-Right Gold Light
      uLightPos2: { value: new THREE.Vector3(-4.0, -3.5, 3.0) }, // Bottom-Left Cyan Light
      uLightPos3: { value: new THREE.Vector3(0.0, -4.5, -3.0) }, // Pink/Magenta Backlight
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4. Mouse Interactive Tracking with smooth spring damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 5. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 6. Animation Loop (Smooth Organic Zero-G Floating & Rotation)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      uniforms.uTime.value = elapsedTime;

      // Smooth mouse spring interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      uniforms.uMouse.value.set(mouse.x, mouse.y);

      // Continuous organic 3D floating and gentle rotation + mouse tilt
      mesh.rotation.y = elapsedTime * 0.12 + mouse.x * 0.35;
      mesh.rotation.x = Math.sin(elapsedTime * 0.1) * 0.18 + mouse.y * 0.3;
      mesh.rotation.z = Math.cos(elapsedTime * 0.08) * 0.12;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Cleanup on Unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
}
