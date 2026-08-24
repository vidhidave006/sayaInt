import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  Users,
  Award,
  Shield,
  Lightbulb,
  Target,
  AlarmClock,
  BarChart3,
  FileEdit,
  Zap,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "About Us | Saya Intellicall",
  description:
    "Welcome to Saya IntelliCall, where every conversation counts. Dedicated Telecalling and BPO partner fueling growth for event management and real estate businesses.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Collaboration",
      desc: "We believe win-win partnerships are built on transparency and teamwork.",
    },
    {
      title: "Excellence",
      desc: "Every call, report, and campaign reflects our commitment to quality.",
    },
    {
      title: "Integrity",
      desc: "We handle your data and brand reputation with the highest ethical standards.",
    },
    {
      title: "Innovation",
      desc: "We continuously refine processes and leverage the latest tools to stay ahead.",
    },
    {
      title: "Accountability",
      desc: "Clear KPIs and regular insights keep us focused on your success.",
    },
  ];

  const whyChooseUs = [
    "Cost-Effective Operations: Leverage India’s competitive advantage without compromising quality.",
    "Scalable Teams: Scale up or down seamlessly to match seasonal demands and campaign peaks.",
    "Advanced Analytics: Real-time dashboards, call monitoring, and performance insights for continuous improvement.",
    "Dedicated Account Management: A single point of contact focused on your success and ROI.",
  ];

  const galleryImages = [
    "/images/company/gallery-1.jpg",
    "/images/company/gallery-2.jpg",
    "/images/company/gallery-3.jpg",
    "/images/company/gallery-4.jpg",
    "/images/company/gallery-5.jpg",
    "/images/about-us.jpg",
  ];

  const counters = [
    { icon: AlarmClock, count: "130", label: "Happy Clients" },
    { icon: BarChart3, count: "130", label: "Projects completed" },
    { icon: FileEdit, count: "90", label: "Positive feedback" },
    { icon: Zap, count: "250", label: "Cups of Coffee" },
  ];

  return (
    <div className="bg-white">
      {/* 1. Header */}
      <PageHeader
        title="About Us"
        breadcrumb={[{ name: "About Us" }]}
      />

      {/* 2. We Create technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                We Create technology
              </h2>
              <p className="text-slate-600 text-base text-justify leading-relaxed">
                Welcome to Saya IntelliCall, where every conversation counts. We’re a dedicated Telecalling and BPO partner fuelling growth for event management and real estate businesses. By blending industry expertise with a client-centric approach, we turn leads into lasting relationships..
              </p>
              <p className="text-slate-600 text-base text-justify leading-relaxed">
                SAYA INTELLICALL is a technology services company that partners with businesses to drive growth, boost productivity, and embrace change. We combine cutting-edge solutions with a people-first philosophy to deliver measurable outcomes and lasting impact.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                <Image
                  src="/images/company/company-image.jpg"
                  alt="Saya Intellicall Company"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-base text-justify leading-relaxed">
                To empower event organizers and real estate professionals with seamless Telecalling solutions that drive engagement, nurture prospects, and accelerate revenue growth..
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200 mt-6">
                <Image
                  src="/images/company/company-image-2.jpg"
                  alt="Our Mission"
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-base text-justify leading-relaxed">
                To be the most trusted Telecalling partner in our industries, renowned for delivering personalized outreach, impeccable data security, and unparalleled ROI..
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200 mt-6">
                <Image
                  src="/images/company/company-image-3.jpg"
                  alt="Our Vision"
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Get Started Today Call To Action Banner */}
      <section className="py-16 bg-sky-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h4 className="text-2xl sm:text-3xl font-bold">Get Started Today</h4>
          <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
            Transform customer engagement & oprational efficiency with a partner who cares as much above your brand as you do.
          </p>
          <p className="text-sky-100 text-sm sm:text-base leading-relaxed font-medium">
            Contact us now for a free consultation and discover how our Call Center and BPO services in india can accelerate your business growth.
          </p>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Core Values
            </h2>
            <div className="space-y-2 text-slate-600 text-sm sm:text-base text-center max-w-2xl mx-auto">
              {coreValues.map((v, idx) => (
                <p key={idx}>
                  <strong>• {v.title}:</strong> {v.desc}
                </p>
              ))}
            </div>
            <div className="w-16 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Company Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative h-44 rounded-xl overflow-hidden shadow-sm bg-slate-100 border border-slate-200 group"
              >
                <Image
                  src={src}
                  alt={`Company Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Clients Choose Us + Counters */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why Clients Choose Us
            </h2>
            <div className="space-y-2 text-slate-300 text-sm sm:text-base text-center max-w-2xl mx-auto leading-relaxed">
              {whyChooseUs.map((point, idx) => (
                <p key={idx}>• {point}</p>
              ))}
            </div>
          </div>

          {/* 4 Counter Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {counters.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 space-y-2 flex flex-col items-center">
                  <Icon className="w-8 h-8 text-sky-400 mb-2" />
                  <div className="text-4xl sm:text-5xl font-extrabold text-white">
                    {item.count}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    {item.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom Call To Action */}
      <section className="py-20 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let's Create Something Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            “Our tailored solutions ensure compliance with industry regulations and align with your unique business workflows.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 rounded-md font-semibold text-sm shadow-lg shadow-sky-500/30 transition-all uppercase tracking-wider"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
