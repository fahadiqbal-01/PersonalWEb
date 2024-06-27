import React from "react";
import "./AllCss.css";
import { HashLink as Link} from "react-router-hash-link";
import { delay, easeInOut, motion } from "framer-motion"

const Banner = () => {
  return (
    <motion.div
    variants={{
      hidden:{ opacity:0, y:80 },
      visible :{ opacity:1, y:0 }
    }}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.25, duration: .8, easeInOut }}

      className="rounded-xl py-[35px] xl:py-[100px] px-[10px] xl:px-0 relative "
      id="banner"
    >
      <h2 className=" capitalize text-[50px] lg:text-[60px] xl:text-[70px] font-primary font-bold text-orange text-center selection:text-white ">
        hi.welcome
      </h2>
      <h3 className=" text-[25px] lg:text-[30px] xl:text-[35px] text-white font-primary font-medium text-center selection:text-orange ">
        I'm Fahad Iqbal,
      </h3>
      <div className=" text-center ">
        <h1 className=" text-[28px] lg:text-[35px] xl:text-[40px] font-primary font-extrabold tracking-wide text-white capitalize selection:text-orange">
          Frontend Developer <br />
          based in Bangladesh
        </h1>
        <h3 className=" text-gray-400 text-[18px] xl:text-[25px] font-light font-primary w-auto md:w-[80%] xl:w-[50%] mx-auto mt-[16px] selection:text-orange ">
          who can write clean, elegent and efficient code with responsive web
          design_
        </h3>
      </div>
      <div className=" flex justify-center mt-[40px] select-none ">
        <a
          href="cv/Fahad_Iqbal(Front-end Developer).pdf"
          download
          className=" text-orange text-[18px] font-primary font-medium px-[25px] py-[10px] bg-transparent border-[2px] border-orange rounded-xl duration-300 ease-in "
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};

export default Banner;
