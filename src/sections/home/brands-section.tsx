import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Five Seven",
    slug: "five-seven",
    image: "/images/brands/five7.jpg",
    description:
      "The flagship brand offering premium formal and semi-formal menswear. Tailored for the modern Indian gentleman with international design sensibilities.",
  },
  {
    name: "FS Club",
    slug: "fs-club",
    image: "/images/brands/fsclub.jpg",
    description:
      "Contemporary casual wear for the style-conscious man. A fusion of comfort and trendsetting designs for everyday elegance.",
  },
  {
    name: "FS Polo",
    slug: "fs-polo",
    image: "/images/brands/fspolo.jpg",
    description:
      "Sporty-casual essentials built around the iconic polo. Premium fabrics meet athletic-inspired designs for versatile everyday wear.",
  },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="bg-brand-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-brand-red uppercase">
            Our Portfolio
          </p>
          <h2 className="font-heading text-4xl font-bold text-brand-black md:text-5xl lg:text-6xl">
            The Brands
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-brand-red" />
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href="/brands"
              className="group relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={brand.image}
                  alt={`${brand.name} - Premium menswear brand by Five7`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Content on Image */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                    {brand.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/80 transition-all duration-500">
                    {brand.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-brand-red uppercase">
                    <span>Discover</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
