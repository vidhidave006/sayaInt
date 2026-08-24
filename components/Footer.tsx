import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";
import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#070D1E] text-slate-300 py-16 border-t border-slate-800/80 relative overflow-hidden">
      {/* Soft Ambient Deep Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              about
            </h3>
            <p className="text-sm text-slate-400 text-justify leading-relaxed">
              we specialize in telecalling, inbound and outbound services, sales and marketing, and back office operations. Our tailored solutions are designed to enhance customer engagement and drive business growth.
            </p>
          </div>

          {/* Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>Inbound Services</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>Outbound Services</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>SMS Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>Whats App Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>Multi Level IVR</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>Consultancy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>Team</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Socially (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Socially
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="https://in.linkedin.com/in/abdullahsaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center group-hover:border-sky-500 group-hover:bg-sky-500/10 group-hover:text-white transition-all shadow-xs">
                    <LinkedinIcon className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/SayaIntellicall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:text-white transition-all shadow-xs">
                    <FacebookIcon className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/abdullah.f.saya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-pink-400 flex items-center justify-center group-hover:border-pink-500 group-hover:bg-pink-500/10 group-hover:text-white transition-all shadow-xs">
                    <InstagramIcon className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919890044786?text=Hello%20Saya%20Intellicall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/10 group-hover:text-white transition-all shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">Whats App</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.justdial.com/Aurangabad-Maharashtra/Saya-Intellicall-Above-Reliance-Life-Insurance-Office-Nirala-Bazar-New-Samarth-Nagar-Nirala-Bazar/9999PX240-X240-130806122203-Y2J6_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 font-bold text-xs flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 group-hover:text-white transition-all shadow-xs">
                    JD
                  </span>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">Just Dial</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 text-center text-xs text-slate-500 font-medium">
          <h5>All rights reserved 2025@Saya Intellicall</h5>
        </div>
      </div>
    </footer>
  );
}
