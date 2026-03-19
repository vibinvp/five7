import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Operations | Five7 — Premium Men&apos;s Fashion",
  description:
    "Five7 exporting premium men&apos;s fashion from Kerala to Dubai and GCC markets. Partner with us for high-quality menswear distribution.",
};

const exportPoints = [
  {
    title: "High Quality Products",
    description: "Premium fabrics and superior craftsmanship in every garment.",
  },
  {
    title: "Competitive Pricing",
    description: "Attractive wholesale margins for our retail partners.",
  },
  {
    title: "Reliable Supply",
    description: "Consistent inventory management and timely international shipping.",
  },
  {
    title: "Strong Branding",
    description: "Established brand identity with premium marketing support.",
  },
  {
    title: "Growing Market Presence",
    description: "Expanding footprint across Dubai and the wider GCC region.",
  },
];

const brands = [
  {
    name: "Five Seven",
    image: "/images/brands/five7.jpg",
    description: "Our flagship brand for premium formal and semi-formal menswear.",
  },
  {
    name: "FS Club",
    image: "/images/brands/fsclub.jpg",
    description: "Contemporary casual wear for the modern, style-conscious man.",
  },
  {
    name: "FS Polo",
    image: "/images/brands/fspolo.jpg",
    description: "Elevated sporty-casual essentials with a focus on quality polos.",
  },
];

export default function ExportPage() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-center">
        <Image
          src="/images/export/dubai.jpg"
          alt="Five7 Global Export - Dubai & GCC"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/40 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 text-xs font-bold tracking-[0.4em] text-brand-red uppercase">
              International Reach
            </span>
            <h1 className="font-heading text-5xl font-bold text-white md:text-7xl lg:text-8xl leading-tight">
              Global <br />
              <span className="italic font-normal">Export</span>
            </h1>
            <p className="mt-8 text-lg text-white/80 md:text-xl max-w-lg leading-relaxed font-body">
              Exporting premium men&apos;s fashion from Kerala to Dubai and GCC markets.
            </p>
            <div className="mt-10 h-1 w-20 bg-brand-red" />
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="bg-brand-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="sr-only">Export Introduction</h2>
            <p className="font-body text-xl md:text-3xl lg:text-4xl text-brand-black leading-snug md:leading-tight">
              Five7 delivers high-quality men&apos;s fashion designed for international markets. We partner with retailers and distributors across Dubai and GCC regions.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY PARTNER WITH US */}
      <section className="bg-brand-light py-24 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.4em] text-brand-red uppercase">
                Partnership
              </span>
              <h2 className="mt-4 font-heading text-4xl font-bold text-brand-black md:text-5xl lg:text-6xl">
                Why partner <br /> with us?
              </h2>
              <p className="mt-8 text-brand-gray text-lg max-w-md">
                We provide a comprehensive ecosystem for our international partners, ensuring mutual growth and brand excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {exportPoints.map((point) => (
                <div key={point.title} className="group border-l-2 border-gray-200 pl-8 hover:border-brand-red transition-colors duration-300">
                  <h3 className="font-heading text-xl font-bold text-brand-black group-hover:text-brand-red transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-brand-gray text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRANDS FOR EXPORT */}
      <section className="py-24 md:py-40 bg-brand-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-20 text-center">
            <span className="text-xs font-bold tracking-[0.4em] text-brand-red uppercase">
              Portfolio
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold text-brand-black md:text-5xl">
              Brands for Export
            </h2>
            <div className="mx-auto mt-6 h-px w-20 bg-brand-red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {brands.map((brand) => (
              <div key={brand.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-light">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="mt-8">
                  <h3 className="font-heading text-2xl font-bold text-brand-black">
                    {brand.name}
                  </h3>
                  <p className="mt-3 text-brand-gray text-sm leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="bg-brand-black py-24 md:py-40 text-white overflow-hidden relative">
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 -skew-x-12 translate-x-1/2" />
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-bold md:text-6xl lg:text-7xl">
            Become a <br className="md:hidden" />
            <span className="italic font-normal">Retail Partner</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70 md:text-xl font-body">
            Join our growing network of international distributors and retailers. Let’s bring premium fashion to the world together.
          </p>
          <div className="mt-12">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 bg-brand-red px-12 py-5 text-sm font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-brand-red-dark hover:scale-105"
            >
              Contact Us
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
