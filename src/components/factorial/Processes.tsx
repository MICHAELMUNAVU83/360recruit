import { motion } from "framer-motion";

const PROCESS_CARDS = [
  {
    title: "Manage Your Team's Hours Without Losing Yours",
    description:
      "Stay compliant, track each employee's work schedule, and oversee your team's time.",
    image: "/factorial/manage.png",
    bgColor: "from-orange-50/50",
  },
  {
    title: "Motivate And Empower Your Team",
    description:
      "Keep your team happy where they are and excited about where they can go.",
    image: "/factorial/motivate.png",
    bgColor: "from-pink-50/50",
  },
  {
    title: "Centralize Documents In One Place",
    description:
      "Bring your team and their documents together in Factorial, and use that data to make informed decisions.",
    image: "/factorial/centralize.png",
    bgColor: "from-blue-50/50",
  },
  {
    title: "Pay On Time, Without Errors, And Securely",
    description:
      "Organize, review, and automate the documents needed for payroll—no spreadsheets, no paperwork, no mistakes.",
    image: "/factorial/pay.png",
    bgColor: "from-cyan-50/50",
  },
  {
    title: "Control Your Expenses And Gain Data-Driven Insights",
    description:
      "Manage and track expenses in one place to optimize savings and investments.",
    image: "/factorial/pricing.png",
    bgColor: "from-emerald-50/50",
  },
  {
    title: "Analyze, Filter, And Classify Talent With Our ATS Software",
    description:
      "Deliver an outstanding recruitment process with intuitive tools that help hiring managers attract new talent.",
    image: "/factorial/analyze.png",
    bgColor: "from-rose-50/50",
  },
];

export default function Processes() {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            All Your Processes In One Business{" "}
            <br className="hidden md:block" /> Management Software
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            We adapt to your business, your needs, and help your talent grow.
            Save time and money with Factorial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative flex flex-col bg-white rounded-t-[2.5rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`aspect-[4/3] w-full bg-gradient-to-b ${card.bgColor} to-transparent p-6 pb-0 flex items-end justify-center overflow-hidden`}
              >
                <div className="w-full h-full bg-white rounded-t-xl shadow-lg border-x border-t border-slate-100 translate-y-2 transition-transform group-hover:translate-y-0 duration-300 overflow-hidden">
                  
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                  />
                </div>
              </div>

              <div className="p-8 pt-10 flex-grow">
                <h4 className="text-lg font-bold text-slate-900 leading-snug mb-3">
                  {card.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all"
          >
            Get started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
