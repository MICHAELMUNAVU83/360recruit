import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonialSection } from "../../data/data";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(
    testimonialSection.testimonials.length / testimonialsPerPage
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonialSection.testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <article className="w-full py-16 md:py-24 bg-gradient-to-b from-amber-50/30 to-white overflow-hidden">
      <div className="max-w-[95%] lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6"
          >
            <div className=" flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wide">
              <p>{testimonialSection.tag}</p>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            {testimonialSection.heading}
            <br />
            <span className="text-yellow-400">
              {testimonialSection.highlightText}
            </span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="relative min-h-[400px] md:min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {currentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>

                      {/* Star Rating */}
                      <div className="flex gap-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 fill-orange-400"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
