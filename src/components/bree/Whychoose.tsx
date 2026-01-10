import { Settings, Zap, MessageSquare, Brain } from 'lucide-react';
import { motion } from "framer-motion";

const features = [
  {
    title: "Total Personalization",
    description: "Move beyond generic applications",
    icon: <Settings className="w-8 h-8 text-white" />,
  },
  {
    title: "Unmatched Speed",
    description: "Generate a complete, high-quality application in minutes, not hours.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "Build Confidence",
    description: "Our AI coaching helps you eliminate interview anxiety and perform at your best.",
    icon: <MessageSquare className="w-8 h-8 text-white" />,
  },
  {
    title: "Cutting-Edge AI",
    description: "Leverage the most advanced AI models to get insights and guidance tailored to your goals.",
    icon: <Brain className="w-8 h-8 text-white" />,
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full py-24 px-6 bg-[#F9F9FF]">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-lg mb-6"
        >
          <span>✍️</span>
          <span>Why Choose Bree AI</span>
        </motion.div>


        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#8B5CF6] mb-4"
        >
          Your Success, Amplified
        </motion.h2>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-500 text-lg md:text-xl max-w-3xl leading-relaxed mb-20"
        >
          Bree AI gives you a data-driven advantage in your job search, helping you prepare, apply, and interview with confidence.
        </motion.p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center group"
            >
              
              
              <div className="w-20 h-20 flex items-center justify-center rounded-[24px] bg-gradient-to-br from-[#A855F7] to-[#6B21A8] shadow-[0_15px_30px_-5px_rgba(139,92,246,0.4)] mb-8 transform transition-transform group-hover:-translate-y-2 duration-300">
                {feature.icon}
              </div>

              
              <h3 className="text-xl font-bold text-slate-900 mb-3 px-4">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed px-2">
                {feature.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}