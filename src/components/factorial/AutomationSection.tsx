import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  {
    id: "hr",
    label: "HR & Payroll",
    title: "Put The Human Back In HR",
    description:
      "Take repetitive tasks off your team's plate with HR software that handles your core processes. That way, they can invest more time in your people.",
    image: "/factorial/hr&payroll.jpg",
    features: [
      {
        title: "Employee Portal",
        desc: "Download payroll, request vacations, see tasks. A single place where they can do it all.",
      },
      {
        title: "Documents And E-Signature",
        desc: "A go-to document storage for all company policies, e-signatures, and payslips.",
      },
      {
        title: "Reports & Analytics",
        desc: "Access insights in seconds, not hours. Factorial AI turns your questions into reports.",
      },
    ],
  },
  {
    id: "time",
    label: "Time & Planning",
    title: "Manage Your Team's Time Without Losing Yours",
    description:
      "Gain visibility over working hours and schedules so you can plan workloads with confidence and understand productivity levels.",
    image: "/factorial/time&planning.jpg",
    features: [
      {
        title: "Time Tracking",
        desc: "Monitor your team's working hours to measure productivity and stay compliant.",
      },
      {
        title: "Time Off",
        desc: "Coordinate team absences, approve them in a click, and get insights to avoid extra costs.",
      },
      {
        title: "Shifts Powered By AI",
        desc: "Plan and assign shifts with AI suggestions that optimise schedules and save time.",
      },
    ],
  },
  {
    id: "talent",
    label: "Talent Management",
    title: "Reach Out, Recruit, Retain, Repeat",
    description:
      "Find candidates with the skills to help your team hit objectives and support their development once they start so your company can grow.",
    image: "/factorial/talent-management.jpg",
    features: [
      {
        title: "Recruitment Powered By AI",
        desc: "Reach more candidates with AI-powered tools, from CV parsing to top-match scoring.",
      },
      {
        title: "Performance Powered By AI",
        desc: "Build a growth-driven culture with AI that summarizes reviews and tracks patterns.",
      },
      {
        title: "Trainings",
        desc: "Fill skill gaps with training sessions, analyze their success, and develop future leaders.",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance & IT",
    title: "Control Costs With Confidence, Without Chaos",
    description:
      "Tighten control of finances with business software management tools that leverage real-time data for reporting and forecasting.",
    image: "/factorial/widgets.jpg",
    features: [
      {
        title: "Expenses Powered By AI",
        desc: "Submit expenses faster with AI that extracts key data and gets smarter every time.",
      },
      {
        title: "Payroll",
        desc: "Keep expenses, overtime, and supplements in one place so payroll basically runs itself.",
      },
      {
        title: "Project Management",
        desc: "Plan and track projects and gain insights to improve resource allocation.",
      },
    ],
  },
];

export default function AutomationSection() {
  const [activeTab, setActiveTab] = useState(SECTIONS[0]);

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Automate The Work That Gets In The Way Of Work
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            PTO requests, expense approvals, payroll problems... Factorial is
            the business software management system that helps your team reach
            their full potential so your business can reach its own.
          </p>
        </motion.div>

        
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section)}
                className={`px-4 py-2 md:px-8 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  activeTab.id === section.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                {activeTab.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed">
                {activeTab.description}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-video shadow-2xl">
              <img
                src={activeTab.image}
                alt={activeTab.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {activeTab.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors"
                >
                <h4 className="font-bold text-slate-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
