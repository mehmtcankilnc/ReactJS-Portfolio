import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  id,
  title,
  desc,
  img,
  stack,
  codeLink,
  demoLink,
  reverse,
  codeDisabled = false,
  demoDisabled = false,
  customImgStyle = "w-52 sm:w-40 lg:w-60",
}) {
  return (
    <div
      id={id}
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } gap-6 lg:gap-10 items-center`}
    >
      <img
        src={img}
        alt={title}
        className={`rounded-2xl border-4 ${customImgStyle}`}
      />
      <div className="flex flex-col gap-6 text-center lg:text-left max-w-xl items-center">
        <span className="font-bold text-xl">{title}</span>
        <p className="font-light text-gray-600">{desc}</p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="font-semibold text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex justify-center lg:justify-start gap-4 mt-2 flex-wrap">
          {codeLink && (
            <button
              disabled={codeDisabled}
              onClick={() => window.open(codeLink, "_blank")}
              className={`${
                codeDisabled ? "" : "border-anim"
              } flex font-medium items-center gap-2 px-3 py-1 disabled:opacity-50`}
            >
              Code
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-6 h-6"
              />
              {!codeDisabled && (
                <svg className="border-svg">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="12"
                    ry="12"
                  />
                </svg>
              )}
            </button>
          )}
          {demoLink && (
            <button
              disabled={demoDisabled}
              onClick={() => window.open(demoLink, "_blank")}
              className={`${
                demoDisabled ? "" : "border-anim"
              } flex font-medium items-center gap-2 px-3 py-1 disabled:opacity-50`}
            >
              Live Demo
              <FiExternalLink size={22} />
              {!demoDisabled && (
                <svg className="border-svg">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="12"
                    ry="12"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
