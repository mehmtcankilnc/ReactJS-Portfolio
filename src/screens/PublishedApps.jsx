import TutorSudokuIcon from "../assets/TutorSudokuIcon.png";
import TutorSudokuQR from "../assets/TutorSudokuQR.png";
import { FaGooglePlay } from "react-icons/fa";

const apps = [
  {
    title: "Tutor Sudoku",
    desc: "Learn, solve, and master Sudoku! Perfect for beginners and experts alike. Learn pro techniques like X-Wing, or use our Smart Scanner to digitize and solve any physical puzzle in seconds.",
    icon: TutorSudokuIcon,
    playStore: "https://play.google.com/store/apps/details?id=com.tutorsudoku",
    tags: ["Puzzle", "React Native", "TypeScript"],
  },
];

export default function PublishedApps({ id }) {
  return (
    <section
      id={id}
      className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col gap-10"
    >
      <span className="font-bold text-center text-2xl text-[#d3191c]">
        PUBLISHED APPS
      </span>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
        {apps.map((app) => (
          <div
            key={app.title}
            className="group h-[520px] w-full max-w-[290px] [perspective:1000px]"
          >
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">
              <div className="absolute inset-0 h-full w-full bg-white rounded-2xl p-5 flex flex-col items-center [backface-visibility:hidden]">
                <img
                  src={app.icon}
                  alt={app.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm"
                />
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {app.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4 border-t border-gray-100 w-full">
                  {app.tags.map((s) => (
                    <span
                      key={s}
                      className="font-semibold text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 h-full w-full bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h3 className="text-white font-bold text-lg mb-4">
                  Scan to Download
                </h3>
                <div className="bg-white p-2 rounded-lg mb-6 shadow-lg">
                  <img
                    src={TutorSudokuQR}
                    alt="QR Code"
                    className="w-32 h-32"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full max-w-[200px]">
                  {app.playStore && (
                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#d3191c] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium text-sm"
                    >
                      <FaGooglePlay /> Google Play
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
