"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen hero-gradient overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-honey/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-honey/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey/10 border border-honey/20 mb-8"
            >
              <span className="w-2 h-2 bg-honey rounded-full animate-pulse" />
              <span className="text-honey text-sm font-medium">100% Təbii Bal</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Təbiətin Ən{" "}
              <span className="text-gradient">Saf</span>
              <br />
              Dadını Kəşf Et
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Azərbaycanın dağlarından süfrənizə — ən təmiz, ən təbii bal məhsulları ilə tanış olun.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="group px-8 py-4 bg-honey text-dark font-bold rounded-full hover:bg-honey-light transition-all duration-300 hover:scale-105 shadow-xl shadow-honey/25 text-center"
              >
                Məhsulları Gör
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 text-center"
              >
                Haqqımızda
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              {[
                { value: "50+", label: "İl Təcrübə" },
                { value: "100+", label: "Satış Nöqtəsi" },
                { value: "100%", label: "Təbii" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-honey">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
        </div>
      </div>

    </section>
  );
}
