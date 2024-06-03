import React from "react";
import { FaBootstrap, FaCss3Alt, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import Flex from "./Flex";
import Title from "./Title";
import { TbBrandVite } from "react-icons/tb";

const Skills = () => {
  return (
    <div>
      <div className=" bg-[#252525] mt-[40px] px-[25px] py-[40px] rounded-xl ">
        <Title title="Skills" />
        <Flex className=" justify-between flex-wrap lg:flex-row xl:flex-row mt-[40px] ">
          <FaHtml5 className=" text-[70px]  " />
          <FaCss3Alt className=" text-[70px] " />
          <RiTailwindCssFill className=" text-[70px] " />
          <FaBootstrap className=" text-[70px] " />
          <FaReact className=" text-[70px] " />
          <TbBrandVite  className=" text-[70px] " />
          <FaFigma className=" text-[70px] " />
          <IoLogoJavascript className=" text-[70px] " />
        </Flex>
      </div>
    </div>
  );
};

export default Skills;
