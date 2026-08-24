import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";
import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              about
            </h3>
            <p className="text-sm text-slate-400 text-justify leading-relaxed">
              we specialize in telecalling, inbound and outbound services, sales and marketing, and back office operations. Our tailored solutions are designed to enhance customer engagement and drive business growth.
            </p>
          </div>

          {/* Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors">
                  Inbound Services
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors">
                  Outbound Services
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors">
                  SMS Marketing
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors">
                  Whats App Marketing
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors">
                  Multi Level IVR
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors">
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-sky-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socially (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              Socially
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://in.linkedin.com/in/abdullahsaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/SayaIntellicall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-400" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/abdullah.f.saya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919890044786?text=Hello%20Saya%20Intellicall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Whats App</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.justdial.com/Aurangabad-Maharashtra/Saya-Intellicall-Above-Reliance-Life-Insurance-Office-Nirala-Bazar-New-Samarth-Nagar-Nirala-Bazar/9999PX240-X240-130806122203-Y2J6_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="font-bold text-amber-400 text-xs">JD</span>
                  <span>Just Dial</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <h5>All rights reserved 2025@Saya Intellicall</h5>
        </div>
      </div>
    </footer>
  );
}
