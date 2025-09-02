import Me from "../assets/me.jpg";

export default function Home({ id }) {
  return (
    <section id={id} className="modal mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between my-5">
          <div className="flex flex-col gap-10">
            <div className="font-extrabold text-5xl">Software Developer</div>
            <div className="font-normal text-base text-[gray]">
              Hey, I'm Mehmetcan. I'm a fresh graduated software developer based
              in Adana, Türkiye.
            </div>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() =>
                window.open("https://github.com/mehmtcankilnc", "_blank")
              }
              className="icon"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mehmetcankilinc",
                  "_blank"
                )
              }
              className="icon"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mehmtcankilinc",
                  "_blank"
                )
              }
              className="icon"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
            </button>
            <button
              onClick={() =>
                window.open("https://x.com/mehmtcankilinc", "_blank")
              }
              className="icon"
            >
              <img src="https://icon2.cleanpng.com/20240119/rp/transparent-x-logo-cross-design-black-and-white-photograph-sim-black-and-white-cross-with-letters-x-and-1710898892931.webp" />
            </button>
          </div>
        </div>
        <img
          src={Me}
          alt="me"
          style={{
            width: 250,
            borderRadius: 20,
            borderWidth: 3,
          }}
        />
      </div>
      <div className="flex my-10 items-center gap-5">
        <div className="flex gap-5">
          <div className="font-medium text-lg text-[#d3191c]">Tech Stack</div>
          <div className="font-medium text-lg text-[#d3191c]">|</div>
        </div>
        <div className="flex gap-5">
          <div className="tech-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg" />
            <span>React Native</span>
          </div>
          <div className="tech-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />
            <span>ASPNET Core</span>
          </div>
          <div className="tech-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <span>JavaScript</span>
          </div>
          <div className="tech-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
            <span>C#</span>
          </div>
          <div className="tech-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <span>ReactJS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
