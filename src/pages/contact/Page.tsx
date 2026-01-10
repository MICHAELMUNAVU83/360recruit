import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm as useFormspree } from "@formspree/react";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../../components/common/Navbar";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number is too short" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  companyName: z.string().optional(),
  employees: z.string().optional(),
  industry: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [state, handleSubmitFormspree] = useFormspree("ID");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    handleSubmitFormspree(data);
    if (state.succeeded) {
      reset();
    }
  };

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-screen bg-gray-50"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Message Sent!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 mb-8"
        >
          Thanks for reaching out. We will get back to you shortly.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-[#FDC138] text-black font-semibold rounded-full hover:bg-yellow-500 transition"
        >
          Back to Form
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-16 pb-12 text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
          Let's connect and discover how smarter HR and recruitment can drive
          your business forward.
        </p>
      </motion.div>

      <div
        className="w-full h-[50vh] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/contact-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/30"></div>{" "}
      </div>

      <div className="container mx-auto px-4 relative -mt-64 pb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-lg shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600 mb-2">
                  Name{" "}
                  <span className="text-xs font-normal text-gray-400">
                    (Full Name)
                  </span>
                </label>
                <input
                  {...register("fullName")}
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FDC138] focus:border-transparent transition"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600 mb-2">
                  Email{" "}
                  <span className="text-xs font-normal text-gray-400">
                    (Official Email)
                  </span>
                </label>
                <input
                  {...register("email")}
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FDC138] focus:border-transparent transition"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600 mb-2">
                  Phone{" "}
                  <span className="text-xs font-normal text-gray-400">
                    (include country code)
                  </span>
                </label>
                <input
                  {...register("phone")}
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FDC138] focus:border-transparent transition"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600 mb-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FDC138] focus:border-transparent transition"
                />
                {errors.subject && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.subject.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-2">
                Company Name
              </label>
              <input
                {...register("companyName")}
                className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FDC138] focus:border-transparent transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600 mb-2">
                  No of Employees
                </label>
                <input
                  {...register("employees")}
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FDC138] focus:border-transparent transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600 mb-2">
                  Industry
                </label>
                <input
                  {...register("industry")}
                  className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FDC138] focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-2">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FDC138] focus:border-transparent transition resize-none"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-[#FDC138] text-black font-bold py-3 px-12 rounded-full shadow-lg hover:bg-yellow-400 transform hover:-translate-y-0.5 transition duration-200"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="border border-[#FDC138] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="bg-black text-white p-3 rounded-full mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Office</h3>
            <p className="text-gray-500 text-sm">Nairobi, Kenya</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="border border-[#FDC138] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="bg-black text-white p-3 rounded-full mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-500 text-sm">recruit@360recruit.org</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="border border-[#FDC138] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="bg-black text-white p-3 rounded-full mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-500 text-sm">0793360360</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
