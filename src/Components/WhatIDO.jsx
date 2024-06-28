import React, { useEffect, useRef } from "react";
import { FaCode, FaPhotoVideo } from "react-icons/fa";
import { PiDevicesBold } from "react-icons/pi";
import { TbWorldCode } from "react-icons/tb";
import Flex from "./Flex";
import Title from "./Title";
import {
  delay,
  easeInOut,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

const WhatIDO = () => {

const ref = useRef(null)
const isINView = useInView(ref, {once : true})
const mainControls = useAnimation()

useEffect(()=>{
if(isINView){
  mainControls.start("visible")
}
},[isINView])

  return (
    <>
      <motion.div   variants={{
              hidden: { opacity: 0, x:-300 },
              visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              delay: 0.25,
              duration: .5,
              easeInOut,
            }}
       className=" bg-[#252525] px-[25px] py-[40px] rounded-xl mt-[120px] mb-[80px] ">
        <Title title="What I Do!" className="select-none" />
        <Flex className=" flex-col xl:flex-row justify-between">
          <motion.div
          ref={ref}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              delay: 0.25,
              duration: .3,
              easeInOut,
            }}
            className={`rounded-xl w-full xl:w-[24.5%] py-[15px] px-[20px] mt-[20px] selection:text-white bg-[#f76301]`}
          >
            <h2 className=" text-[20px] font-medium font-primary text-black flex justify-start items-center gap-[15px] ">
              <span>
                <FaCode />
              </span>
              Web Development
            </h2>
            <p className=" text-[17px] font-primary font-normal text-black mt-[20px] ">
              Use markup languages like HTML to create user-friendly web pages.
              Maintain and improve website. Stay up-to-date on emerging
              technologies. Understanding of layout aesthetics.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 160 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              delay: 0.25,
              duration: .7,
              easeInOut,
            }}
            className={`rounded-xl w-full xl:w-[24.5%] py-[15px] px-[20px] mt-[20px] selection:text-white bg-[#0869f4]`}
          >
            <h2 className=" text-[20px] font-medium font-primary text-black flex justify-start items-center gap-[15px] ">
              <span>
              <PiDevicesBold />
              </span>{" "}
              Responsive Web Design
            </h2>
            <p className=" text-[17px] font-primary font-normal text-black mt-[20px] ">
            Hands on experience with markup languages. In-depth understanding
              of the entire web development process (design, development and
              deployment). Well maintained responsive websites.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              delay: 0.25,
              duration: .9,
              easeInOut,
            }}
            className={`rounded-xl w-full xl:w-[24.5%] py-[15px] px-[20px] mt-[20px] selection:text-white bg-[#9ca2ae]`}
          >
            <h2 className=" text-[20px] font-medium font-primary text-black flex justify-start items-center gap-[15px] ">
              <span>
              <TbWorldCode />
              </span>{" "}
              Frameworks and Libraries
            </h2>
            <p className=" text-[17px] font-primary font-normal text-black mt-[20px] ">
            Work with front end frameworks and libraries like React,
              Bootstrap, tailwind and others to streamline development and
              enhance user interactivity.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 70 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              delay: 0.25,
              duration: 1.1,
              easeInOut,
            }}
            className={`rounded-xl w-full xl:w-[24.5%] py-[15px] px-[20px] mt-[20px] selection:text-white bg-[#ffeb08]`}
          >
            <h2 className=" text-[20px] font-medium font-primary text-black flex justify-start items-center gap-[15px] ">
              <span>
              <FaPhotoVideo />
              </span>{" "}
              Video Editing (one of the hobbies)
            </h2>
            <p className=" text-[17px] font-primary font-normal text-black mt-[20px] ">
            I mostly use Adobe Rush, Adobe Premier Pro and CatCut to make
              montage videos. Most of the videos I have made is based on Movies
              or Anime.
            </p>
          </motion.div>

        </Flex>
      </motion.div>
    </>
  );
};

export default WhatIDO;
