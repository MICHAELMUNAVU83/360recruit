import HeroSection from "../../components/landing/HeroSection";
import ChooseUsSection from "../../components/landing/ChooseUsSection";
import Banner from "../../components/landing/Banner";
import PartnersSection from "../../components/landing/PartnersSection";
import ProductsSection from "../../components/landing/ProductsSection";
import ServicesSection from "../../components/landing/ServicesSection";
import Testimonials from "../../components/landing/Testimonials";
import FAQSection from "../../components/landing/FAQSection";
import Navbar from "../../components/common/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ProductsSection />
      <ServicesSection />
      <ChooseUsSection />
      <Testimonials />
      <Banner />
      <FAQSection />
    </>
  );
}
