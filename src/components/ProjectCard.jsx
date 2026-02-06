import { useState, useEffect } from "react";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectCard({
  id,
  title,
  desc,
  images,
  stack,
  codeLink,
  demoLink,
  storeLink,
  reverse,
  codeDisabled = false,
  demoDisabled = false,
  customImgStyle = "w-52 sm:w-40 lg:w-60",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (isHovered || images.length <= 1) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isHovered, images.length]);

  return (
    <div
      id={id}
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } gap-6 lg:gap-10 items-center`}
    >
      <div
        className={`relative group ${customImgStyle} flex-shrink-0 rounded-2xl border-4 overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${title} slide ${index}`}
              className="w-full h-auto object-cover flex-shrink-0"
            />
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute z-10 top-1/2 -translate-y-1/2 left-2 text-white bg-[#d3191c]/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#d3191c]/70 cursor-pointer"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute z-10 top-1/2 -translate-y-1/2 right-2 text-white bg-[#d3191c]/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#d3191c]/70 cursor-pointer"
            >
              <FiChevronRight size={24} />
            </button>
            <div className="absolute z-10 bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={`transition-all w-2 h-2 rounded-full cursor-pointer ${
                    currentIndex === slideIndex
                      ? "bg-[#d3191c] p-1"
                      : "bg-[#d3191c]/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
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
          {storeLink && (
            <button
              disabled={codeDisabled}
              onClick={() => window.open(storeLink, "_blank")}
              className={`${
                codeDisabled ? "" : "border-anim"
              } flex font-medium items-center gap-2 px-3 py-1 disabled:opacity-50`}
            >
              Store
              <img
                src="https://cdn.simpleicons.org/googleplay/000000"
                alt="Play Store"
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
