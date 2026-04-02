import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safbal.az"),
  title: "Saf Bal — Təbii Azərbaycan Balı",
  description:
    "Azərbaycanın dağlarından süfrənizə ən təmiz, ən təbii bal məhsulları. Çiçək balı, dağ balı, may balı və daha çoxu.",
  keywords: [
    "saf bal", "təbii bal", "azərbaycan balı", "dağ balı",
    "çiçək balı", "may balı", "şan balı", "üzvi bal",
  ],
  openGraph: {
    type: "website",
    url: "https://safbal.az",
    siteName: "Saf Bal",
    title: "Saf Bal — Təbii Azərbaycan Balı",
    description:
      "Azərbaycanın dağlarından süfrənizə ən təmiz, ən təbii bal məhsulları. Çiçək balı, dağ balı, may balı.",
    images: [
      {
        url: "/slider-images/slide_6.jpg",
        width: 1200,
        height: 630,
        alt: "Saf Bal — Təbii Azərbaycan Balı",
      },
    ],
    locale: "az_AZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saf Bal — Təbii Azərbaycan Balı",
    description:
      "Azərbaycanın dağlarından süfrənizə ən təmiz, ən təbii bal məhsulları.",
    images: ["/slider-images/slide_6.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${nunito.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
