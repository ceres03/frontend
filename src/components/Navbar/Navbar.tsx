import MobileMenu from "../MobileMenu/MobileMenu";
import { links, adminLinks } from "../../consts/links";
import Menu from "../Menu/Menu";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { usuario } = useContext(AuthContext);
  const email = usuario.email;
  const admin: boolean = email == "root@root.com";

  return (
    <div className="relative bg-white drop-shadow-md">
      <nav className="navbar container mx-auto text-[#515839] font-poppins px-4">
        <Menu links={links} adminLinks={adminLinks} admin={admin} />
        <MobileMenu links={links} adminLinks={adminLinks} admin={admin} />
      </nav>
    </div>
  );
}

export default Navbar;
