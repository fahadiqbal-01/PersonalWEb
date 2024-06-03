import React from "react";
import Container from "./Container";
import "./AllCss.css"

const Banner = () => {
  return (
    <section className=" mt-[50px] " >
      <Container>
        <div className="rounded-xl py-[35px] xl:py-[100px] px-[10px] xl:px-0 " id="banner">
          <h2 className=" capitalize text-[50px] lg:text-[60px] xl:text-[70px] font-primary font-bold text-orange text-center select-none ">hi.welcome</h2>
          <h3 className=" text-[25px] lg:text-[30px] xl:text-[35px] text-white font-primary font-medium text-center select-none ">I'm Fahad Iqbal,</h3>
          <div className=" text-center ">
            <h1 className=" text-[28px] lg:text-[35px] xl:text-[40px] font-primary font-extrabold tracking-wide text-white capitalize selection:text-orange">
              Frontend Developer <br />
              based in Bangladesh
            </h1>
            <h3 className=" text-gray-400 text-[18px] xl:text-[25px] font-light font-primary w-auto md:w-[80%] xl:w-[50%] mx-auto mt-[16px] selection:text-orange ">
              who can write clean, elegent and efficient code with responsive
              web design_
            </h3>
          </div>
          <div className=" flex justify-center mt-[40px] select-none ">
            <a href="cv/Fahad_Iqbal(Front-end Developer).pdf" download className=" text-orange text-[18px] font-primary font-medium px-[25px] py-[10px] bg-transparent border-[2px] border-orange rounded-xl duration-300 ease-in ">
              Download CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
