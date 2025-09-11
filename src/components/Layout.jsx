import Navbar from "./Navbar";
import { useCallback, useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const NAV_H = 128;

function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = useCallback((id) => {
    if (id === "contact") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_H - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNav={scrollToId} />
      <main className="flex-1">{children}</main>
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-8 right-8 bg-[#d3191c] text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Yukarı çık"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}

export default Layout;
