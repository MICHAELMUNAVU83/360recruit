
import { motion } from "motion/react";
import { heroData } from "../../data/data";

export default function HeroSection() {
  return (
    <article className="w-full relative overflow-hidden bg-gradient-to-br from-amber-50/60 via-orange-50/40 to-white">
      {/* Silk Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="silk-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q 25 25, 50 50 T 100 50"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <path
                d="M0 60 Q 25 35, 50 60 T 100 60"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#silk-pattern)" />
        </svg>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center min-h-screen gap-8 py-6 md:py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[95%] lg:max-w-[80%] mx-auto flex flex-col items-center justify-center text-center space-y-4 pt-16"
        >
          <div className="flex flex-col lg:max-w-[60%] mx-auto space-y-4">
            <h1 className="text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-tight text-gray-900">
              {heroData.heading}
            </h1>
            <h2 className="text-[14px] md:text-[18px] lg:text-[20px] text-balance text-gray-600 leading-relaxed">
              {heroData.content}
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 md:space-y-0 md:flex-row md:space-x-4 w-full pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-3 bg-amber-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full transition-colors duration-300 shadow-sm"
            >
              Get started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Our Services
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-2"
          >
            <p className="text-[13px] md:text-sm text-gray-500">
              {heroData.trustedText}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-[95%] lg:max-w-[80%] mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full ">
            <img
              src="/hero-bg.jpg"
              alt="Hero"
              className="object-cover w-full h-[50vh] md:h-[60vh] lg:h-[65vh]"
            />
          </div>
        </motion.div>
      </div>
    </article>
  );
}
