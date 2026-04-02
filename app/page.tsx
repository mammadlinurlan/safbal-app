import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import ProductGrid from "@/components/ProductGrid";
import Pricing from "@/components/Pricing";
import Stores from "@/components/Stores";
import Delivery from "@/components/Delivery";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageSlider />
      <ProductGrid />
      <Pricing />
      <Stores />
      <Delivery />
      <About />
      <Footer />
    </>
  );
}
