import { motion } from "framer-motion";

const EVENT_IMAGES = [
  {
    src: "/factorial/event1.jpg",
    alt: "Conference room setting",
    isSide: true,
  },
  {
    src: "/factorial/event2.jpg",
    alt: "Two people talking at an event",
    isSide: false,
  },
  {
    src: "/factorial/event3.jpg",
    alt: "Speaker at a seminar",
    isSide: true,
  },
];

export default function Events() {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-start justify-between gap-8 mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight shrink-0">
            EVENTS GALLERY
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
            We regularly host events and sessions showcasing how Factorial
            transforms HR management for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          {EVENT_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, opacity: 1, transition: { duration: 0.3 } }}
              className={`relative overflow-hidden transition-all duration-700 ease-in-out
                ${
                  image.isSide
                    ? "opacity-30 scale-95"
                    : "opacity-100 scale-100 shadow-2xl z-10"
                }
                rounded-md aspect-[4/5] md:aspect-[3/4]
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              {image.isSide && (
                <div className="absolute inset-0 bg-white/20 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
