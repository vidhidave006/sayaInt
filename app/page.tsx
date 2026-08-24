import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import {
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  Smartphone,
  PhoneCall,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from "lucide-react";

export const metadata = {
  title: "Saya Intellicall | Inbound & Outbound Telecalling Solutions",
  description:
    "Delivering exceptional inbound and outbound Telecalling solutions across India to boost your customer engagement, drive sales, and elevate brand loyalty.",
};

export default function Home() {
  const services = [
    {
      icon: PhoneIncoming,
      title: "Inbound Call Center",
      desc: "Expert inbound and outbound calling to enhance customer engagement.",
      href: "/service",
    },
    {
      icon: PhoneOutgoing,
      title: "Outbound Services",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
    },
    {
      icon: Smartphone,
      title: "SMS Marketing",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
    },
    {
      icon: MessageSquare,
      title: "Whats App Marketing",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
    },
    {
      icon: PhoneCall,
      title: "Multi Level IVR",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
    },
    {
      icon: Briefcase,
      title: "Consultancy",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
    },
  ];

  const checklist = [
    "Industry expertise in events, real estate, and customer engagement.",
    "Multilingual support and region-specific telecalling.",
    "Customized scripts and CRM integration.",
    "Performance metrics tracked in real time for full transparency.",
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Slider Section */}
      <HeroSlider />

      {/* 2. What We Offer Section */}
      <section className="py-20 lg:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              What We Offer
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              • Inbound & Outbound Telecalling
            </p>
            <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Member Image */}
            <div className="md:col-span-4 hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                <Image
                  src="/images/about/member.jpg"
                  alt="Saya Intellicall Team Member"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Service Items Grid */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-sky-500/50 hover:bg-white hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {srv.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {srv.desc}
                    </p>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. We Are Saya Section */}
      <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/60" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              We Are Saya
            </h2>
            <p className="text-slate-600 text-sm sm:text-base text-justify sm:text-center leading-relaxed">
              Delivering exceptional inbound and outbound Telecalling solutions across India to boost your customer engagement, drive sales, and elevate brand loyalty.
            </p>
            <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 border border-slate-200">
              <Image
                src="/images/about/about-2.png"
                alt="We Are Saya"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            {/* Right Checklist */}
            <div className="space-y-6">
              <ul className="space-y-4">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  href="/service"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3 rounded-md font-semibold text-sm shadow-md hover:shadow-lg transition-all uppercase tracking-wider"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call To Action Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let's Create Something Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Every Ring is a New Opportunity. Let’s make each One Count.
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
