import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
const baseurl = import.meta.env.BASE_URL;
const Layout = () => {
  const [isDark, setIsDark] = useState(true);
  const [img, setImg] = useState<{
    icon: string | undefined;
    title: string | undefined;
  }>();
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
  }, [isDark]);
  return (
    <>
      <main>
        <div className="head">
          <div className={img ? "access-icon" : "access-icon hide"}>
            <div className="img-con">
              <img src={img ? baseurl + img?.icon : ""} alt={img?.title} />
            </div>

            <span className="access-title">{img?.title}</span>
          </div>
          <div className="theme-toggle">
            {/* 1. Added an ID and an aria-label describing the left side */}
            <span className="icon sun" id="sun-label" aria-label="Light mode">
              <div className={isDark ? "img-sun dark" : "img-sun"}></div>
            </span>

            <label className="switch">
              <input
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
                role="switch"
                aria-checked={isDark}
                aria-labelledby="sun-label moon-label"
              />
              <span className="slider"></span>
            </label>

            <span className="icon moon" id="moon-label" aria-label="Dark mode">
              <div className={isDark ? "img-moon dark" : "img-moon"}></div>
            </span>
          </div>
        </div>
        <Outlet context={{ setImg }} />

        <Footer />
      </main>
    </>
  );
};

export default Layout;
