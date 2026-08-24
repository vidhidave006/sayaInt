import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ExternalLink,
  ShieldCheck,
  Headphones,
  CheckCircle2
} from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "Contact Us | Saya Intellicall - Telecalling & BPO Offices",
  description:
    "Get in touch with Saya Intellicall. Contact our Aurangabad or Pune branches for inbound, outbound telecalling, and BPO consultation.",
};

export default function ContactPage() {
  const offices = [
    {
      city: "Aurangabad Office (HQ)",
      address: "D-24, First Floor, Motiwala Trade Centre, Nirala Bazar, New Samarth Nagar, Aurangabad - 431 001",
      phone: "+91 89836 89836",
      whatsapp: "+91 98900 44786",
      mapQuery: "Motiwala+Trade+Centre+Nirala+Bazar+Aurangabad",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.128714101968!2d75.3255!3d19.8825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba299c0b968a3%3A0x6bcfd36a9486dc34!2sNirala%20Bazar%2C%20Aurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    },
    {
      city: "Pune Branch Office",
      address: "Ashoka Mews, Off No: K10 & K11, Kondhwa Khurd, Meeta Nagar, Kondhwa, Pune - 411 048",
      phone: "+91 89836 89836",
      whatsapp: "+91 98900 44786",
      mapQuery: "Ashoka+Mews+Kondhwa+Pune",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.450123456789!2d73.8955!3d18.4725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea99c0b968a3%3A0x6bcfd36a9486dc34!2sKondhwa%20Khurd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    },
  ];

  return (
    <div>
      {/* 1. Header */}
      <PageHeader
        title="Get In Touch"
        subtitle="Transform customer engagement and operational efficiency with a dedicated partner who cares as much about your brand as you do."
        badge="Contact Us"
        breadcrumb={[{ name: "Contact" }]}
      />

      {/* 2. Contact Details & Form Section */}
      <section className="py-24 bg-slate-50" id="contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Branch Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                  We Are Here To Help
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Let’s Start a Conversation
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  At <strong>SAYA INTELLICALL</strong>, we are always eager to collaborate with growth-focused businesses. Whether you need an exploratory consultation or a customized telecalling quote, reach out to our team today.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <a
                  href="tel:+918983689836"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-500 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Direct Phone Line</p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      +91 89836 89836
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919890044786?text=Hello%20Saya%20Intellicall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">WhatsApp Business</p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      +91 98900 44786 (Instant Chat)
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Operating Hours</p>
                    <p className="text-sm font-bold text-slate-900">
                      Monday - Saturday: 9:30 AM - 7:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Connect on Social Networks:
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://in.linkedin.com/in/abdullahsaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white text-slate-700 hover:text-sky-600 border border-slate-200 flex items-center justify-center shadow-xs hover:shadow-md transition-all"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/SayaIntellicall/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white text-slate-700 hover:text-blue-600 border border-slate-200 flex items-center justify-center shadow-xs hover:shadow-md transition-all"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/abdullah.f.saya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white text-slate-700 hover:text-pink-600 border border-slate-200 flex items-center justify-center shadow-xs hover:shadow-md transition-all"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.justdial.com/Aurangabad-Maharashtra/Saya-Intellicall-Above-Reliance-Life-Insurance-Office-Nirala-Bazar-New-Samarth-Nagar-Nirala-Bazar/9999PX240-X240-130806122203-Y2J6_BZDET"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 h-10 rounded-xl bg-white text-slate-700 hover:text-amber-600 border border-slate-200 flex items-center justify-center text-xs font-bold shadow-xs hover:shadow-md transition-all"
                  >
                    JustDial
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Working Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Branch Offices Showcase */}
      <section className="py-20 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full">
              Our Locations
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Visit or Contact Our Branch Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                      Branch #{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{office.city}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{office.address}</p>
                  <div className="pt-2 space-y-1.5 text-sm">
                    <p className="text-slate-700">
                      <strong>Phone:</strong>{" "}
                      <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="text-sky-600 hover:underline">
                        {office.phone}
                      </a>
                    </p>
                    <p className="text-slate-700">
                      <strong>WhatsApp:</strong>{" "}
                      <a
                        href={`https://wa.me/${office.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Saya%20Intellicall`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        {office.whatsapp}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href={`https://maps.google.com/?q=${office.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+918983689836"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Branch</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
