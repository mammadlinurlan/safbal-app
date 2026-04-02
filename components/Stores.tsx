"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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

// 4x duplicate to always have enough slides for seamless loop
const slides = [...stores, ...stores, ...stores, ...stores];

const SPEED_PER_SLIDE = 2200; // ms per slide

export default function Stores() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: "auto",
      spacing: 24,
    },
    
    created(s) {
      s.moveToIdx(stores.length, true, {
        duration: stores.length * SPEED_PER_SLIDE,
        easing: (t) => t,
      });
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + stores.length, true, {
        duration: stores.length * SPEED_PER_SLIDE,
        easing: (t) => t,
      });
    },
  });

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

        <div ref={sliderRef} className="keen-slider">
          {slides.map((store, i) => (
            <div
              key={`${store.name}-${i}`}
              className="keen-slider__slide flex items-center justify-center bg-white rounded-2xl border border-black/5 group"
              style={{ minWidth: "176px", maxWidth: "176px", height: "96px" }}
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
      </div>
    </section>
  );
}
