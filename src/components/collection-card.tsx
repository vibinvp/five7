import Image from "next/image";
import Link from "next/link";

interface CollectionCardProps {
  name: string;
  image: string;
  description: string;
  href: string;
  index: number;
}

export default function CollectionCard({
  name,
  image,
  description,
  href,
  index,
}: CollectionCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden bg-brand-black"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} collection - Five7`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
              {name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-white/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {description}
            </p>
            <div className="mt-4 h-px w-0 bg-brand-red transition-all duration-500 group-hover:w-16" />
          </div>
        </div>
      </div>
    </Link>
  );
}
