import Image from "next/image";
import Link from "next/link";

const stores = [
  {
    name: "Five Seven Gents Wear – Karinkallathani",
    address: "Karinkallathani, Kerala",
    phone: "+91 85906 55757",
    image: "/images/stores/karinkallathani.jpg",
  },
  {
    name: "Five Seven Gents Wear – Mannarkkad",
    address: "Mannarkkad, Kerala",
    phone: "+91 90617 85757",
    image: "/images/stores/mannarkkad.jpg",
  },
];

export default function StoresSection() {
  return (
    <section id="stores" className="bg-brand-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 lg:flex lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.3em] text-brand-red uppercase">
              Visit Us
            </p>
            <h2 className="font-heading text-4xl font-bold text-brand-black md:text-5xl lg:text-6xl">
              Our Stores
            </h2>
            <p className="mt-4 max-w-lg text-brand-gray">
              Experience premium menswear at our flagship retail stores across
              Kerala.
            </p>
          </div>
          <Link
            href="/stores"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-[0.15em] text-brand-red uppercase transition-colors hover:text-brand-red-dark lg:mt-0"
          >
            All Locations
            <svg
              className="h-4 w-4"
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

        {/* Stores Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {stores.map((store) => (
            <div key={store.name} className="group">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Store Info */}
              <div className="mt-6 border-l-2 border-brand-red pl-6">
                <h3 className="font-heading text-2xl font-bold text-brand-black">
                  {store.name}
                </h3>
                <p className="mt-2 text-sm text-brand-gray">{store.address}</p>
                <a
                  href={`tel:${store.phone.replace(/\s/g, "")}`}
                  className="mt-1 inline-block text-sm font-medium text-brand-black transition-colors hover:text-brand-red"
                >
                  {store.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
