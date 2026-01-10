import { CheckCircleIcon } from "lucide-react";
import { AboutData } from "../../data/data";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const colorPalettes = [
    {
      bg: "bg-amber-100",
      text: "text-amber-600",
    },
    {
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
  ];

  return (
    <article className="w-full">
      <div className="container mx-auto flex flex-col items-center justify-evenly min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-center text-[24px] md:text-[32px] lg:text-[42px] font-black">
            {AboutData.Service.title}
          </h1>
          <h3 className="text-center text-[20px] md:text-[22px] lg:text-[26px] font-black">
            {AboutData.Service.content}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-content-center py-8 gap-8">
          {AboutData.Service.cards.map((card, index) => {
            const activeColor = colorPalettes[index % colorPalettes.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="w-full bg-gray-100 p-4 rounded-xl flex flex-col items-start justify-center"
              >
                <span
                  className={`${activeColor.bg} rounded-full p-4 md:p-8 mb-4`}
                >
                  <div className={activeColor.text}>
                    <card.logo />
                  </div>
                </span>

                <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold">
                  {card.title}
                </h4>
                <p className="text-[16px] md:text-[19px] mt-2">{card.desc}</p>

                <ul className="flex flex-col gap-3 py-4 mt-2">
                  {card.items.map((inf, g) => (
                    <li key={g} className="flex space-x-2 items-center">
                      <span className={activeColor.text}>
                        <CheckCircleIcon size={20} />
                      </span>
                      <p>{inf}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
