import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";
import { MessageSquare, Phone, MapPin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#131d2e] text-slate-300 pt-16 border-t border-slate-700/70 relative overflow-hidden">
      {/* Subtle ambient light glow */}
      <div className="absolute top-0 left-1/4 w-96 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-xs shadow-sky-400" />
              about
            </h3>
            <p className="text-sm text-slate-300 text-justify leading-relaxed">
              we specialize in telecalling, inbound and outbound services, sales and marketing, and back office operations. Our tailored solutions are designed to enhance customer engagement and drive business growth.
            </p>
          </div>

          {/* Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-xs shadow-sky-400" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>Inbound Services</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>Outbound Services</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>SMS Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>Whats App Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>Multi Level IVR</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>Consultancy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-xs shadow-sky-400" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>Team</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Socially (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-xs shadow-sky-400" />
              Socially
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://in.linkedin.com/in/abdullahsaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2.5 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/80 shadow-xs flex items-center justify-center text-sky-400 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-500 transition-all">
                    <LinkedinIcon className="w-4 h-4" />
                  </span>
                  <span className="font-medium">Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/SayaIntellicall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2.5 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/80 shadow-xs flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all">
                    <FacebookIcon className="w-4 h-4" />
                  </span>
                  <span className="font-medium">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/abdullah.f.saya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-2.5 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/80 shadow-xs flex items-center justify-center text-pink-400 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-500 transition-all">
                    <InstagramIcon className="w-4 h-4" />
                  </span>
                  <span className="font-medium">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919890044786?text=Hello%20Saya%20Intellicall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2.5 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/80 shadow-xs flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500 transition-all">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <span className="font-medium">Whats App</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.justdial.com/Aurangabad-Maharashtra/Saya-Intellicall-Above-Reliance-Life-Insurance-Office-Nirala-Bazar-New-Samarth-Nagar-Nirala-Bazar/9999PX240-X240-130806122203-Y2J6_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-2.5 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/80 shadow-xs flex items-center justify-center text-amber-400 font-bold text-xs group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-500 transition-all">
                    JD
                  </span>
                  <span className="font-medium">Just Dial</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#0c1420] py-6 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400 font-medium">
          <h5>All rights reserved 2025@Saya Intellicall</h5>
        </div>
      </div>
    </footer>
  );
}
