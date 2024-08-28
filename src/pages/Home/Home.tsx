import "../sobre/Sobre";
import Sobre from "../sobre/Sobre";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import { MapPin } from "@phosphor-icons/react";
import Logo from "../../components/Logo/Logo";
import CarrouselCategorias from "../../components/CarrouselCategorias/CarrouselCategorias";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Parceiros from "../parceiros/Parceiros";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.search == "?scrollTo=sobre") {
      const sobreSection = document.getElementById("sobre-section");
      if (sobreSection) {
        sobreSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.search == "?scrollTo=home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.search == "?scrollTo=parceiros") {
      window.scrollTo({ top: 2500, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center items-center mt-20 gap-20 mx-auto bg-[#fdfff6] overflow-hidden relative">
        <div className="flex justify-center items-center p-8 z-10">
          <Logo height={75} width={212.5} color="#515839"></Logo>
        </div>
        <button
          type="button"
          className="flex justify-center items-center lg:w-[400px] xl:w-[500px] h-[50px] py-2 px-8 md:p-6 lg:p-2 gap-2 bg-[#515839] hover:bg-[#7C8758] text-white font-bold rounded-xl hover:scale-[103%] transition-all duration-[0.6s] z-10"
        >
          <a href="#">Procurar produtor próximo a mim </a>
          <MapPin size={32} className="" />
        </button>
        <img
          src={image1}
          alt="imagem1"
          className="absolute top-0 left-[-250px] md:left-[-230px] lg:left-[-250px] xl:left-[-150px] z-0 hover:scale-105 transition-all duration-[0.5s] h-screen opacity-40 lg:opacity-100"
        />
        <img
          src={image2}
          alt="imagem2"
          className="absolute top-0 right-[-150px] md:right-[-100px] lg:right-[-50px] z-0 hover:scale-105 transition-all duration-[0.5s] h-screen opacity-40 lg:opacity-100"
        />
      </section>
      <CarrouselCategorias />
      <section id="sobre-section">
        <Sobre />
      </section>
      <Parceiros />
    </>
  );
}

export default Home;
