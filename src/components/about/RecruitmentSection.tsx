import { AboutData } from "../../data/data";
import { motion } from "framer-motion";

export default function RecruitmentSection() {
  const { recruit } = AboutData;

  return (
    <article className="py-16 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {recruit.title}
          </h2>
          <p className="text-gray-500 text-lg">{recruit.content}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-center">
          {recruit.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center group"
            >

              <div className="relative mb-6 w-16 h-16 flex items-center justify-center">
                
                <div className="absolute top-1 left-3 w-12 h-12 lg:-top-4 md:left-5 md:w-20 md:h-20 bg-purple-100 rounded-full z-0 group-hover:bg-[#FDC138]/30 transition-colors duration-300"></div>

                <span className="relative z-10 text-3xl font-bold text-[#0B132A]">
                  {item.number}
                </span>
              </div>

              
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[150px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}
