import React from "react";
import homevideo from "../../assets/Homevideonew.mp4";
import logo from "../../assets/logo.png";
import back from "../../assets/";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
          <video
            src={homevideo}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={back}
          ></video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from70% to-black"></div>
        <div className="relative z-20 flex h-fit flex-col justify-end pb-20">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            src={logo}
            alt="Ceres"
            className="w-full p-4"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
