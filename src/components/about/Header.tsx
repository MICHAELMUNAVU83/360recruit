import { AboutData } from "../../data/data";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div
      className="relative  min-h-[60vh] flex flex-col bg-cover bg-center items-center justify-center space-y-4 text-white text-center"
      style={{ backgroundImage: "url('/about.png')" }}
    >
      <div className="absolute inset-0 bg-black/70  w-full h-[60vh]"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4 relative flex flex-col items-center justify-center max-w-[60%]"
      >
        <h1 className="text-[24px] md:text-[32px] lg:text-[42px] font-black">
          {AboutData.title}
        </h1>
        <h3 className="text-[16px] md:text-[24px]">{AboutData.desc}</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row relative items-center justify-center gap-4"
      >
        <a href={AboutData.buttons[0].href}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-amber-500"
          >
            {AboutData.buttons[0].label}
          </motion.button>
        </a>
        <a href={AboutData.buttons[1].href}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-amber-500"
          >
            {AboutData.buttons[1].label}
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
}
