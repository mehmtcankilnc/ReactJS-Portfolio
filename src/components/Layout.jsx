import Navbar from "./Navbar";
import { useCallback, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";

const NAV_H = 128;

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const doScroll = (id) => {
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
  };

  const handleNav = useCallback(
    (id) => {
      if (location.pathname !== "/") {
        navigate(`/#${id}`);
      } else {
        doScroll(id);
      }
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        doScroll(id);
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNav={handleNav} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Chatbot />
    </div>
  );
}

export default Layout;
