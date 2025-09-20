import { useEffect, useState } from "react";
import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useLocation, Link } from "react-router-dom";

const PROJECTS_SUB_ITEMS = [
  { id: "mobile", label: "Mobile Projects" },
  { id: "backend", label: "Backend Projects" },
  { id: "unity", label: "Unity Projects" },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects", subItems: PROJECTS_SUB_ITEMS },
  { id: "contact", label: "Contact" },
];

const ALL_NAV_ITEMS = NAV_ITEMS.flatMap((item) =>
  item.subItems ? [item, ...item.subItems] : item
);

export default function Navbar({ onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const location = useLocation();

  const glass = "backdrop-blur-md bg-white/70 dark:bg-zinc-300/60";

  useEffect(() => {
    let scrollTimeout;
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const projectPages = ["/mobile", "/backend", "/unity"];
        if (projectPages.includes(location.pathname)) {
          setActive("projects");
          return;
        }

        if (location.pathname !== "/") return;

        let currentActiveId = "home";
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
        ) {
          currentActiveId = "contact";
        } else {
          for (const item of [...NAV_ITEMS].reverse()) {
            const element = document.getElementById(item.id);
            if (
              element &&
              element.getBoundingClientRect().top < window.innerHeight / 2
            ) {
              currentActiveId = item.id;
              break;
            }
          }
        }

        if (active !== currentActiveId) {
          setActive(currentActiveId);
          const newHash =
            currentActiveId === "home" ? "/" : `/#${currentActiveId}`;
          window.history.replaceState(null, "", newHash);
        }
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname, active]);

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
    const newHash = id === "home" ? "/" : `/#${id}`;
    window.history.replaceState(null, "", newHash);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? glass + " shadow-sm" : "bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-12 py-4">
        <div
          className="font-bold text-3xl text-[#d3191c] tracking-wider"
          style={{ fontFamily: "Jaini" }}
        >
          MEHMETCAN KILINÇ
        </div>
        <nav className="hidden md:flex gap-10">
          {NAV_ITEMS.map((item) =>
            item.subItems ? (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-1 font-semibold hover:opacity-80 transition-colors ${
                    active === item.id ||
                    item.subItems.some((sub) => sub.id === active)
                      ? "text-[#d3191c]"
                      : ""
                  }`}
                >
                  {item.label}
                  <IoChevronDown />
                </button>
                {projectsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-max">
                    <div className="w-48 rounded-md shadow-lg bg-white">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={`/${subItem.id}`}
                            onClick={() => setProjectsOpen(false)}
                            className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                              active === subItem.id
                                ? "text-[#d3191c] bg-gray-100"
                                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                            role="menuitem"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`font-semibold hover:opacity-80 transition-colors ${
                  active === item.id ? "text-[#d3191c]" : ""
                }`}
              >
                {item.label}
              </button>
            )
          )}
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
          {NAV_ITEMS.map((item) =>
            item.subItems ? (
              <div key={item.id}>
                <button
                  onClick={() => setMobileProjectsOpen((s) => !s)}
                  className={`flex justify-between items-center w-full text-left font-semibold transition-colors ${
                    active === item.id ||
                    item.subItems.some((sub) => sub.id === active)
                      ? "text-[#d3191c]"
                      : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {mobileProjectsOpen ? <IoChevronUp /> : <IoChevronDown />}
                </button>
                {mobileProjectsOpen && (
                  <div className="pl-4 mt-4 flex flex-col gap-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={`/${subItem.id}`}
                        onClick={() => setOpen(false)}
                        className={`text-left font-semibold transition-colors ${
                          active === subItem.id ? "text-[#d3191c]" : ""
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left font-semibold transition-colors ${
                  active === item.id ? "text-[#d3191c]" : ""
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
