import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import "./MobileMenu.css";

function MobileMenu({
  links,
  adminLinks,
  admin,
}: {
  links: Array<{ name: string; url: string }>;
  adminLinks: Array<{ name: string; url: string }>;
  admin: boolean;
}) {
  const [isOpen, setOpen] = useState(false);
  const [fadeAnimation, setFadeAnimation] = useState(false);

  useEffect(() => {
    if (fadeAnimation) {
      setOpen(true);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  }, [fadeAnimation]);

  return (
    <>
      <button
        className="xl:hidden block text-5xl cursor-pointer"
        onClick={() => setFadeAnimation(!fadeAnimation)}
        type="button"
      >
        <Hamburger />
      </button>
      <nav
        className={`${fadeAnimation && "fade-in"} mobile__menu ${
          isOpen && "open "
        } `}
        style={{ transition: "transform 0.5s ease, opacity 0.5s ease" }}
      >
        <div className="w-full container">
          {links.map((link) => (
            <li key={link.name}>
              <Link key={link.name} to={link.url}>
                {link.name}
              </Link>
            </li>
          ))}
          {admin &&
            adminLinks.map((link) => (
              <li key={link.name}>
                <Link key={link.name} to={link.url}>
                  {link.name}
                </Link>
              </li>
            ))}
        </div>
      </nav>
    </>
  );
}
export default MobileMenu;
