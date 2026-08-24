import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Headphones,
  CheckCircle2
} from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-48 bg-white/10 p-2 rounded-xl backdrop-blur-xs border border-white/10">
                <Image
                  src="/images/logo-white.png"
                  alt="Saya Intellicall Logo"
                  fill
                  className="object-contain object-left px-2"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              We specialize in telecalling, inbound and outbound call center services, sales & marketing campaigns, and back office BPO operations. Our tailored solutions enhance customer engagement, increase conversions, and drive sustainable business growth across India.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://in.linkedin.com/in/abdullahsaya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all transform hover:-translate-y-1"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/SayaIntellicall/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all transform hover:-translate-y-1"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/abdullah.f.saya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all transform hover:-translate-y-1"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919890044786?text=Hello%20Saya%20Intellicall"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all transform hover:-translate-y-1"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="https://www.justdial.com/Aurangabad-Maharashtra/Saya-Intellicall-Above-Reliance-Life-Insurance-Office-Nirala-Bazar-New-Samarth-Nagar-Nirala-Bazar/9999PX240-X240-130806122203-Y2J6_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JustDial"
                className="px-3 h-10 rounded-xl bg-slate-900 hover:bg-amber-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center text-xs font-bold transition-all transform hover:-translate-y-1"
              >
                JD
              </a>
            </div>
          </div>

          {/* Column 2: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/service"
                  className="hover:text-sky-400 flex items-center gap-2 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  Inbound Call Center
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-sky-400 flex items-center gap-2 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  Outbound Telecalling
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-sky-400 flex items-center gap-2 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  SMS Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-sky-400 flex items-center gap-2 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  WhatsApp Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-sky-400 flex items-center gap-2 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  Multi Level IVR Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-sky-400 flex items-center gap-2 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  BPO & Business Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-sky-400 flex items-center gap-2 transition-colors group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-400 flex items-center gap-2 transition-colors group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-sky-400 flex items-center gap-2 transition-colors group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-sky-400 flex items-center gap-2 transition-colors group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 flex items-center gap-2 transition-colors group">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Our Locations
            </h3>
            <div className="space-y-4 text-xs text-slate-400">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80">
                <p className="font-semibold text-slate-200 text-sm mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  Aurangabad Office:
                </p>
                <p className="leading-relaxed">
                  D-24, 1st Floor, Motiwala Trade Centre, Nirala Bazar, New Samarth Nagar, Aurangabad - 431001
                </p>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80">
                <p className="font-semibold text-slate-200 text-sm mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  Pune Office:
                </p>
                <p className="leading-relaxed">
                  Ashoka Mews, Off No: K10 & K11, Kondhwa Khurd, Meeta Nagar, Kondhwa, Pune - 411048
                </p>
              </div>

              <div className="flex items-center gap-2 text-slate-200 font-medium pt-1">
                <Phone className="w-4 h-4 text-sky-400" />
                <a href="tel:+918983689836" className="hover:text-sky-400 transition-colors">
                  +91 89836 89836
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025-{currentYear} Saya Intellicall. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Data Security & DNC Compliant
            </span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
