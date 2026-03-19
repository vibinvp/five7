import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero1.jpg"
        alt="Five7 Premium Men&apos;s Fashion - Stylish menswear collection"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Accent Line */}
        <div className="mb-8 h-px w-16 bg-brand-red" />

        {/* Headline */}
        <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Premium Men&apos;s
          <br />
          <span className="italic">Fashion</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base font-light tracking-[0.3em] text-white/80 uppercase sm:text-lg md:text-xl">
          Retail in Kerala &bull; Exporting to Dubai
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/brands"
            className="group relative overflow-hidden bg-brand-red px-10 py-4 text-sm font-medium tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-brand-red-dark"
          >
            <span className="relative z-10">Explore Brands</span>
            <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
          <Link
            href="/stores"
            className="border border-white/30 px-10 py-4 text-sm font-medium tracking-[0.2em] text-white uppercase transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Visit Stores
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-[0.3em] text-white/50 uppercase">
              Scroll
            </span>
            <div className="h-12 w-px animate-pulse bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
