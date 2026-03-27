import Image from "next/image";
import Link from "next/link";

interface StoreCardProps {
  name: string;
  location: string;
  address: string;
  phone: string;
  image: string;
  mapLink: string;
}

export default function StoreCard({
  name,
  location,
  address,
  phone,
  image,
  mapLink,
}: StoreCardProps) {
  return (
    <div className="group overflow-hidden bg-white transition-all duration-500 hover:shadow-2xl border border-brand-light">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} - ${location}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>
      
      <div className="p-10">
        <h3 className="font-heading text-2xl font-bold text-brand-black leading-tight">
          {name} – {location}
        </h3>
        
        <div className="mt-8 space-y-6">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-brand-gray-light uppercase">
              Location
            </p>
            <p className="mt-1 text-base text-brand-gray">
              {location}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-brand-gray-light uppercase">
              Address
            </p>
            <p className="mt-1 text-sm text-brand-gray leading-relaxed max-w-[280px]">
              {address}
            </p>
          </div>
          
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-brand-gray-light uppercase">
              Phone
            </p>
            <a 
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="mt-1 inline-block text-base text-brand-gray transition-colors duration-300 hover:text-brand-red"
            >
              {phone}
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-light">
          <Link
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-bold tracking-[0.25em] text-brand-red uppercase transition-all duration-300 hover:text-brand-red-dark group/link"
          >
            Get Directions
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-3 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
