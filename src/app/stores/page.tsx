import Image from "next/image";
import Link from "next/link";
import StoreCard from "@/components/store-card";

const stores = [
  {
    city: "Kochi",
    image: "/images/stores/kochi.jpg",
    address: "MG Road, Kochi, Kerala",
    phone: "+91 98765 43210",
    mapLink: "https://maps.google.com/?q=MG+Road,+Kochi,+Kerala",
  },
  {
    city: "Calicut",
    image: "/images/stores/calicut.jpg",
    address: "SM Street, Calicut, Kerala",
    phone: "+91 98765 43210",
    mapLink: "https://maps.google.com/?q=SM+Street,+Calicut,+Kerala",
  },
  {
    city: "Malappuram",
    image: "/images/stores/malappuram.jpg",
    address: "Down Hill, Malappuram, Kerala",
    phone: "+91 98765 43210",
    mapLink: "https://maps.google.com/?q=Down+Hill,+Malappuram,+Kerala",
  },
  {
    city: "Kannur",
    image: "/images/stores/kannur.jpg",
    address: "Talap, Kannur, Kerala",
    phone: "+91 98765 43210",
    mapLink: "https://maps.google.com/?q=Talap,+Kannur,+Kerala",
  },
  {
    city: "Trivandrum",
    image: "/images/stores/trivandrum.jpg",
    address: "MG Road, Trivandrum, Kerala",
    phone: "+91 98765 43210",
    mapLink: "https://maps.google.com/?q=MG+Road,+Trivandrum,+Kerala",
  },
];

export default function StoresPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/hero/hero1.jpg"
          alt="Our Stores - Five7 Retail Kerala"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-6">
            <h1 className="font-heading text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              Our Stores
            </h1>
            <div className="mx-auto mt-8 h-1 w-24 bg-brand-red" />
            <p className="mx-auto mt-10 max-w-2xl text-lg text-white/90 md:text-2xl font-light">
              Visit our retail stores across Kerala and explore our latest men's fashion collections.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STORES GRID */}
      <section className="py-24 md:py-32 lg:py-40 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Retail Locations
            </h2>
            <p className="mt-4 text-brand-gray max-w-xl">
              Experience the touch and feel of premium fashion at our modern retail outlets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {stores.map((store) => (
              <StoreCard
                key={store.city}
                city={store.city}
                image={store.image}
                address={store.address}
                phone={store.phone}
                mapLink={store.mapLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CALL TO ACTION */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-heading text-4xl font-bold text-brand-black md:text-5xl lg:text-6xl">
              Discover Our Collections
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-brand-gray md:text-xl">
              Visit any of our stores to explore the latest collections from Five Seven, FS Club, and FS Polo.
            </p>
            <Link
              href="/collections"
              className="mt-12 inline-block bg-brand-red px-12 py-5 text-sm font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-brand-red-dark hover:scale-105 active:scale-95"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
