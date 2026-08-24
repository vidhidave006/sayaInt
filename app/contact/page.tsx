import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Saya Intellicall",
  description:
    "Get In Touch with Saya Intellicall. Transform customer engagement and operational efficiency with a partner who cares as much about your brand as you do.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* 1. Header */}
      <PageHeader
        title="Contact Us"
        breadcrumb={[{ name: "Contact Us" }]}
      />

      {/* 2. Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Transform customer engagement and operational efficiency with a partner who cares as much about your brand as you do. Contact us now for a free consultation and discover how our Call Center and BPO services in India can accelerate your business growth.
            </p>
            <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Details (6 cols) */}
            <div className="md:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Contact Details</h3>
              <p className="text-slate-600 text-sm sm:text-base text-justify leading-relaxed">
                At SAYA INTELLICALL, we’re always looking for new talent and collaborators who share our drive. If you’re interested in exploring career opportunities or discussing how our services can transform your business, let’s connect.
              </p>

              {/* Aurangabad Office */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="font-bold text-slate-900 text-lg">Aurangabad Office :</h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  D-24, First Floor, Motiwala Trade Centre, Nirala Bazar, <br />
                  New Samarth Nagar, Aurangabad -431 001.
                </p>
                <div className="flex items-center gap-2 text-slate-800 text-sm font-medium pt-2">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Phone: +91 91 89836 89836</span>
                </div>
              </div>

              {/* Pune Office */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="font-bold text-slate-900 text-lg">Pune Office :</h5>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ashoka Mews , Off No: K10 & K11 , Kondhwa Khurd,<br />
                  Meeta Nagat , Kondhwa,Pune - 411 048.
                </p>
                <div className="flex items-center gap-2 text-slate-800 text-sm font-medium pt-2">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Phone: +91 91 89836 89836</span>
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
