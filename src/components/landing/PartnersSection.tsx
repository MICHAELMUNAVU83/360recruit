
import { partnersData } from "../../data/data";

export default function PartnersSection() {
  return (
    <article className="w-full min-h-auto py-12 md:py-20">
      <div className="max-w-[80%] mx-auto text-center space-y-6">
        <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold text-gray-600">
          {partnersData.heading}
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5  place-items-start justify-evenly ">
          {partnersData.logos.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center justify-evenly"
            >
              <img src={data} alt="" className="w-auto h-20 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
