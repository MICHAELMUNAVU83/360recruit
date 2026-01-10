import Navbar from "../../components/common/NavbarFact";
import AutomationSection from "../../components/factorial/AutomationSection";
import Events from "../../components/factorial/Events";
import HeroSection from "../../components/factorial/HeroSection";
import Newsletter from "../../components/factorial/Newsletter";
import Processes from "../../components/factorial/Processes";

export default function FactorialPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AutomationSection />
      <Processes />
      <Events />
      <Newsletter />
    </div>
  );
}
