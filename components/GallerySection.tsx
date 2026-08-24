import Image from "next/image";

export default function GallerySection() {
  const images = [
    { src: "/images/company/gallery-1.jpg", alt: "Saya Intellicall Workspace & Infrastructure" },
    { src: "/images/company/gallery-2.jpg", alt: "Telecalling Agents in Action" },
    { src: "/images/company/gallery-3.jpg", alt: "Team Collaboration & Strategy Sessions" },
    { src: "/images/company/gallery-4.jpg", alt: "Customer Support Floor" },
    { src: "/images/company/gallery-5.jpg", alt: "Modern BPO Facilities" },
    { src: "/images/company/telecalling-tech.jpg", alt: "Saya Intellicall Operations" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full">
            Inside Saya Intellicall
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our Culture & Work Environment
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            A state-of-the-art infrastructure powered by passionate professionals dedicated to delivering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-slate-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
