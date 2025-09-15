export default function About({ id }) {
  return (
    <section
      id={id}
      className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="w-full max-w-md mx-auto">
            <img
              src="https://i.pinimg.com/1200x/74/4b/30/744b301c38986bf04c0fedc7c2fd417a.jpg"
              alt="Portrait"
              className="w-full h-[380px] sm:h-[420px] lg:h-[460px] object-cover rounded-2xl border-4"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl text-[#d3191c]">ABOUT ME</span>
            <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Fresh Graduated <br className="hidden sm:block" />
              Software Developer
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            Hey, I'm Mehmetcan, a recently graduated software developer based in
            Adana, Türkiye. I have over a year of experience building mobile
            applications with React Native and Expo, where I worked with tools
            and libraries such as NativeWind, Firebase, Supabase, Redux, and
            more. For the past three months, I’ve also been focusing on backend
            development with ASP.NET Core Web API following the Clean
            Architecture principles. In addition, I designed and developed this
            portfolio website myself using ReactJS and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
