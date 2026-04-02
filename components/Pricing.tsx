"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Çiçək Balı", "Dağ Balı", "May Balı"] as const;
type Tab = typeof tabs[number];

const prices = [
  { weight: "140 qr", price: "5.40" },
  { weight: "300 qr", price: "11.50" },
  { weight: "470 qr", price: "16.90" },
  { weight: "730 qr", price: "24.90" },
  { weight: "900 qr", price: "28.50" },
];

const tabIcons: Record<Tab, string> = {
  "Çiçək Balı": "",
  "Dağ Balı":   "",
  "May Balı":   "",
};

const WHATSAPP = "994503686882";

export default function Pricing() {
  const [active, setActive] = useState<Tab>("Çiçək Balı");

  return (
    <section id="pricing" className="py-20 bg-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-honey/10 text-honey text-sm font-semibold rounded-full mb-4">
            Qiymət Cədvəli
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight">
            Sadə və <span className="text-gradient">Şəffaf</span> Qiymətlər
          </h2>
          <p className="mt-4 text-lg text-dark/50 max-w-xl mx-auto">
            Növü seçin, ölçüsünü tapın, birbaşa sifariş verin
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white border border-black/5 rounded-2xl p-1.5 gap-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active === tab
                    ? "text-dark"
                    : "text-dark/40 hover:text-dark/70"
                }`}
              >
                {active === tab && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "linear-gradient(135deg, #FF8C00, #FFB347)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {tabIcons[tab]} {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden"
          >
            {/* Table header */}
            <div className="grid grid-cols-3 px-6 py-4 bg-honey/5 border-b border-black/5">
              <span className="text-xs font-bold text-dark/40 uppercase tracking-widest">Çəki</span>
              <span className="text-xs font-bold text-dark/40 uppercase tracking-widest text-center">Qiymət</span>
              <span className="text-xs font-bold text-dark/40 uppercase tracking-widest text-right">Sifariş</span>
            </div>

            {prices.map((row, i) => (
              <div
                key={row.weight}
                className={`grid grid-cols-3 items-center px-6 py-5 transition-colors hover:bg-honey/5 ${
                  i !== prices.length - 1 ? "border-b border-black/5" : ""
                }`}
              >
                {/* Weight */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-honey/10 flex items-center justify-center text-honey text-xs font-bold shrink-0">
                    {row.weight.replace(" qr", "")}
                  </div>
                  <span className="text-sm font-semibold text-dark">{row.weight}</span>
                </div>

                {/* Price */}
                <div className="text-center">
                  <span className="text-xl font-extrabold text-honey">{row.price}</span>
                  <span className="text-sm font-semibold text-honey ml-1">AZN</span>
                </div>

                {/* Order button */}
                <div className="flex justify-end">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      "Salam! " + active + " (" + row.weight + " - " + row.price + " AZN) sifariş vermək istəyirəm."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-white bg-[#25D366] text-xs font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.833L.055 23.27a.75.75 0 00.914.914l5.44-1.456A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.964-1.362l-.356-.212-3.688.988.993-3.63-.232-.373A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                    Sifariş Et
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <p className="mt-6 text-center text-sm text-dark/40">
          Şan Balı üçün ayrıca qiymət tətbiq olunur — 470 qr · 18.50 AZN
        </p>

      </div>
    </section>
  );
}
