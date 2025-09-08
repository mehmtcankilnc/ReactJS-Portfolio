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
            <span className="font-bold tracking-wide text-[#d3191c]">
              ABOUT ME
            </span>
            <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Fresh Graduated <br className="hidden sm:block" />
              Software Developer
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem explicabo eaque tempore, totam nihil perspiciatis vel
            laudantium quisquam debitis qui voluptas quaerat optio minus
            distinctio ea vitae labore accusamus aliquid iste commodi nam!
            Quidem porro sequi deserunt sed commodi harum animi enim eum ut
            rerum quam facilis consequatur earum ea aliquid magnam tenetur esse
            hic, non autem!
          </p>
        </div>
      </div>
    </section>
  );
}
