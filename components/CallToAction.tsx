import Link from "next/link";
import { ArrowRight, PhoneCall, MessageSquare, Sparkles } from "lucide-react";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  showPhone?: boolean;
}

export default function CallToAction({
  title = "Let's Create Something Together",
  subtitle = "Every Ring is a New Opportunity. Transform customer engagement and accelerate your business growth with our tailored telecalling and BPO solutions.",
  primaryBtnText = "Contact Us Today",
  primaryBtnHref = "/contact",
  showPhone = true,
}: CTAProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider border border-sky-500/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Ready for Growth?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href={primaryBtnHref}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/919890044786?text=Hello%20Saya%20Intellicall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold text-base shadow-xl shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Quick Chat</span>
          </a>

          {showPhone && (
            <a
              href="tel:+918983689836"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-semibold text-base backdrop-blur-xs transition-all"
            >
              <PhoneCall className="w-4 h-4 text-sky-400" />
              <span>+91 89836 89836</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
