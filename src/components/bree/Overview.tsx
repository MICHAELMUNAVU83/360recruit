import { Zap, Palette, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Context-Aware Generation",
    icon: <Zap className="w-5 h-5 fill-current" />,
  },
  {
    title: "Matches Your Tone and Style",
    icon: <Palette className="w-5 h-5 fill-current" />,
  },
  {
    title: "Saves Hours of Writing",
    icon: <Clock className="w-5 h-5 fill-current" />,
  },
];

export default function Overview() {
  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-[#F9F9FF] min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-5 py-1.5 rounded-xl text-sm font-semibold shadow-md">
            <span>✍️</span>
            <span>Instant Writing</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Generate Compelling Cover <br />
            Letters <span className="text-[#8B5CF6]">Instantly</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Say goodbye to writer's block. Our AI analyzes the job role and your
            CV to write persuasive, professional cover letters that capture the
            attention of hiring managers.
          </p>

          <div className="w-full space-y-4 pt-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 bg-white p-5 rounded-full border border-purple-50 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-gradient-to-t from-purple-700 to-pink-500 text-white p-2.5 rounded-full group-hover:rotate-12 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-lg font-bold text-slate-800">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-[#8B5CF6]/10 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative bg-white p-2 rounded-3xl shadow-[0_0_40px_rgba(139,92,246,0.2)] border border-purple-100">
            <img
              src="/bree/capture-3.png"
              alt="Cover Letter Dashboard"
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
