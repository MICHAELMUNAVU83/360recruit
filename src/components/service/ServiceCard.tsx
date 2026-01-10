import React from "react";
import { Link } from "react-router-dom";
import type { ServiceCardItem } from "../../data/data";

interface ServiceCardProps {
  card: ServiceCardItem ;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  const { icon: Icon, title, desc, button, img } = card;

  return (
    <div className="group relative w-full max-w-[412px] h-[450px] rounded-3xl overflow-hidden shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />


      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 sm:p-8">
        <div className="mb-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg">
          <Icon className="w-8 h-8 text-[#FFC107]" strokeWidth={2} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8">
          {desc}
        </p>

        <Link
          to={button.href}
          className="inline-block bg-[#FFC107] hover:bg-[#ffcd38] text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1"
        >
          {button.label}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
