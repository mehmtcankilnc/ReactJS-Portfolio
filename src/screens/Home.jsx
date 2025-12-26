import Me from "../assets/me.jpg";

export default function Home({ id }) {
  return (
    <section
      id={id}
      className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-10 order-1">
          <div className="flex flex-col gap-6">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Full Stack Developer
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Hey, I'm Mehmetcan. I'm a fresh graduated full stack developer
              based in Adana, Türkiye.
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <button
              onClick={() =>
                window.open("https://github.com/mehmtcankilnc", "_blank")
              }
              className="icon"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-8 h-8"
              />
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
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-8 h-8"
              />
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram"
                className="w-8 h-8"
              />
            </button>
            <button
              onClick={() =>
                window.open("https://x.com/mehmtcankilinc", "_blank")
              }
              className="icon"
            >
              <img
                src="https://icon2.cleanpng.com/20240119/rp/transparent-x-logo-cross-design-black-and-white-photograph-sim-black-and-white-cross-with-letters-x-and-1710898892931.webp"
                alt="X"
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <img
            src={Me}
            alt="me"
            className="w-40 sm:w-56 lg:w-64 rounded-2xl border-4"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 mt-12">
        <div className="flex gap-3 items-center">
          <span className="font-medium text-lg text-[#d3191c]">Tech Stack</span>
          <span className="font-medium text-lg text-[#d3191c]">|</span>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="tech-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg"
              alt="React Native"
            />
            <span>React Native</span>
          </div>
          <div className="tech-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
              alt=".NET Core"
            />
            <span>ASPNET Core</span>
          </div>
          <div className="tech-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
              alt="TypeScript"
            />
            <span>TypeScript</span>
          </div>
          <div className="tech-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <span>JavaScript</span>
          </div>
          <div className="tech-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
              alt="C#"
            />
            <span>C#</span>
          </div>
          <div className="tech-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="ReactJS"
            />
            <span>ReactJS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
