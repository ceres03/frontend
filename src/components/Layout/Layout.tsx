import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <>
      <div className="min-h-[80vh]">
        <nav className="fixed top-0 left-0 w-full z-30 bg-transparent">
          <Navbar />
        </nav>

        <Outlet />

        <Footer />
      </div>
    </>
  );
}

export default Layout;
