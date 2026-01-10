import { AboutData } from "../../data/data";
import { motion } from "framer-motion";

export default function WhoWeAreSection() {
  return (
    <article className="py-12 md:py-20 w-full flex items-center justify-center gap-8">
      <div className="container mx-auto flex flex-col">
        <div className="min-h-auto flex flex-col lg:flex-row  items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <img
              src="/about.png"
              alt=""
              className="w-full h-[80vh] object-cover rounded-3xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <h1 className="text-center my-6 md:my-12 text-[24px] md:text-[32px] lg:text-[42px] font-black">
              Who We Are
            </h1>
            <div className="space-y-4 text-[16px] md:text-[18px] lg:text-[24px]">
              {AboutData.whoWeAre.paragraphs.map((paragraph, pIdx) => (
                <motion.p
                  key={pIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pIdx * 0.1, duration: 0.5 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {paragraph.map((segment, sIdx) => (
                    <span
                      key={sIdx}
                      className={
                        segment.highlight ? "font-bold text-black" : ""
                      }
                    >
                      {segment.text}
                    </span>
                  ))}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
        <div></div>
      </div>
    </article>
  );
}
