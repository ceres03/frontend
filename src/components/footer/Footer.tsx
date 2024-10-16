import "./Footer.css";
import footerpng from "../../assets/footerImage.svg";
import sarahlogo from "../../assets/sarah-logo.svg";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <img src={footerpng} alt="" height={780} className="w-full mx-auto" />
      <div className="flex justify-center bg-[#515839] text-white mx-auto">
        <div className="container flex flex-col p-4">
          <img
            src={sarahlogo}
            alt="Ceres"
            height={75}
            width={212.5}
            className="py-4"
          />
          <p className="text-lg">Acesse nossas redes sociais</p>
          <p className="text-sm">Copyright © 2024 Ceres</p>
          <div className="flex gap-4 py-4">
            <LinkedinLogo size={48} weight="bold" id="social" />
            <InstagramLogo size={48} weight="bold" id="social" />
            <FacebookLogo size={48} weight="bold" id="social" />
          </div>
          <div className="flex gap-2 mt-10 mb-8">
            <Link to="/legal" className="hover:underline">
              Informações legais
            </Link>{" "}
            •{" "}
            <Link to="politics" className="hover:underline">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
