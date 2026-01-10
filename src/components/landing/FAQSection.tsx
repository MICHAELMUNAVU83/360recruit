import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqSection } from "../../data/data";
import { ChevronRight } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <article className="min-h-screen w-full py-16 md:py-24 bg-gradient-to-b from-amber-100 to-white overflow-hidden flex flex-col items-center justify-center ">
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 md:mb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6"
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <span className="text-xs font-bold">?</span>
            </div>
            <span className="text-sm font-medium uppercase tracking-wide">
              {faqSection.tag}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            {faqSection.heading}
            <br />
            <span className="text-yellow-400">{faqSection.highlightText}</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqSection.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50/50 transition-colors duration-200"
                aria-expanded={openId === item.id}
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronRight className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}
