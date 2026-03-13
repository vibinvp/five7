import Image from "next/image";
import Link from "next/link";

export default function ExportSection() {
  return (
    <section id="export" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/export/dubai.jpg"
          alt="Dubai skyline - Five7 export operations to GCC markets"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/80 to-brand-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-brand-red uppercase">
            Global Reach
          </p>

          {/* Headline */}
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Export
            <br />
            <span className="italic">Opportunities</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Partner with Five7 to bring premium Indian menswear to Dubai and GCC
            markets. We offer wholesale and distribution partnerships for
            retailers and fashion entrepreneurs across the Middle East.
          </p>

          {/* Stats */}
          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-heading text-3xl font-bold text-brand-red md:text-4xl">
                3
              </p>
              <p className="mt-1 text-sm text-white/60">Premium Brands</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-brand-red md:text-4xl">
                GCC
              </p>
              <p className="mt-1 text-sm text-white/60">Export Markets</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-brand-red md:text-4xl">
                10+
              </p>
              <p className="mt-1 text-sm text-white/60">Years Experience</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              href="/export"
              className="group relative inline-flex overflow-hidden bg-brand-red px-10 py-4 text-sm font-medium tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-brand-red-dark"
            >
              <span className="relative z-10">Become a Dealer</span>
              <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
