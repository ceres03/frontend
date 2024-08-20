import homevideo from "../../assets/Homevideonew.mp4";
import logo from "../../assets/logo.png"
import back from "../../assets/back.png";
import { motion } from "framer-motion";
import '../sobre/Sobre'
import Sobre from "../sobre/Sobre";
import logoHome from "../../assets/logo.svg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import { MapPin } from "@phosphor-icons/react";

function Home() {
  return (
    <>

      <section className=" flex h-screen bg-[#fdfff6] ">
        
        <div className="flex flex-col m-auto">
          <img src={logoHome} alt="logo oficial" className="flex items-center justify-start m-4 z-10 scale-[500%]"/>
          <div className="flex align-center justify-center bg-[#515839] text-white font-bold rounded-3xl p-2 gap-2 m-auto mt-10 hover:bg-[#7C8758] hover:scale-[103%] transition-all duration-[0.6s] z-10">
          <button type="button" className="ml-2 " ><a href="#">Procurar colaborador próximo a mim </a></button>
          <MapPin size={32}/>
          </div>
        </div>
        
        <img src={image1} alt="imagem1" className="absolute z-0 left-[-200px] h-[100%] hover:scale-105 transition-all duration-[0.75s]" />
        <img src={image2} alt="imagem2" className="absolute z-0 right-[-30px] h-[100%] hover:scale-105 transition-all duration-[0.75s]" />
      </section>

      <Sobre />
    </>
  );
}

export default Home;
