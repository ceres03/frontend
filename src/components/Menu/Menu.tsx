import { Link } from "react-router-dom";
import "./Menu.css";
import Logo from "../Logo/Logo";

function Menu({
  links,
  adminLinks,
  admin,
}: {
  links: Array<{ name: string; url: string }>;
  adminLinks: Array<{ name: string; url: string }>;
  admin: boolean;
}) {
  return (
    <>
      <Link to={"/"}>
        <div className="hover:scale-105 transition-all pb-4">
          <Logo height={36} width={102} color="#515839" />
        </div>
        {/* <img
          src={cereslogo}
          alt="Logotipo"
          className="w-20 h-auto hover:scale-105 transition-all mt-0"
        /> */}
      </Link>
      <ul className="hidden xl:flex items-center ">
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.url} className="nav p-4">
              {link.name}
            </Link>
          </li>
        ))}
        {admin &&
          adminLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.url} className="nav p-4">
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
      {/* <SearchBar /> */}
    </>
  );
}
export default Menu;
