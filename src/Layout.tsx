import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const baseurl = import.meta.env.BASE_URL;

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
        <div className="access-icon">
          <img
            src={baseurl + "/assets/images/icon-accessibility.svg"}
            alt="Accessibility"
          />
          <span className="access-title">Accessibility</span>
        </div>
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
