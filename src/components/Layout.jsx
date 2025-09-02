import Navbar from "./Navbar";
import { useCallback } from "react";

const NAV_H = 128;

function Layout({ children }) {
  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_H - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNav={scrollToId} />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default Layout;
