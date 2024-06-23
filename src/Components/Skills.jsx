import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import Flex from "./Flex";
import Title from "./Title";
import { TbBrandRedux, TbBrandVite } from "react-icons/tb";

const Skills = () => {

  return (
    <div className=" bg-[#252525] mt-[40px] px-[25px] py-[40px] rounded-xl ">
      <Title title="Skills" className="select-none" />
      <Flex className=" justify-evenly flex-wrap gap-[35px] lg:gap-0 xl:gap-0 lg:flex-row xl:flex-row mt-[40px] ">
        <div className=" relative group ">
          <FaHtml5 className=" text-[70px]" />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            HTML
          </h5>
        </div>
        <div className=" relative group ">
          <FaCss3Alt className=" text-[70px] " />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            CSS
          </h5>
        </div>
        <div className=" relative group ">
          <RiTailwindCssFill className=" text-[70px] " />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            TailWind
          </h5>
        </div>
        <div className=" relative group ">
          <FaBootstrap className=" text-[70px] " />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            Bootstrap
          </h5>
        </div>
        <div className=" relative group ">
          <FaReact className=" text-[70px] " />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            React
          </h5>
        </div>
        <div className=" relative group ">
          <TbBrandVite className=" text-[70px] " />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            Vite
          </h5>
        </div>
        <div className=" relative group ">
          <FaFigma className=" text-[70px] " />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            Figma
          </h5>
        </div>
        <div className=" relative group ">
          <IoLogoJavascript className=" text-[70px] " />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            JavaScript
          </h5>
        </div>
        <div className=" relative group ">
          <TbBrandRedux className=" text-[70px] " />
          <h5 className=" text-[18px] text-transparent font-primary font-semibold absolute bottom-[-65px] left-[50%] translate-x-[-50%] group-hover:text-white group-hover:bottom-[-30px] duration-200 ease-out ">
            Redux
          </h5>
        </div>
      </Flex>
    </div>
  );
};

export default Skills;
