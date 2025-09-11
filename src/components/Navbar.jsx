import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const glass = "backdrop-blur-md bg-white/70 dark:bg-zinc-300/60";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActive("contact");
        return;
      }

      for (const item of [...NAV_ITEMS].reverse()) {
        const element = document.getElementById(item.id);
        if (
          element &&
          element.getBoundingClientRect().top < window.innerHeight / 2
        ) {
          setActive(item.id);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    if (open) {
      const prev = el.style.overflow;
      el.style.overflow = "hidden";
      return () => (el.style.overflow = prev);
    }
  }, [open]);

  const handleNav = (id) => {
    onNav(id);
    setOpen(false);
    setActive(id);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? glass + " shadow-sm" : "bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="font-bold text-xl text-[#d3191c]">Mehmetcan Kılınç</div>
        <nav className="hidden md:flex gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`font-semibold hover:opacity-80 transition-colors ${
                active === item.id ? "text-[#d3191c]" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 transition"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          aria-label="Menüyü aç/kapat"
        >
          {open ? (
            <IoClose size={24} color="#d3191c" />
          ) : (
            <IoMenu size={24} color="#d3191c" />
          )}
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}
      <nav
        id="mobile-drawer"
        className={[
          "fixed top-0 left-0 h-[100dvh] w-72 z-[60] shadow-lg",
          glass,
          "transform transition-transform duration-300 will-change-transform",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left font-semibold transition-colors ${
                active === item.id ? "text-[#d3191c]" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
