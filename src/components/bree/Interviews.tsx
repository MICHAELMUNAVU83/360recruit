import { Users, Mic, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const interviewFeatures = [
  {
    title: "Realistic Mock Interviews",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    title: "Voice & Text-Based Practice",
    icon: <Mic className="w-5 h-5 text-white" />,
  },
  {
    title: "Detailed Performance Reports",
    icon: <LineChart className="w-5 h-5 text-white" />,
  },
];

export default function Interviews() {
  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-white overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-10 bg-purple-400/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative bg-white p-2 rounded-[32px] shadow-[0_0_60px_rgba(168,85,247,0.2)] border border-purple-100">
            <img
              src="/bree/capture4.png"
              alt="Interview Coaching Dashboard"
              className="rounded-[24px] w-full h-auto"
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
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-5 py-1.5 rounded-xl text-sm font-semibold shadow-md">
            <span>🎯</span>
            <span>Master Interviews</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Ace Your Interview with{" "}
            <span className="text-[#8B5CF6]">AI Coaching</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Practice mock interviews using both voice and text. Our AI provides
            instant feedback on your answers, tone, and delivery. Receive a
            detailed performance report after each session to track your
            progress.
          </p>

          <div className="w-full space-y-4 pt-4">
            {interviewFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 bg-white p-5 rounded-full border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-gradient-to-t from-purple-700 to-pink-500 text-white p-2.5 rounded-full  shadow-lg ">
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
