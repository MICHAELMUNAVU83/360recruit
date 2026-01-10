import { motion } from "motion/react";
import { whySection } from "../../data/data";
import CircularText from "../circularText";

export default function ChooseUsSection() {
  return (
    <article className="w-full py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 md:space-y-8"
          >
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl sm:text-[24px] lg:text-[64px] font-bold text-gray-900">
                {whySection.heading}?
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-[16px] md;text-[18px] lg:text-[20px]">
                {whySection.content}
              </p>
            </div>

            <ul className="space-y-4 md:space-y-5">
              {whySection.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 mt-1" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-[16px] md:text-[18px]">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={whySection.button.href}
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-colors duration-300 text-sm md:text-base"
              >
                {whySection.button.label}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[400px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[300px] md:h-[450px] lg:w-[500px] lg:h-[350px] bg-yellow-400 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 md:top-12 right-4 md:right-12 w-12 h-12 md:w-20 md:h-20 bg-yellow-200 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 md:bottom-38 left-12 md:left-8 w-10 h-10 md:w-16 md:h-16 bg-yellow-600 rounded-full opacity-70"
            />

            <div className="relative z-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden">
              <img
                src="/products.png"
                alt="Why choose us"
                className="w-full h-full object-cover  z-40 absolute"
              />
            </div>

            {/* Circular Text: WORKSITE */}
            <div className="absolute top-4 md:top-8 left-2 md:left-4 z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <CircularText
                text="· WorksSee · i wo · works"
                onHover="speedUp"
                spinDuration={20}
                className="text-black uppercase text-xs md:text-sm"
              />
            </div>

            {/* Floating Badge: Global Insights */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              animate={{ y: [0, -8, 0] }}
              className="absolute top-12 md:top-16 -right-4 sm:right-0 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg z-20"
              style={{
                transition: "transform 3s ease-in-out infinite",
              }}
            >
              <span className="text-xs md:text-sm font-semibold text-gray-900 whitespace-nowrap">
                Global Insights
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              animate={{ y: [0, -8, 0] }}
              className="absolute  md:bottom-34 left-2  bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg z-20"
              style={{
                transition: "transform 3s ease-in-out infinite",
              }}
            >
              <span className="text-xs md:text-sm font-semibold text-gray-900 whitespace-nowrap">
                Tech Driven
              </span>
            </motion.div>
            <div className="relative bottom-24 lg:bottom-24 lg:top-24 sm:left-0 z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <CircularText
                text="Tech · Driven · Tech · Driven·"
                onHover="speedUp"
                spinDuration={20}
                className="uppercase text-xs md:text-sm"
              />
            </div>
            {/* Circular Text: Tech-Driven */}
          </motion.div>
        </div>
      </div>
    </article>
  );
}
