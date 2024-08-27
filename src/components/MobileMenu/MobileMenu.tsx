import { useNavigate } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
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
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  const closeMenu = (url: string) => {
    setFadeAnimation(false);
    navigate(url);
  };

  const handleOutsideClick = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setFadeAnimation(false);
    }
  };

  const handleResize = () => {
    setFadeAnimation(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        ref={buttonRef}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
      <nav
        className={`${fadeAnimation && "fade-in"} mobile__menu ${
          isOpen && "open "
        } `}
        style={{ transition: "transform 0.5s ease, opacity 0.5s ease" }}
        ref={menuRef}
      >
        <div className="w-full container">
          {links.map((link) => (
            <li key={link.name}>
              <a key={link.name} onClick={() => closeMenu(link.url)}>
                {link.name}
              </a>
            </li>
          ))}
          {admin &&
            adminLinks.map((link) => (
              <li key={link.name}>
                <a key={link.name} onClick={() => closeMenu(link.url)}>
                  {link.name}
                </a>
              </li>
            ))}
        </div>
      </nav>
    </>
  );
}
export default MobileMenu;
