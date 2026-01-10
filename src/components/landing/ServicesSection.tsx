import { servicesData } from "../../data/data";

export default function ServicesSection() {
  return (
    <article className="w-full min-h-screen py-6 md:py-12 lg:py-20">
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto flex flex-col">
        <div className="flex flex-col text-center lg:max-w-[50%] mx-auto">
          <h1 className="text-[24px] md:text-[32px] lg:text-[64px] font-black">
            {servicesData.heading}
          </h1>
          <h2 className="text-[20px] md:text-[26px] text-gray-700">
            {servicesData.description}
          </h2>
        </div>
        <div className="py-6 md:py-12 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto">
          {servicesData.cards.map((data, idx) => (
            <div
              className="w-full border-2 border-amber-500 p-4 md:p-8 rounded-3xl flex flex-col items-center h-full text-center gap-4"
              key={idx}
            >
              <div className="w-full flex items-center justify-center">
                <span className="bg-gray-100 rounded-md p-4">
                  <data.icon />
                </span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 mx-auto max-w-[80%] flex-grow">
                <h2 className="text-[24px] md:text-[26px] lg:text-[28px] font-black">
                  {data.title}
                </h2>
                <h3 className="text-[18px] md:text-[22px] lg:text-[24px] text-gray-700">
                  {data.description}
                </h3>
              </div>
              <div className="w-full flex items-center justify-center mt-auto">
                <a href={data.button.href}>
                  <button className="px-4 py-2 md:px-6 md:py-3 bg-amber-500 hover:bg-amber-600 shadow-sm rounded-full transition-colors duration-300">
                    {data.button.label}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="px-4 py-2 md:px-6 md:py-3 bg-black text-white shadow-sm rounded-full font-black">
            View All
          </button>
        </div>
      </div>
    </article>
  );
}
