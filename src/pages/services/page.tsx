import Navbar from "../../components/common/Navbar";
import ServiceCard from "../../components/service/ServiceCard";
import { ServiceDataPage, servicesData } from "../../data/data";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const {  subHeading, highlightText, cards } = ServiceDataPage;

  const renderHighlightedSubheading = () => {
    if (!highlightText) return subHeading;

    const parts = subHeading.split(new RegExp(`(${highlightText})`, "gi"));

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightText.toLowerCase() ? (
            <span key={index} className="text-[#FFC107] font-bold">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <>
    <Navbar/>
      <div
        className="w-full min-h-[50vh] bg-cover bg-center relative flex items-center justify-center mb-12 mb:mb-20"
        style={{ backgroundImage: `url('/service/servicebg.jpg')` }}
      >
        <div className="inset absolute bg-black w-full min-h-[50vh] opacity-50"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relalative z-20 text-[24px] md:text-[32px] lg:text-[64px] text-center justify-center items-center text-white font-black"
        >
          {servicesData.heading}
        </motion.h1>
      </div>

      <article className="w-full min-h-screen py-16 px-4">
        <div className="w-full container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 space-y-4 md:max-w-[30%] mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {renderHighlightedSubheading()}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <ServiceCard card={card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </article>
    </>
  );
}
