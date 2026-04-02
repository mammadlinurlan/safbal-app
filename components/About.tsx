"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "100% Təbii",
    desc: "Heç bir əlavə maddə, qatqı və ya süni şəkər yoxdur.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Yerli İstehsal",
    desc: "Masallı, Astara, Lerik, Yardımlı dağlarından toplanır.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "2002-dən Bəri",
    desc: "Marketlərdə markalanmış formada satış.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Ailə Ənənəsi",
    desc: "1972-ci ildən bəri nəsildən-nəslə ötürülən təcrübə.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FFFDF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-honey/10 text-honey text-sm font-semibold rounded-full mb-4">
              Haqqımızda
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight tracking-tight">
              Təbiətdən <span className="text-gradient">Süfrənizə</span>
            </h2>
            <p className="mt-6 text-base text-dark/60 leading-relaxed">
              Azərbaycanda arıçılıq qədim tarixə malikdir. Arı canlılar içərisində ən möcüzəli, sirri daha çox öyrənilməsi vacib olan nadir canlılardan biridir. Bizim ailədə ilk arıların saxlanılması ötən əsrin 55-56-cı illərinə təsadüf edir.
            </p>
            <p className="mt-4 text-base text-dark/60 leading-relaxed">
              Şəxsi təsərrüfatla ailəmizdə ali təhsil aldıqdan sonra kəndimizdə müəllim işləməyə başlayan Gəncəli müəllim beş arı ailəsi ilə 1972-ci ildə başlamışdır. Arı ailələrinin sayı artmaqla yanaşı arıçıların və bu sahədə işləyənlərin sayı artmışdır. Bununla bərabər Gəncəli müəllim öz qardaşlarını və oğlanlarını da bu işə cəlb edib.
            </p>
            <p className="mt-4 text-base text-dark/60 leading-relaxed">
              Şəxsi təsərrüfatımız inkişaf edərək böyük ailə təsərrüfatına çevrilmişdir. Yüksək keyfiyyətli bal və digər arı məhsullarını toplamaq üçün arı ailələrini təsərrüfatın yerləşdiyi Masallı rayonu ilə yanaşı, Astara, Lerik, Yardımlı kimi dağ və dağ ətəyi rayonlara aparırıq.
            </p>
            <p className="mt-4 text-base text-dark/60 leading-relaxed">
              İstehsal etdiyimiz arı məhsulları əvvəllər pərakəndə halda satılırdı. 2002-ci ildən etibarən məhsullarımız bütün normativ sənədləri aldıqdan sonra marketlərdə markalanmış formada satılmağa başlandı. Müştərilərimizin sayı artdığından onların tələbatını ödəmək üçün arı ailələrinin də sayını artırdıq.
            </p>
            <p className="mt-4 text-base text-dark/60 leading-relaxed">
              Saf Bal brendi olaraq məhsullarımızı müasir texnologiyalar vasitəsi ilə qablaşdırırıq. Həmişə çalışacağıq ki, müştərilərin saf arı məhsullarına olan tələbatını ödəyək.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl border border-black/5 hover:border-honey/30 hover:shadow-lg hover:shadow-honey/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-honey/10 rounded-xl flex items-center justify-center text-honey group-hover:bg-honey group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-dark">{f.title}</h3>
                <p className="mt-2 text-sm text-dark/50 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
