import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Sparkles, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us | Saya Intellicall",
  description:
    "Get In Touch with Saya Intellicall. Transform customer engagement and operational efficiency with a partner who cares as much about your brand as you do.",
};

export default function ContactPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Header */}
      <PageHeader
        title="Contact Us"
        breadcrumb={[{ name: "Contact Us" }]}
      />

      {/* 2. Contact Section */}
      <section className="py-20 lg:py-28 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span>We Are Here For You</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Transform customer engagement and operational efficiency with a partner who cares as much about your brand as you do. Contact us now for a free consultation and discover how our Call Center and BPO services in India can accelerate your business growth.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Details with Pulsing Beacons (6 cols) */}
            <div className="md:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Contact Details</h3>
              <p className="text-slate-600 text-sm sm:text-base text-justify leading-relaxed">
                At SAYA INTELLICALL, we’re always looking for new talent and collaborators who share our drive. If you’re interested in exploring career opportunities or discussing how our services can transform your business, let’s connect.
              </p>

              {/* Aurangabad Office */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 card-interactive shadow-xs space-y-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    <span>Aurangabad Office :</span>
                  </h5>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full">
                    Headquarters
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  D-24, First Floor, Motiwala Trade Centre, Nirala Bazar, <br />
                  New Samarth Nagar, Aurangabad -431 001.
                </p>
                <div className="flex items-center gap-2 text-slate-800 text-sm font-medium pt-2 border-t border-slate-200/60">
                  <Phone className="w-4 h-4 text-sky-600 group-hover:rotate-12 transition-transform" />
                  <a href="tel:+918983689836" className="hover:text-sky-600 transition-colors">
                    Phone: +91 91 89836 89836
                  </a>
                </div>
              </div>

              {/* Pune Office */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 card-interactive shadow-xs space-y-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span>Pune Office :</span>
                  </h5>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
                    Branch Office
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ashoka Mews , Off No: K10 & K11 , Kondhwa Khurd,<br />
                  Meeta Nagat , Kondhwa,Pune - 411 048.
                </p>
                <div className="flex items-center gap-2 text-slate-800 text-sm font-medium pt-2 border-t border-slate-200/60">
                  <Phone className="w-4 h-4 text-sky-600 group-hover:rotate-12 transition-transform" />
                  <a href="tel:+918983689836" className="hover:text-sky-600 transition-colors">
                    Phone: +91 91 89836 89836
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form (6 cols) */}
            <div className="md:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
