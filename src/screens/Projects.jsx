import { FiExternalLink } from "react-icons/fi";
import FoodLens from "../assets/Foodlens.png";
import Carentu from "../assets/Carentu.png";
import Stalker from "../assets/Stalker.png";

export default function Projects({ id }) {
  return (
    <section
      id={id}
      className="modal scroll-mt-24 mx-auto"
      style={{ height: "auto" }}
    >
      <span className="font-bold text-[#d3191c]">PROJECTS</span>
      <div className="flex gap-5">
        <img
          src={FoodLens}
          style={{ width: 250, borderRadius: 20, borderWidth: 3 }}
        />
        <div className="flex flex-col mx-4 gap-4 items-center justify-center">
          <span className="font-bold text-xl">FoodLens</span>
          <p className="font-light text-[gray] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            odit, autem architecto dignissimos voluptates quod. Magni doloremque
            omnis ipsum nisi error minus, quisquam, consequatur laborum delectus
            facilis voluptatibus tempore pariatur. Reprehenderit tenetur saepe
            sequi corrupti, quidem quas dignissimos repellat deleniti deserunt
            qui.
          </p>
          <div className="flex gap-2">
            <span className="font-bold">React Native</span>
            <span className="font-bold">Expo</span>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/mehmtcankilnc/FoodLens",
                  "_blank"
                )
              }
              className="border-anim flex font-medium items-center gap-2"
            >
              Code
              <img
                style={{ width: 24 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              />
              <svg class="border-svg">
                <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12" />
              </svg>
            </button>
            <button className="border-anim flex font-medium items-center gap-2">
              Live Demo
              <FiExternalLink size={24} />
              <svg class="border-svg">
                <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col mx-4 gap-4 items-center justify-center">
          <span className="font-bold text-xl">Carentu</span>
          <p className="font-light text-[gray] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            odit, autem architecto dignissimos voluptates quod. Magni doloremque
            omnis ipsum nisi error minus, quisquam, consequatur laborum delectus
            facilis voluptatibus tempore pariatur. Reprehenderit tenetur saepe
            sequi corrupti, quidem quas dignissimos repellat deleniti deserunt
            qui.
          </p>
          <div className="flex gap-2">
            <span className="font-bold">React Native</span>
            <span className="font-bold">Cloudflare</span>
          </div>
          <div className="flex gap-5">
            <button className="border-anim flex font-medium items-center gap-2">
              Code
              <img
                style={{ width: 24 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              />
              <svg class="border-svg">
                <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12" />
              </svg>
            </button>
            <button className="border-anim flex font-medium items-center gap-2">
              Live Demo
              <FiExternalLink size={24} />
              <svg class="border-svg">
                <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12" />
              </svg>
            </button>
          </div>
        </div>
        <img
          src={Carentu}
          style={{ width: 250, borderRadius: 20, borderWidth: 3 }}
        />
      </div>
      <div className="flex gap-5">
        <img
          src={Stalker}
          style={{ width: 250, borderRadius: 20, borderWidth: 3 }}
        />
        <div className="flex flex-col mx-4 gap-4 items-center justify-center">
          <span className="font-bold text-xl">Stalker</span>
          <p className="font-light text-[gray] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            odit, autem architecto dignissimos voluptates quod. Magni doloremque
            omnis ipsum nisi error minus, quisquam, consequatur laborum delectus
            facilis voluptatibus tempore pariatur. Reprehenderit tenetur saepe
            sequi corrupti, quidem quas dignissimos repellat deleniti deserunt
            qui.
          </p>
          <div className="flex gap-2">
            <span className="font-bold">React Native</span>
            <span className="font-bold">Expo</span>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() =>
                window.open("https://github.com/fnurIskal/stalker", "_blank")
              }
              className="border-anim flex font-medium items-center gap-2"
            >
              Code
              <img
                style={{ width: 24 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              />
              <svg class="border-svg">
                <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12" />
              </svg>
            </button>
            <button className="border-anim flex font-medium items-center gap-2">
              Live Demo
              <FiExternalLink size={24} />
              <svg class="border-svg">
                <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
