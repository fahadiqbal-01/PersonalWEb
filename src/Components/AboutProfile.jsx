import React from "react";

import Flex from "./Flex";
import Images from "./Images";
import profile_img from "../assets/images/profile.png";

const AboutProfile = () => {
  return (
    <div className=" selection:text-orange py-[50px] sm:py-[10px] mt-[110px] sm:mt-0 xl:mt-0 ">
        <Flex className=" flex-col xl:flex-row justify-between items-center gap-[100px] mt-[50px] ">
          <Images src={profile_img} alt="profile_icon" className=" w-[15%] " />
          <div className=" bg-[#252525] px-[35px] py-[40px] rounded-xl ">
            <h1 className=" text-[20px] font-primary font-normal text-white ">
              Hey! My name is Fahad Iqbal. I am a front-end developer based in
              Bangladesh_
            </h1>
            <h3 className=" text-[16px] text-white font-primary font-normal mt-[25px] ">
              <span className=" text-orange ">I've </span> always been someone
              Who has both a creative and a logical side.
              <span className=" text-orange "> When</span> I discovered an ad
              about Web Development in college.
              <span className=" text-orange "> I realized</span> it would be the
              perfect fit.<span className=" text-orange "> I could </span>use
              any creative side to design and any logical side to code.{" "}
              <span className=" text-orange ">As a </span>
              developer it allows me to make sure no detail is lost in
              translation.
              <span className=" text-orange "> Even tho </span>i'm still
              learning and exploring new things to perfect my craft.
            </h3>
          </div>
        </Flex>
    </div>
  );
};

export default AboutProfile;
