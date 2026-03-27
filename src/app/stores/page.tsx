import Image from "next/image";
import Link from "next/link";
import StoreCard from "@/components/store-card";

const stores = [
  {
    name: "Five Seven Gents Wear",
    location: "Karinkallathani",
    image: "/images/stores/karinkallathani.jpg",
    address: "Karinkallathani, Kerala",
    phone: "+91 85906 55757",
    mapLink: "https://share.google/YSTR4nvrYCId1aNSg",
  },
  {
    name: "Five Seven Gents Wear",
    location: "Mannarkkad",
    image: "/images/stores/mannarkkad.jpg",
    address: "Mannarkkad, Kerala",
    phone: "+91 90617 85757",
    mapLink: "https://share.google/Mt5rij8bw8obdkTIo",
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
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-6">
            <h1 className="font-heading text-6xl font-bold text-white md:text-8xl lg:text-9xl tracking-tight">
              Our Stores
            </h1>
            <div className="mx-auto mt-8 h-[2px] w-24 bg-brand-red" />
            <p className="mx-auto mt-10 max-w-2xl text-xl text-white/90 md:text-2xl font-light tracking-wide uppercase">
              Retail Presence in Kerala
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STORES GRID */}
      <section className="py-24 md:py-32 lg:py-40 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="font-heading text-4xl font-bold text-brand-black md:text-5xl">
              Retail Locations
            </h2>
            <div className="mx-auto mt-6 h-1 w-12 bg-brand-red" />
            <p className="mt-8 text-brand-gray max-w-xl mx-auto text-lg">
              Experience the touch and feel of premium fashion at our modern retail outlets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {stores.map((store) => (
              <StoreCard
                key={store.location}
                name={store.name}
                location={store.location}
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
