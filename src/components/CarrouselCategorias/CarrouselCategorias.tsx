import "./CarrouselCategorias.css";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import CardCategorias from "../Categorias/cardCategorias/CardCategorias";
import { buscar } from "../../services/Service";
import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import marketCart from '../../assets/outlineKart.svg';

function CarrouselCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: {},
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {!(categorias.length === 0) && (
        <>
          <div className="container mx-auto flex-col items-center text-[#515839] hidden lg:flex">
            <img
              src={marketCart}
              alt="image de carrinho"
              height={64}
              width={64}
            />
            <h2 className="py-6 text-2xl font-bold">Compre por categorias</h2>
          </div>
          <div className="container mx-auto hidden lg:flex p-4">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {categorias.map((categoria, index) => (
                <SwiperSlide key={index}>
                  <CardCategorias key={categoria.id} categoria={categoria} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
}
export default CarrouselCategorias;
