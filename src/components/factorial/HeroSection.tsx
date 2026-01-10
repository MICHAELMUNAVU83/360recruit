import { Mail } from 'lucide-react'; // Optional: npm install lucide-react

export default function HeroSection() {
  return (
    <article className="relative w-full min-h-screen flex items-center justify-center bg-[#fff5f6] overflow-hidden">
      {/* Background Gradient Blurs to mimic the screenshot's soft light rays */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100/50 to-white" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-200/40 blur-[120px] rounded-full" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-200/40 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
          The business software to <br className="hidden md:block" /> manage your whole team
        </h1>

        {/* Subheading */}
        <h3 className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
          Time, talent, finance, and payroll processes unified and automated.
          AI handles the paperwork, you handle the people.
        </h3>

        {/* Input Group */}
        <div className="w-full max-w-md">
          <div className="flex items-center bg-white rounded-full p-1.5 shadow-xl shadow-rose-200/40 border border-white">
            <div className="flex items-center pl-4 flex-grow">
              <Mail className="w-5 h-5 text-slate-400 mr-2" />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder-slate-400 text-sm md:text-base outline-none"
              />
            </div>
            <button className="bg-[#ff3b5c] hover:bg-[#e63552] text-white font-semibold py-3 px-6 md:px-8 rounded-full transition-all text-sm md:text-base whitespace-nowrap">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}