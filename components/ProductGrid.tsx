"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP = "994503686882";

const products = [
  {
    name: "Çiçək Balı",
    description: "Azərbaycan çəmənliklərinin ən yaxşı çiçəklərindən toplanmış təbii bal.",
    weight: "470 qr",
    price: "16.90",
    image: "/products-images/cicek bali 470.webp",
  },
  {
    name: "Çiçək Balı",
    description: "Böyük ailələr üçün ideal — 900 qramlıq bank.",
    weight: "900 qr",
    price: "28.50",
    image: "/products-images/cicek 900.webp",
  },
  {
    name: "Çiçək Balı",
    description: "Hədiyyəlik kiçik ölçü — şirin sürpriz.",
    weight: "300 qr",
    price: "11.50",
    image: "/products-images/cicek bali 300qr.webp",
  },
  {
    name: "Dağ Balı",
    description: "Yüksək dağlardan toplanan nadir dağ balı.",
    weight: "470 qr",
    price: "16.90",
    image: "/products-images/dag 470.webp",
  },
  {
    name: "Dağ Balı",
    description: "Dağ balının zəngin dadı — böyük ölçü.",
    weight: "900 qr",
    price: "28.50",
    image: "/products-images/dag bali 900qr.webp",
  },
  {
    name: "Dağ Balı",
    description: "Kompakt ölçüdə təbii dağ balı.",
    weight: "300 qr",
    price: "11.50",
    image: "/products-images/dag 300.webp",
  },
  {
    name: "Şan Balı",
    description: "Xüsusi aroması ilə seçilən nadir şan balı.",
    weight: "470 qr",
    price: "18.50",
    image: "/products-images/san bali 470qr.webp",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-honey/10 text-honey text-sm font-semibold rounded-full mb-4">
            Kataloq
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight">
            Məhsul <span className="text-gradient">Çeşidləri</span>
          </h2>
          <p className="mt-4 text-lg text-dark/50 max-w-2xl mx-auto">
            Hər zövqə uyğun, hər ölçüdə — təbii bal seçimləri
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, i) => (
            <motion.div
              key={`${product.name}-${product.weight}`}
              variants={cardVariants}
              className="flex flex-col  group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-honey/10 transition-all duration-500 border border-black/5"
            >
              <div className="relative aspect-square overflow-hidden bg-cream">
                <Image
                  src={product.image}
                  alt={`${product.name} ${product.weight}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-honey text-dark text-xs font-bold rounded-full">
                  {product.weight}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-dark group-hover:text-honey-dark transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-dark/50 leading-relaxed line-clamp-2 flex-1">
                  {product.description}
                </p>
                <div className="mt-2 mb-3 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-honey">{product.price}</span>
                  <span className="text-sm font-semibold text-honey">AZN</span>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Salam! " + product.name + " (" + product.weight + " - " + product.price + " AZN) məhsuluna sifariş vermək istəyirəm.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold rounded-xl transition-all duration-300 text-sm hover:opacity-90"
              
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.833L.055 23.27a.75.75 0 00.914.914l5.44-1.456A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.964-1.362l-.356-.212-3.688.988.993-3.63-.232-.373A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  WhatsApp ilə Sifariş Et
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
