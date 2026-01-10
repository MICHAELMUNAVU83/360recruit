import Enhancement from "../../components/bree/Enhancement";
import HeroSection from "../../components/bree/HeroSection";
import Interviews from "../../components/bree/Interviews";
import Overview from "../../components/bree/Overview";
import WhyChoose from "../../components/bree/Whychoose";
import Navbar from "../../components/common/NavbarBree";

export default function BreeAIPage() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Enhancement />
      <Overview />
      <Interviews />
      <WhyChoose />
    </div>
  );
}
