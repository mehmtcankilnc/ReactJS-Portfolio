export default function About({ id }) {
  return (
    <section id={id} className="modal scroll-mt-24 mx-auto">
      <div className="flex flex-1 gap-5">
        <img
          style={{
            width: 300,
            height: 400,
            borderRadius: 20,
            borderWidth: 3,
            alignSelf: "center",
          }}
          src="https://i.pinimg.com/1200x/74/4b/30/744b301c38986bf04c0fedc7c2fd417a.jpg"
          alt=""
        />
        <div
          className="flex flex-col gap-5 self-center"
          style={{ height: 400 }}
        >
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[#d3191c]">ABOUT ME</span>
            <span className="font-extrabold text-xl">
              Fresh Graduated <br /> Software Developer
            </span>
          </div>
          <p className="text-justify">
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
