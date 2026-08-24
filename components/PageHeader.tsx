import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumb: { name: string; href?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden border-b border-slate-800">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-1/2 left-1/4 w-[600px] h-[600px] bg-sky-500 rounded-full blur-[140px]" />
        <div className="absolute -bottom-1/2 right-1/4 w-[600px] h-[600px] bg-blue-700 rounded-full blur-[140px]" />
      </div>

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-sky-500/20">
            {badge}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs */}
        <nav
          className="flex justify-center items-center space-x-2 text-xs sm:text-sm text-slate-400 pt-2"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-sky-400 font-semibold">{item.name}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
