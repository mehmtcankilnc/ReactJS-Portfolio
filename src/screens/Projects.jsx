import { FiExternalLink } from "react-icons/fi";
import FoodLens from "../assets/Foodlens.png";
import Carentu from "../assets/Carentu.png";
import Stalker from "../assets/Stalker.png";

function ProjectCard({
  title,
  desc,
  img,
  stack,
  codeLink,
  demoLink,
  reverse,
  codeDisabled = false,
  demoDisabled = false,
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } gap-6 lg:gap-10 items-center`}
    >
      <img
        src={img}
        alt={title}
        className="w-56 sm:w-64 lg:w-72 rounded-2xl border-4"
      />
      <div className="flex flex-col gap-6 text-center lg:text-left max-w-xl items-center">
        <span className="font-bold text-xl">{title}</span>
        <p className="font-light text-gray-600">{desc}</p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          {stack.map((s) => (
            <span key={s} className="font-bold text-sm sm:text-base">
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

export default function Projects({ id }) {
  return (
    <section
      id={id}
      className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col gap-16"
    >
      <span className="font-bold text-[#d3191c]">PROJECTS</span>
      <ProjectCard
        title="FoodLens"
        desc="FoodLens is a graduation thesis project that I developed together 
        with my teammate Fatma Nur Iskal. The app helps users track their daily 
        calorie intake and analyze the ingredients of packaged foods simply by 
        scanning the product’s barcode. In addition, FoodLens enables users to 
        create personalized diet plans by setting their nutritional goals."
        img={FoodLens}
        stack={["React Native", "Expo"]}
        codeLink="https://github.com/mehmtcankilnc/FoodLens"
        // demoLink="foodlens"
        demoDisabled={true}
      />
      <hr className="my-2" style={{ color: "gray" }} />
      <ProjectCard
        title="Carentu"
        desc="Carentu is a freelance project that I am currently developing together 
        with my colleague Fatma Nur Iskal. The app helps users find the perfect car 
        for renting, while allowing local businesses to list their car inventories 
        and connect with potential customers."
        img={Carentu}
        stack={["React Native", "Cloudflare"]}
        reverse
        // codeLink="https://github.com/mehmtcankilnc/FoodLens"
        // demoLink="carentu"
        codeDisabled={true}
        demoDisabled={true}
      />
      <hr className="my-2" style={{ color: "gray" }} />
      <ProjectCard
        title="Stalker"
        desc="Stalker is a hobby project that I developed together with my colleague 
        Fatma Nur Iskal. The app helps users track their daily moods by selecting 
        custom-designed emojis that represent specific feelings. In addition, users 
        can track their habits, create new ones, and monitor their progress over time."
        img={Stalker}
        stack={["React Native", "Expo"]}
        codeLink="https://github.com/fnurIskal/stalker"
        // demoLink="stalker"
        demoDisabled={true}
      />
    </section>
  );
}
