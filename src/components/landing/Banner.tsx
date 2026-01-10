
export default function Banner() {
  return (
    <article className="w-full min-h-[50vh] bg-black flex items-center justify-center ">
      <div className="w-full max-w-[90%] mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <h3 className="text-[24px] md:text-[32px] lg:text-[42px] text-white text-center ">
            Whether you're scaling fast or looking to streamline, we’ve got the
            tools and expertise to help.
          </h3>
          <a href="/">
            <button className="bg-white rounded-full px-4 py-2 md:px-6 md:py-3 text-black cursor-pointer">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}
