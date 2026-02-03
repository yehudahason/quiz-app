import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const baseurl = import.meta.env.BASE_URL;

const Layout = () => {
  const [isDark, setIsDark] = useState(false);
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
    <main>
      <div className="head">
        <div className="access-icon">
          <img src={img ? baseurl + img?.icon : ""} alt={img?.title} />
          <span className="access-title">{img?.title}</span>
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
      <Outlet context={{ setImg }} />
    </main>
  );
};

export default Layout;
