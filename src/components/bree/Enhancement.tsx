import { Users, Search, Infinity } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Suggestion",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Job-Specific Keyword Optimazation",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Unlimited Personalized Versions",
    icon: <Infinity className="w-5 h-5" />,
  },
];

export default function Enhancement() {
  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-4 bg-purple-400/20 blur-3xl rounded-[40px] pointer-events-none" />

          <div className="relative bg-white p-2 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] border border-purple-100">
            <img
              src="/bree/capture2.png"
              alt="CV Enhancement Dashboard"
              className="rounded-xl w-full h-auto border border-gray-100 shadow-inner"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6 order-1 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-1.5 rounded-xl text-sm font-semibold shadow-md"
          >
            Smart Enancement
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Enhance & Personalize Your CV <br />
            in <span className="text-[#8B5CF6]">Seconds</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Upload your existing CV and let our Ai identify key improvements.
            Create multiple, personalized versions tailored to specific job
            decsriptions, ensuring you always stand out.
          </p>

          <div className="w-full space-y-4 pt-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 bg-white p-5 rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-default group"
              >
                <div className="bg-gradient-to-t from-purple-700 to-pink-500 text-white p-2.5 rounded-full shadow-lg">
                  {feature.icon}
                </div>
                <span className="text-lg font-bold text-slate-800">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
