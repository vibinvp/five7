import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Five7 — Our Story & Vision",
  description:
    "Learn about Five7, a premium men&apos;s fashion brand from Kerala, India, expanding into global markets with high-quality, stylish menswear.",
};

export default function AboutPage() {
  return (
    <main className="bg-brand-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] w-full min-h-[400px] overflow-hidden">
        <Image
          src="/images/hero/hero1.jpg"
          alt="About Five7 - Premium Men&apos;s Fashion"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 h-px w-12 bg-brand-red md:w-16" />
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            About <span className="italic">Five7</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light tracking-wide text-white/90 md:text-xl">
            A growing men&apos;s fashion brand from Kerala, expanding into global markets.
          </p>
        </div>
      </section>

      {/* 2. Company Story Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/brands/five7.jpg"
                alt="Five7 Brand Story"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-[0.3em] text-brand-red uppercase">
                  Our Origins
                </span>
                <h2 className="font-heading text-3xl font-bold text-brand-black md:text-4xl lg:text-5xl">
                  The Journey of a Thousand Stitches
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-brand-gray">
                <p>
                  Five7 started as a multi-brand retail store in Kerala, offering a wide range of men&apos;s clothing. Driven by a passion for quality and style, we saw an opportunity to bring our unique vision to life.
                </p>
                <p>
                  Over time, the brand expanded into creating its own labels including <span className="text-brand-black font-semibold">Five Seven</span>, <span className="text-brand-black font-semibold">FS Club</span>, and <span className="text-brand-black font-semibold">FS Polo</span>. Each brand carries our commitment to excellence and contemporary fashion.
                </p>
                <p>
                  Today, Five7 is growing into international markets, exporting to Dubai and GCC regions, bringing Kerala&apos;s finest menswear to the global stage.
                </p>
              </div>

              {/* Stats/Highlight */}
              <div className="grid grid-cols-2 gap-8 border-t border-brand-light pt-8 md:grid-cols-3">
                <div className="space-y-1">
                  <span className="text-2xl font-bold text-brand-red">Kerala</span>
                  <p className="text-xs tracking-widest text-brand-gray uppercase">Native roots</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-bold text-brand-red">Dubai</span>
                  <p className="text-xs tracking-widest text-brand-gray uppercase">Global Hub</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-bold text-brand-red">3+</span>
                  <p className="text-xs tracking-widest text-brand-gray uppercase">Internal Brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="bg-brand-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative p-10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl group">
              <div className="absolute top-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-brand-red/10 text-brand-red">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-black mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-brand-gray">
                To become a leading men&apos;s fashion brand across India and international markets, recognized for our distinct style and unwavering quality.
              </p>
            </div>

            <div className="relative p-10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl group">
              <div className="absolute top-0 left-0 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-brand-red/10 text-brand-red">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-black mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-brand-gray">
                To deliver high-quality, stylish, and affordable men&apos;s fashion that empowers our customers to express their unique personality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Strength Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <span className="text-sm font-bold tracking-[0.3em] text-brand-red uppercase">
              Our Edge
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-brand-black md:text-5xl">
              Why Choose Five7
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Retail Presence",
                desc: "Strong retail presence in Kerala with multiple stores.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              },
              {
                title: "In-house Brands",
                desc: "Multiple successful in-house fashion brands for diverse tastes.",
                icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              },
              {
                title: "Quality & Design",
                desc: "Uncompromising focus on premium quality and modern design.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Global Network",
                desc: "Growing export network spanning Dubai and GCC regions.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 012.5 2.5v.11a2 2 0 01-2 2h-2.12a2 2 0 00-1.414.586l-.28.28A2 2 0 0112 18.277V21M3.055 11h2a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            ].map((strength, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-brand-light rounded-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-6 flex h-16 w-16 items-center justify-center bg-white rounded-full text-brand-red shadow-sm">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={strength.icon} />
                  </svg>
                </div>
                <h4 className="mb-3 font-heading text-xl font-bold text-brand-black">{strength.title}</h4>
                <p className="text-sm leading-relaxed text-brand-gray">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/hero/hero1.jpg"
          alt="Explore Five7 Brands"
          fill
          className="object-cover transition duration-1000 group-hover:scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/80" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            Explore Our Brands
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Discover the unique styles of Five Seven, FS Club, and FS Polo.
          </p>
          <div className="mt-12">
            <Link
              href="/brands"
              className="group relative inline-flex items-center gap-2 bg-brand-red px-12 py-5 text-sm font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-brand-red-dark"
            >
              <span className="relative z-10 text-lg">View Brands</span>
              <svg 
                className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
