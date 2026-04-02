"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const deliveryInfo = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Bakı daxili — Pulsuz",
    desc: "Bakı şəhəri daxilində çatdırılma tamamilə pulsuzdur.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Digər bölgələr",
    desc: "Həcmindən asılı olaraq ödənişli və ya ödənişsiz çatdırılır.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Maksimum 2 gün",
    desc: "Şəhər daxili sifariş qəbul olunduqdan sonra maksimum 2 gün ərzində çatdırılır.",
  },
];

export default function Delivery() {
  return (
    <section id="delivery" className="py-20 bg-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-honey/10 text-honey text-sm font-semibold rounded-full mb-4">
            Çatdırılma
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight">
            Sifariş və <span className="text-gradient">Çatdırılma</span>
          </h2>
          <p className="mt-4 text-lg text-dark/50 max-w-2xl mx-auto">
            Sifarişiniz qısa müddətdə qapınıza çatdırılır
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {deliveryInfo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-black/5 hover:border-honey/30 hover:shadow-lg hover:shadow-honey/5 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 mx-auto bg-honey/10 rounded-2xl flex items-center justify-center text-honey group-hover:bg-honey group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-dark/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden honey-glow border border-black/5"
        >
          <Map />
        </motion.div>
      </div>
    </section>
  );
}
