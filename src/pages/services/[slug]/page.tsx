import { useParams, Link, Navigate } from "react-router-dom";
import { ServiceDataPage } from "../../../data/data";
import Navbar from "../../../components/common/Navbar";

export default function ServiceDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  const service = ServiceDataPage.cards.find((card) => card.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <article className="w-full min-h-screen">
      <Navbar />
      <div
        className="w-full min-h-[50vh] bg-cover bg-center relative flex items-center justify-center mb-12 mb:mb-20"
        style={{ backgroundImage: `url(${service.img})` }}
      >
        <div className="inset absolute bg-black w-full min-h-[50vh] opacity-50"></div>

        <h1 className="relalative z-20 text-[24px] md:text-[32px] lg:text-[64px] text-center justify-center items-center text-white font-black">
          {service.details?.scopeTitle}
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12 font-sans text-slate-800">
        <div className="flex flex-col lg:flex-row gap-12">
          <main className="lg:w-2/3 order-2 lg:order-1">
            <div className="relative w-full h-[70vh] rounded-lg overflow-hidden mb-8">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-10">
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.details?.intro}
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-8 text-slate-900">
                {service.details?.scopeTitle}
              </h2>

              <div className="flex flex-col gap-8">
                {service.details?.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                        {index + 1}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <aside className="lg:w-1/3 order-1 lg:order-2 flex flex-col gap-8">
            <div className="bg-white">
              <h3 className="text-xl font-bold mb-4 px-2">Our Services</h3>
              <div className="flex flex-col shadow-sm border border-slate-100 rounded-md overflow-hidden">
                {ServiceDataPage.cards.map((item) => {
                  const isActive = item.slug === slug;
                  return (
                    <Link
                      key={item.id}
                      to={`/services/${item.slug}`}
                      className={`px-6 py-4 border-b border-slate-100 transition-colors duration-200 text-sm font-medium
                      ${
                        isActive
                          ? "bg-yellow-400 text-slate-900 border-l-4 border-l-slate-900"
                          : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }
                    `}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-lg text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-2">
                Ready To Build Your <br /> Dream Team?
              </h3>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
