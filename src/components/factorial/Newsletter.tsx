import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative w-full py-24 px-6 flex flex-col items-center justify-center bg-[#FFFBF2] overflow-hidden">
      <div className="absolute top-0 left-[-10%] w-[50%] h-full bg-yellow-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-yellow-100/40 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full text-center"
      >
        <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-4 leading-[1.2]">
          Revolutionize your team's experience and drive your{" "}
          <br className="hidden md:block" /> business forward
        </h2>

        <p className="text-[#6B7280] text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Request a free demo of Factorial to show you how to transform all your
          processes.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center w-full max-w-[650px] mx-auto bg-white rounded-full p-2 shadow-lg shadow-yellow-900/5 border border-white"
        >
          <div className="flex items-center flex-grow pl-6">
            <Mail className="w-5 h-5 text-gray-400 mr-3" strokeWidth={1.5} />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-gray-800 placeholder:text-gray-400 py-3 text-base"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF3E6C] hover:bg-[#E02D5A] text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 text-base whitespace-nowrap ml-2"
          >
            Get a Demo
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
