import { useEffect, useState } from "react";

export default function Navbar({ onNav }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between p-8",
        "transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-zinc-300/60 shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="font-bold text-xl text-[#d3191c]">Mehmetcan Kılınç</div>
      <nav className="flex gap-10">
        <button
          onClick={() => onNav("home")}
          className="font-semibold hover:opacity-80 hover:cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => onNav("about")}
          className="font-semibold hover:opacity-80 hover:cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => onNav("projects")}
          className="font-semibold hover:opacity-80 hover:cursor-pointer"
        >
          Projects
        </button>
        <button
          onClick={() => onNav("contact")}
          className="font-semibold hover:opacity-80 hover:cursor-pointer"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
