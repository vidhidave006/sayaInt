import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Our Team | Saya Intellicall",
  description:
    "Meet Our Team. We believe that the most valuable resource in any organization is its people.",
};

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* 1. Header */}
      <PageHeader
        title="Our Team"
        breadcrumb={[{ name: "Our Team" }]}
      />

      {/* 2. Meet Our Team Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Meet Our Team
            </h2>
            <div className="text-slate-700 text-sm sm:text-base text-justify leading-relaxed space-y-2">
              <p className="font-bold text-slate-900 text-lg">Our Philosophy :</p>
              <p>We believe that the most valuable resource in any organization is its people. That’s why we focus on:</p>
              <ul className="space-y-1 list-none">
                <li>• Recognition: Celebrating achievements and contributions.</li>
                <li>• Involvement: Empowering team members to take ownership.</li>
                <li>• Development: Providing opportunities for personal and career growth.</li>
              </ul>
            </div>
            <div className="w-16 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Team Image & Culture Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                <Image
                  src="/images/about-us.jpg"
                  alt="Saya Intellicall Team"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Culture & People in Action */}
            <div className="lg:col-span-6 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
              {/* Culture */}
              <div className="space-y-2">
                <p className="font-bold text-slate-900 text-lg">Our Culture :</p>
                <p>Collaboration and trust lie at the heart of everything we do. We foster a team-oriented environment built on:</p>
                <ul className="space-y-1">
                  <li>• Objectivity: Making decisions based on data and fairness.</li>
                  <li>• Integrity: Upholding the highest ethical standards.</li>
                  <li>• Openness: Encouraging transparent communication.</li>
                  <li>• Trust: Supporting one another to achieve shared goals.</li>
                </ul>
              </div>

              {/* Our People in Action */}
              <div className="space-y-2">
                <p className="font-bold text-slate-900 text-lg">Our People in Action</p>
                <p>Every day, our team brings passion and expertise to a variety of challenging and rewarding roles. Whether it’s:</p>
                <ul className="space-y-1">
                  <li>• Pushing boundaries to meet ambitious targets</li>
                  <li>• Managing complex projects or high-performing teams</li>
                  <li>• Solving intricate problems with innovative approaches</li>
                  <li>• Building strong relationships with clients and stakeholders</li>
                </ul>
                <p className="pt-1">our people are committed to excellence and continuous learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
