import { productsData } from "../../data/data";
import { CircleCheck } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function ProductsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } satisfies Variants;

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } satisfies Variants;
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } satisfies Variants;

  return (
    <article className="w-full min-h-screen py-12 md:py-20 overflow-x-hidden">
      <div className="flex flex-col max-w-[95%] lg:max-w-[80%] mx-auto">
        <motion.div
          className="flex flex-col text-center max-w-[80%] lg:max-w-[60%] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <h1 className="text-[24px] md:text-[32px] lg:text-[64px] font-black">
            {productsData.heading}
          </h1>
          <h3 className="text-[20px] md:text-[26px] ">
            {productsData.description}
          </h3>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-12 px-4 md:px-auto py-12">
          <div className="flex flex-col lg:flex-row w-full items-center justify-start gap-6">
            <motion.div
              className="flex flex-col space-y-6 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <h1 className="text-[24px] md:text-[32px] lg:text-[64px] font-black uppercase">
                {productsData.items[0].name}
              </h1>
              <p className="text-[16px] md:text-[18px]">
                {productsData.items[0].description}
              </p>
              <ul className="flex flex-col space-y-3">
                {productsData.items[0].features.map((list, idx) => (
                  <li
                    key={idx}
                    className="flex space-x-3 items-center justify-start"
                  >
                    <span>
                      <CircleCheck className="w-4 h-4 text-red-700" />
                    </span>
                    <p className="text-[12px] md:text-[16px] lg:text-[18px]">
                      {list}
                    </p>
                  </li>
                ))}
              </ul>
              <div>
                <button className="px-4 py-2 md:px-6 md:py-3 bg-red-500 shadow-md text-white rounded-full">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Image - Slides in from RIGHT */}
            <motion.div
              className="w-full min-h-auto flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <img
                src={productsData.items[0].img}
                alt=""
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-12 px-4 md:px-auto ">
          <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-start gap-6">
            <motion.div
              className="flex flex-col space-y-6 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <h1 className="text-[24px] md:text-[32px] lg:text-[64px] font-black uppercase">
                {productsData.items[1].name}
              </h1>
              <p className="text-[16px] md:text-[18px]">
                {productsData.items[1].description}
              </p>
              <ul className="flex flex-col space-y-3">
                {productsData.items[1].features.map((list, idx) => (
                  <li
                    key={idx}
                    className="flex space-x-3 items-center justify-start"
                  >
                    <span>
                      <CircleCheck className="w-4 h-4 text-blue-700" />
                    </span>
                    <p className="text-[12px] md:text-[16px] lg:text-[18px]">
                      {list}
                    </p>
                  </li>
                ))}
              </ul>
              <div>
                <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 shadow-md text-white rounded-full">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              className="w-full min-h-auto flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <img
                src={productsData.items[1].img}
                alt=""
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
}
