import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen
     flex items-center justify-center overflow-hidden bg-[#F5F0FF] py-20 px-6 lg:px-20">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-purple-300/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-purple-400/20 blur-[100px] rounded-full" />

      <div className="relative z-10 container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white px-4 py-1.5 rounded-full shadow-md">
            <span className="text-sm font-semibold">
              🚀 AI-powered Career success
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#111827] leading-[1.1]">
            Craft the Perfect <br /> Application. <br />
            <span className="text-[#8B5CF6]">Land the Interview</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
            Instantly enhance your CV, generate tailored cover letters, and
            master interviews with our
            <span className="text-[#8B5CF6] font-bold">
              {" "}
              AI-powered voice and text coaching.
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-purple-500/30 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative group"
        >
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white/50 bg-white">
            <img
              src="/bree/capture.png"
              alt="Dashboard Preview"
              className="w-full h-auto object-cover opacity-90"
            />

            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-100">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-gray-700">AI Active</span>
            </div>

            <div className="absolute bottom-10 right-10 bg-[#8B5CF6] text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-lg">
              95% Match Rate
            </div>
          </div>

          <div className="absolute -inset-4 bg-purple-500/10 blur-2xl -z-10 rounded-[40px]" />
        </motion.div>
      </div>
    </section>
  );
}
