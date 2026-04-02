"use client";

import Image from "next/image";

const stores = [
  { name: "Araz", logo: "/stores/araz.png" },
  { name: "Bazar Store", logo: "/stores/bazarstore.png" },
  { name: "Bolmart", logo: "/stores/bolmart-logo.png" },
  { name: "Bravo", logo: "/stores/bravo-logo.png" },
  { name: "Grand Mart", logo: "/stores/grandmart.jpg" },
  { name: "Neptun", logo: "/stores/neptun.png" },
  { name: "Rahat", logo: "/stores/rahat.jpg" },
  { name: "Syrovarnya", logo: "/stores/syrovarnya_logo.png.webp" },
  { name: "Tam Store", logo: "/stores/tamstore.png" },
];

export default function Stores() {
  return (
    <section className="py-20 bg-[#FFFDF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-honey/10 text-honey text-sm font-semibold rounded-full mb-4">
            Satış Nöqtələri
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight">
            Harada <span className="text-gradient">Tapa Bilərsiniz</span>
          </h2>
          <p className="mt-4 text-lg text-dark/50 max-w-2xl mx-auto">
            Məhsullarımız bu mağazalarda sizə çatır
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #FFFDF7, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #FFFDF7, transparent)" }}
        />

        <div className="flex overflow-hidden">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex gap-6 shrink-0"
              style={{
                animation: "stores-marquee 22s linear infinite",
                willChange: "transform",
              }}
            >
              {stores.map((store) => (
                <div
                  key={store.name}
                  className="flex items-center justify-center bg-white rounded-2xl border border-black/5 group hover:border-honey/30 hover:shadow-md transition-all duration-300"
                  style={{ minWidth: "176px", width: "176px", height: "96px" }}
                >
                  <Image
                    src={store.logo}
                    alt={store.name}
                    width={140}
                    height={60}
                    className="object-contain max-w-full max-h-full  opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes stores-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% - 24px)); }
        }
      `}</style>
    </section>
  );
}
