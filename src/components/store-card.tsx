import Image from "next/image";
import Link from "next/link";

interface StoreCardProps {
  city: string;
  address: string;
  phone: string;
  image: string;
  mapLink?: string;
}

export default function StoreCard({
  city,
  address,
  phone,
  image,
  mapLink = "#",
}: StoreCardProps) {
  return (
    <div className="group overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${city} Store - Five7`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/0" />
      </div>
      
      <div className="p-8">
        <h3 className="font-heading text-2xl font-bold text-brand-black">
          {city}
        </h3>
        
        <div className="mt-6 space-y-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-brand-gray-light uppercase">
              Address
            </p>
            <p className="mt-1 text-sm text-brand-gray leading-relaxed">
              {address}
            </p>
          </div>
          
          <div>
            <p className="text-xs font-semibold tracking-wider text-brand-gray-light uppercase">
              Phone
            </p>
            <p className="mt-1 text-sm text-brand-gray">
              {phone}
            </p>
          </div>
        </div>
        
        <Link
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center text-sm font-bold tracking-widest text-brand-red uppercase transition-all duration-300 hover:text-brand-red-dark group/link"
        >
          Get Directions
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
