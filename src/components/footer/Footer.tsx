import React from "react";
import './Footer.css'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-gray-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Ceres | Copyright: </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-4">
            <LinkedinLogo size={48} weight="bold" id="social" />
            <InstagramLogo size={48} weight="bold" id="social" />
            <FacebookLogo size={48} weight="bold" id="social" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
