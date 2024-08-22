import "./Navbar.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import links from "../../consts/links";
import Menu from "../Menu/Menu";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="relative bg-white drop-shadow-md">
      <nav className="navbar container mx-auto text-[#515839] font-poppins px-4">
        <Menu links={links} />
        <MobileMenu links={links} />
      </nav>
    </div>
  );
}

export default Navbar;
