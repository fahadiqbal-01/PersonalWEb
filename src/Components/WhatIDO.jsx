import React from "react";
import { FaCode, FaPhotoVideo } from "react-icons/fa";
import { PiDevicesBold } from "react-icons/pi";
import { TbWorldCode } from "react-icons/tb";
import Flex from "./Flex";
import Title from "./Title";
import Whatidoitems from "./Whatidoitems";

const WhatIDO = () => {
  return (
    <>
      <div className=" bg-[#252525] my-[70px] px-[25px] py-[40px] rounded-xl ">
        <Title title="What I Do!" className="select-none" />
        <Flex className=" flex-col xl:flex-row justify-between">
          <Whatidoitems
            icon={<FaCode />}
            title="Web Development"
            summary="  Use markup languages like HTML to create user-friendly web pages.
              Maintain and improve website. Stay up-to-date on emerging
              technologies. Understanding of layout aesthetics."
            className="bg-[#f76300]"
          />
          <Whatidoitems
            icon={<PiDevicesBold />}
            title="Responsive Web Design"
            summary="Hands on experience with markup languages. In-depth understanding
              of the entire web development process (design, development and
              deployment). Well maintained responsive websites."
            className=" bg-[#086af4]"
          />
          <Whatidoitems
            icon={<TbWorldCode />}
            title="Frameworks and Libraries"
            summary="work with front end frameworks and libraries like React,
              Bootstrap, tailwind and others to streamline development and
              enhance user interactivity."
            className="bg-gray-400 "
          />
          <Whatidoitems
            icon={<FaPhotoVideo />}
            title=" Video Editing (one of the hobbies)"
            summary="  I mostly use Adobe Rush, Adobe Premier Pro and CatCut to make
              montage videos. Most of the videos I have made is based on Movies
              or Anime."
            className="bg-[#ffeb08]"
          />
        </Flex>
      </div>
    </>
  );
};

export default WhatIDO;
