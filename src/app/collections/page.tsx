import Image from "next/image";
import Link from "next/link";
import CollectionCard from "@/components/collection-card";

const collections = [
  {
    name: "Shirts",
    image: "/images/collections/shirts.jpg",
    description: "Modern shirts crafted with high quality fabrics for everyday wear.",
    href: "/collections",
  },
  {
    name: "Polos",
    image: "/images/collections/polos.jpg",
    description: "Premium polo shirts designed for timeless style and comfort.",
    href: "/collections",
  },
  {
    name: "T-Shirts",
    image: "/images/collections/tshirts.jpg",
    description: "Comfortable and stylish t-shirts for casual and modern looks.",
    href: "/collections",
  },
  {
    name: "Jeans",
    image: "/images/collections/jeans.jpg",
    description: "Premium denim crafted for the perfect fit and lasting style.",
    href: "/collections",
  },
  {
    name: "Casual Wear",
    image: "/images/collections/casual.jpg",
    description: "Relaxed and stylish clothing for your everyday lifestyle.",
    href: "/collections",
  },
  {
    name: "Formal Wear",
    image: "/images/collections/formal.jpg",
    description: "Sophisticated formal attire for business and special occasions.",
    href: "/collections",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/hero/hero1.jpg"
          alt="Our Collections - Five7 Fashion"
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
            <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-white uppercase opacity-90">
              Discover Quality
            </p>
            <h1 className="font-heading text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Our Collections
            </h1>
            <div className="mx-auto mt-8 h-px w-24 bg-brand-red" />
            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Explore our men&apos;s fashion collections crafted for comfort, style, and everyday confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Collections Grid */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">
              Signature Categories
            </h2>
            <p className="mt-4 text-brand-gray">
              Each piece is designed with a focus on premium materials and modern silhouettes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.name}
                name={collection.name}
                image={collection.image}
                description={collection.description}
                href={collection.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center border-t border-gray-100 pt-24 text-center">
            <h2 className="font-heading text-4xl font-bold text-brand-black md:text-5xl">
              Visit Our Stores
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-gray">
              Our collections are available in our retail stores across Kerala. Experience the quality first-hand and find your perfect fit.
            </p>
            <Link
              href="/stores"
              className="mt-10 inline-block bg-brand-red px-10 py-4 text-sm font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-brand-red-dark"
            >
              Find Stores
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
