import MobileProjectsImg from "../assets/mobile-projects.jpg";
import BackendProjectsImg from "../assets/backend-projects.jpeg";
import UnityProjectsImg from "../assets/unity-projects.png";

export default function Projects({ id }) {
  const projectCategories = [
    {
      url: "mobile",
      title: "Mobile Projects",
      desc: "I develop cross-platform, user-friendly, and high-performance mobile applications for both iOS and Android using modern technologies.",
      img: MobileProjectsImg,
      stack: ["React Native", "Expo", "Firebase", "Supabase", "NativeWind"],
    },
    {
      url: "backend",
      title: "Backend Projects",
      desc: "I build robust and scalable backend services using ASP.NET Core Web API, focusing on clean, maintainable code following Clean Architecture principles.",
      img: BackendProjectsImg,
      stack: ["ASP.NET Core", "C#", "Azure", "Docker", "Clean Architecture"],
    },
    {
      url: "unity",
      title: "Unity Projects",
      desc: "As a hobby, I enjoy creating games and interactive experiences using the Unity engine, exploring game mechanics, 2D/3D assets, and C# scripting.",
      img: UnityProjectsImg,
      stack: ["Unity", "C#", "Game Development", "2D & 3D"],
    },
  ];

  return (
    <section
      id={id}
      className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col gap-10"
    >
      <span className="font-bold text-center text-2xl text-[#d3191c]">
        PROJECTS
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projectCategories.map((project) => (
          <a
            href={`/${project.url}`}
            key={project.title}
            className="flex flex-col items-center w-72 border-0 rounded-2xl shadow p-4 space-y-2 hover:-translate-y-2 duration-150 hover:cursor-pointer hover:border-1"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p className="text-gray-700 text-sm sm:text-sm leading-relaxed text-center">
              {project.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4 border-t border-[#e5e7eb]">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-semibold text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
