import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <h1>up</h1>
      <Outlet />
      <h3>down</h3>
    </main>
  );
};

export default Layout;
