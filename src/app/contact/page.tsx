import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Five7 — Get in Touch",
  description:
    "Contact Five7 for retail inquiries, store visits, or export partnerships. We are a premium men's fashion brand based in Kerala, India.",
};

export default function ContactPage() {
  return (
    <main className="bg-brand-white">
      {/* SECTION 1 — HERO */}
      <section className="relative py-20 md:py-32 bg-brand-light overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="mb-6 h-px w-12 bg-brand-red mx-auto md:w-16" />
          <h1 className="font-heading text-4xl font-bold tracking-tight text-brand-black sm:text-5xl md:text-6xl lg:text-7xl">
            Contact <span className="italic uppercase">Us</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg font-light tracking-wide text-brand-gray md:text-xl leading-relaxed">
            Get in touch with us for retail inquiries, store visits, or export partnerships.
          </p>
        </div>
      </section>

      {/* SECTION 2 — CONTACT INFORMATION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Phone",
                value: "+91 90611 73751",
                link: "tel:+919061173751",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
              {
                label: "Email",
                value: "info@five7.ae",
                link: "mailto:info@five7.ae",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                label: "WhatsApp",
                value: "+91 90611 73751",
                link: "https://wa.me/919061173751",
                icon: (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.411-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                ),
              },
              {
                label: "Location",
                value: "Kerala, India",
                link: "#",
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center text-center p-8 bg-brand-light transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-white rounded-full text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-brand-red uppercase mb-2">
                  {item.label}
                </h3>
                <span className="text-lg font-medium text-brand-black">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CONTACT FORM */}
      <section className="py-24 bg-brand-light">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-white p-8 md:p-16 shadow-2xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold tracking-[0.3em] text-brand-red uppercase">Inquiry</span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-brand-black md:text-5xl">
                Send a Message
              </h2>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest text-brand-gray uppercase ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full border-b border-brand-gray-light bg-transparent py-4 focus:border-brand-red focus:outline-none transition-colors text-brand-black"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest text-brand-gray uppercase ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border-b border-brand-gray-light bg-transparent py-4 focus:border-brand-red focus:outline-none transition-colors text-brand-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold tracking-widest text-brand-gray uppercase ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full border-b border-brand-gray-light bg-transparent py-4 focus:border-brand-red focus:outline-none transition-colors text-brand-black"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest text-brand-gray uppercase ml-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border-b border-brand-gray-light bg-transparent py-4 focus:border-brand-red focus:outline-none transition-colors text-brand-black resize-none"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden bg-brand-red py-6 text-sm font-bold tracking-[0.3em] text-white uppercase transition-all duration-500 hover:tracking-[0.4em]"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 -translate-x-full bg-brand-black transition-transform duration-500 group-hover:translate-x-0" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CALL TO ACTION */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/hero/hero1.jpg"
          alt="Visit Our Stores"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Visit Our Stores
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80 font-light">
            Explore our collections directly at our retail stores across Kerala.
          </p>
          <div className="mt-12">
            <Link
              href="/stores"
              className="group relative inline-flex items-center gap-4 bg-white px-12 py-5 text-sm font-bold tracking-[0.2em] text-brand-black uppercase transition-all duration-300 hover:bg-brand-red hover:text-white"
            >
              <span className="relative z-10">Find Stores</span>
              <svg 
                className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
