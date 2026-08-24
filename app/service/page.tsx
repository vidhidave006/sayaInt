import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ComplianceSkills from "@/components/ComplianceSkills";
import IndustryExpertise from "@/components/IndustryExpertise";
import CounterSection from "@/components/CounterSection";
import CallToAction from "@/components/CallToAction";
import {
  PhoneIncoming,
  PhoneOutgoing,
  Smartphone,
  MessageSquare,
  PhoneCall,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Headphones,
  Sliders
} from "lucide-react";

export const metadata = {
  title: "Our Services | Saya Intellicall - Inbound, Outbound, SMS & WhatsApp Solutions",
  description:
    "Explore our complete range of telecalling services: Inbound Call Center, Outbound Telecalling, SMS Marketing, WhatsApp Marketing, Multi-Level IVR, and BPO Consultancy.",
};

export default function ServicesPage() {
  const serviceCards = [
    {
      id: "inbound",
      icon: PhoneIncoming,
      title: "Inbound Call Center",
      badge: "24/7 Availability",
      description:
        "Customers initiating contact to request support, product information, technical assistance, or order bookings. We provide prompt, empathetic, and resolution-focused inbound care.",
      features: [
        "24/7 Customer Helpdesk & Support Line",
        "Order Booking & Inquiry Processing",
        "Technical Support & Escalation Management",
        "High First-Call Resolution (FCR) Guarantee",
      ],
      color: "border-sky-200 bg-sky-50/50",
      iconBg: "bg-sky-500 text-white",
    },
    {
      id: "outbound",
      icon: PhoneOutgoing,
      title: "Outbound Services",
      badge: "High Conversion",
      description:
        "Proactively reaching out to verified prospects and customers via phone, email, and multi-channel follow-ups to drive sales conversions, event attendance, and customer renewals.",
      features: [
        "Lead Generation & B2B/B2C Tele-Sales",
        "Event Invites & Delegate Registrations",
        "Customer Retention & Feedback Follow-ups",
        "Customized Objection-Handling Scripts",
      ],
      color: "border-blue-200 bg-blue-50/50",
      iconBg: "bg-blue-600 text-white",
    },
    {
      id: "sms",
      icon: Smartphone,
      title: "SMS Marketing",
      badge: "Instant Delivery",
      description:
        "Sending high-speed promotional, transactional, and reminder SMS messages directly to customers' handsets with DLT compliance and real-time delivery reporting.",
      features: [
        "DLT-Approved Sender IDs & Header Setup",
        "High-Speed Transactional & OTP Delivery",
        "Targeted Promotional Bulk Campaigns",
        "Rich Link Tracking & Detailed Analytics",
      ],
      color: "border-emerald-200 bg-emerald-50/50",
      iconBg: "bg-emerald-600 text-white",
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      title: "WhatsApp Marketing",
      badge: "Official API",
      description:
        "Engaging customers on India's most popular messaging app using official WhatsApp Business API for rich media broadcasts, automated chatbots, and 2-way conversational commerce.",
      features: [
        "Official Green Tick Verified Business API",
        "Automated 24/7 Interactive Chatbots",
        "Rich Media Broadcasts (Images, PDFs, CTAs)",
        "Automated Order & Reminder Notifications",
      ],
      color: "border-teal-200 bg-teal-50/50",
      iconBg: "bg-teal-600 text-white",
    },
    {
      id: "ivr",
      icon: PhoneCall,
      title: "Multi Level IVR",
      badge: "Smart Routing",
      description:
        "Advanced Interactive Voice Response phone systems that utilize structured, layered voice menus and submenus to guide callers seamlessly to the appropriate department.",
      features: [
        "Custom Multilingual Professional Voice Prompts",
        "Skill-Based & Time-Based Call Distribution",
        "Call Queuing & Virtual Receptionist",
        "Real-Time Call Recording & Audit Dashboard",
      ],
      color: "border-amber-200 bg-amber-50/50",
      iconBg: "bg-amber-600 text-white",
    },
    {
      id: "consultancy",
      icon: Briefcase,
      title: "BPO & Consultancy",
      badge: "Operational ROI",
      description:
        "Hiring specialized external consultants and operations leaders to manage, optimize, and scale non-core business processes, back office administration, and contact centers.",
      features: [
        "Contact Center Workflow Optimization",
        "Quality Assurance & Script Engineering",
        "CRM Integration & Pipeline Automation",
        "Dedicated Account & Operations Manager",
      ],
      color: "border-indigo-200 bg-indigo-50/50",
      iconBg: "bg-indigo-600 text-white",
    },
  ];

  return (
    <div>
      {/* 1. Header */}
      <PageHeader
        title="Our Services"
        subtitle="End-to-end telecalling, voice automation, messaging campaigns, and BPO management designed to accelerate customer acquisition and retention."
        badge="What We Do"
        breadcrumb={[{ name: "Services" }]}
      />

      {/* 2. Main Services Grid */}
      <section className="py-24 bg-white" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full">
              Enterprise Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Telecalling & Digital Outreach
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every business has unique touchpoints. We craft customized calling workflows and multichannel messaging to meet your exact campaign objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`rounded-3xl p-8 border ${service.color} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between bg-white`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-md`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>

                    <div className="pt-2 space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Capabilities:
                      </p>
                      {service.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-sky-600 text-slate-700 hover:text-white font-semibold text-xs transition-all duration-200 group"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4 text-sky-500 group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Compliance & Operational Proficiency */}
      <ComplianceSkills />

      {/* 4. Industry Expertise */}
      <IndustryExpertise />

      {/* 5. Metrics & Counters */}
      <CounterSection showHeader={true} />

      {/* 6. Call to Action */}
      <CallToAction
        title="Ready to Elevate Your Outreach?"
        subtitle="Let’s discuss how tailored telecalling can spark new opportunities for your events, properties, or products. Reach out today to schedule a free consultation."
        primaryBtnText="Contact Us Today"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
