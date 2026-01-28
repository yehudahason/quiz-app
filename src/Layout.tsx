import { Outlet } from "react-router-dom";
import accessibility from "./assets/images/icon-accessibility.svg";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isDark, setIsDark] = useState(false);
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
  }, [isDark]);
  return (
    <main>
      <div className="head">
        <span className="access-icon">
          <img src={accessibility} alt="Accessibility" />
        </span>
        <div className="theme-toggle">
          <span className="icon sun">
            <div className={isDark ? "img-sun dark" : "img-sun"}></div>
          </span>

          <label className="switch">
            <input type="checkbox" checked={isDark} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>

          <span className="icon moon">
            <div className={isDark ? "img-moon dark" : "img-moon"}></div>
          </span>
        </div>
      </div>
      <Outlet />
    </main>
  );
};

export default Layout;
