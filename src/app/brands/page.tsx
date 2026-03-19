import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands | Five7 — Premium Men&apos;s Fashion",
  description: "Discover the fashion brands developed by Five7. From premium casual wear (Five Seven) to youthful street style (FS Club) and timeless polo collections (FS Polo).",
};

const brands = [
  {
    name: "Five Seven",
    image: "/images/brands/five7.jpg",
    description:
      "Five Seven is our flagship brand focused on premium casual fashion for modern men. The collection combines high quality fabrics with contemporary design for everyday style and comfort.",
  },
  {
    name: "FS Club",
    image: "/images/brands/fsclub.jpg",
    description:
      "FS Club is designed for the younger generation who appreciate bold, modern street fashion. The brand delivers stylish pieces with comfort and individuality.",
  },
  {
    name: "FS Polo",
    image: "/images/brands/fspolo.jpg",
    description:
      "FS Polo represents timeless elegance with premium polo shirts and refined casual wear designed for effortless style.",
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero1.jpg"
            alt="Our Brands Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Our Brands
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed md:text-xl opacity-90">
            Discover the fashion brands developed by Five7. Each brand represents a unique style, combining quality fabrics, modern design, and timeless fashion.
          </p>
        </div>
      </section>

      {/* SECTION 2 — BRAND INTRODUCTION */}
      <section className="bg-brand-light py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="sr-only">Brand Introduction</h2>
          <p className="font-body text-xl leading-relaxed text-brand-black/80 md:text-3xl md:leading-snug">
            Five7 creates modern men&apos;s fashion brands designed for today&apos;s lifestyle. From premium casual wear to youthful street style and timeless polo collections, our brands deliver quality, comfort, and style.
          </p>
        </div>
      </section>

      {/* SECTION 3 — BRAND SHOWCASE */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 space-y-32">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`flex flex-col items-center gap-12 md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Brand Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden group md:w-1/2">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              {/* Brand Description */}
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-sm font-bold tracking-widest text-brand-red uppercase">
                  Brand Showcase
                </span>
                <h3 className="font-heading text-3xl font-bold md:text-5xl">
                  {brand.name}
                </h3>
                <p className="font-body text-lg leading-relaxed text-brand-gray md:text-xl">
                  {brand.description}
                </p>
                <div className="pt-4">
                  <Link
                    href="/collections"
                    className="inline-block border-b-2 border-brand-red pb-1 font-body font-bold tracking-wide text-brand-black transition-colors hover:text-brand-red"
                  >
                    DISCOVER MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — CALL TO ACTION */}
      <section className="bg-brand-black py-20 text-white md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-5xl">
            Explore Our Collections
          </h2>
          <p className="mx-auto mb-10 max-w-xl font-body text-lg text-white/70 md:text-xl">
            Browse the latest collections from our brands available in our retail stores across Kerala.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-brand-red px-10 py-4 font-body font-bold tracking-widest text-white uppercase transition-all hover:bg-brand-red-dark hover:scale-105"
          >
            View Collections
          </Link>
        </div>
      </section>
    </main>
  );
}
