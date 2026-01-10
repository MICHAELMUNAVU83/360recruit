import { Check } from "lucide-react";
import { AboutData } from "../../data/data";
import { motion } from "framer-motion";

export default function Why360Section() {
  const { why360 } = AboutData;

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              {why360.heading}
            </h2>

            <div className="space-y-8 mb-10">
              {why360.item.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className=" mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center text-white">
                      <Check size={14} strokeWidth={4} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.heading}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={why360.button.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FDC138] text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 shadow-md"
            >
              {why360.button.label}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={why360.img}
                alt="360 Staffing Team"
                className="w-full h-[400px] md:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-gray-100 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
