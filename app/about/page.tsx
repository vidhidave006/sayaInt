import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CoreValues from "@/components/CoreValues";
import GallerySection from "@/components/GallerySection";
import CounterSection from "@/components/CounterSection";
import CallToAction from "@/components/CallToAction";
import {
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award
} from "lucide-react";

export const metadata = {
  title: "About Us | Saya Intellicall - Telecalling & BPO Solutions",
  description: "Learn more about Saya Intellicall, our mission, vision, and people-first telecalling solutions across India.",
};

export default function AboutPage() {
  return (
    <div>
      {/* 1. Page Header */}
      <PageHeader
        title="About Saya Intellicall"
        subtitle="Where every conversation counts. Blending industry expertise with cutting-edge technology and human connection to turn prospects into lasting relationships."
        badge="Company Overview"
        breadcrumb={[{ name: "About Us" }]}
      />

      {/* 2. We Create Technology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Our Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                We Combine Technology with Human Connection
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Welcome to <strong>Saya IntelliCall</strong>, where every conversation counts. We are a dedicated Telecalling and BPO partner fueling growth for businesses across real estate, events, healthcare, BFSI, and e-commerce.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                SAYA INTELLICALL is a technology-driven customer engagement and services firm that partners with forward-thinking enterprises to drive revenue, boost agent productivity, and embrace modern communication channels. We combine cutting-edge multi-channel dialers, CRM integrations, and structured scripts with a people-first philosophy to deliver measurable outcomes and lasting impact.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-2xl font-black text-sky-600">100%</span>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Pan-India Support Coverage</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-2xl font-black text-emerald-600">2 Branch</span>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Offices in Aurangabad & Pune</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-4 border-white">
                <Image
                  src="/images/company/company-image.jpg"
                  alt="Saya Intellicall Technology and Operations"
                  width={700}
                  height={500}
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To empower organizers, developers, and growing businesses with seamless, data-driven Telecalling solutions that drive genuine engagement, nurture high-value prospects, and accelerate sustainable revenue growth.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-48 w-full bg-slate-100">
                <Image
                  src="/images/company/company-image-2.jpg"
                  alt="Saya Intellicall Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To be the most trusted Telecalling and BPO partner across India, renowned for delivering personalized outreach, impeccable data security, continuous innovation, and unparalleled return on investment.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-48 w-full bg-slate-100">
                <Image
                  src="/images/company/company-image-3.jpg"
                  alt="Saya Intellicall Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <CoreValues />

      {/* 5. Company Gallery & Culture */}
      <GallerySection />

      {/* 6. Counters & Why Choose Us */}
      <CounterSection showHeader={true} />

      {/* 7. Call To Action */}
      <CallToAction
        title="Transform Your Customer Engagement"
        subtitle="Partner with a team that cares as much about your brand reputation and conversion success as you do. Request a free consultation today."
        primaryBtnText="Get in Touch with Us"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
