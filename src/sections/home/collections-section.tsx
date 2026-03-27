import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    name: "Shirts",
    image: "/images/collections/shirts.jpg",
    category: "Formal & Casual",
  },
  {
    name: "Polos",
    image: "/images/collections/polos.jpg",
    category: "Smart Casual",
  },
  {
    name: "T-Shirts",
    image: "/images/collections/tshirts.jpg",
    category: "Everyday Essentials",
  },
  {
    name: "Jeans",
    image: "/images/collections/jeans.jpg",
    category: "Denim Collection",
  },
  {
    name: "Casual Wear",
    image: "/images/collections/casual.jpg",
    category: "Weekend Ready",
  },
  {
    name: "Formal Wear",
    image: "/images/collections/formal.jpg",
    category: "Business & Events",
  },
];

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="bg-brand-light py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-brand-red uppercase">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl font-bold text-brand-black md:text-5xl lg:text-6xl">
            Collections
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-brand-red" />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <Link
              key={collection.name}
              href="/collections"
              className={`group relative overflow-hidden ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0
                    ? "aspect-[4/3] lg:aspect-auto lg:h-full"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={collection.image}
                  alt={`${collection.name} collection - ${collection.category} from Five7`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="mb-2 text-xs tracking-[0.2em] text-white/60 uppercase">
                    {collection.category}
                  </span>
                  <h3
                    className={`font-heading font-bold text-white ${
                      index === 0
                        ? "text-3xl md:text-4xl lg:text-5xl"
                        : "text-xl md:text-2xl"
                    }`}
                  >
                    {collection.name}
                  </h3>

                  {/* Hover line animation */}
                  <div className="mt-4 h-px w-0 bg-brand-red transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
