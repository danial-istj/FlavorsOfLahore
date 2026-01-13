import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyDarkMode } from "../utils/darkMode";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    applyDarkMode();
  }, [location]);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
