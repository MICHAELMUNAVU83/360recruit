import Header from "../../components/about/Header";
import RecruitmentSection from "../../components/about/RecruitmentSection";
import ServicesSection from "../../components/about/ServicesSection";
import WhoWeAreSection from "../../components/about/WhoWeAreSection";
import Why360Section from "../../components/about/Why360Section";
import Navbar from "../../components/common/Navbar";

export default function AboutPage() {
  return (
    <article className="w-full">
      <Navbar/>
      <Header />
      <WhoWeAreSection />
      <ServicesSection />
      <RecruitmentSection />
      <Why360Section />
    </article>
  );
}
