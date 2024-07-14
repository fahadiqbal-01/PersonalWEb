import React, { useEffect, useRef } from "react";
import Flex from "./Flex";
import Images from "./Images";
import profile_img from "../assets/images/profile.jpg";
import {
  delay,
  easeInOut,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

const AboutProfile = () => {
  const ref = useRef(null);
  const isINView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isINView) {
      mainControls.start("visible");
    }
  }, [isINView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        delay: 0.25,
        duration: 0.5,
        easeInOut,
      }}
      className=" selection:text-orange pt-[30px] "
      id="About"
    >
      <Flex className=" flex-col xl:flex-row justify-between items-center gap-[100px] mt-[50px] ">
        <Images src={profile_img} alt="profile_icon" className=" w-[15%] " />
        <div className=" bg-transparent px-[35px] py-[40px] border-[2px] border-[#252525] rounded-xl ">
          <h1 id="about_title" className=" text-[20px] font-primary font-normal ">
            Hey! My name is Fahad Iqbal. I am a front-end developer based in
            Bangladesh_
          </h1>
          <h3 className=" text-[16px] text-white font-primary font-normal mt-[25px] ">
            <span className=" text-[#e0c75f] ">I've </span> always been someone Who
            has both a creative and a logical side.
            <span className=" text-[#e0c75f] "> When</span> I discovered an ad
            about Web Development in college.
            <span className=" text-[#e0c75f] "> I realized</span> it would be the
            perfect fit.<span className=" text-[#e0c75f] "> I could </span>use any
            creative side to design and any logical side to code.{" "}
            <span className=" text-[#e0c75f] ">As a </span>
            developer it allows me to make sure no detail is lost in
            translation.
            <span className=" text-[#e0c75f] "> Even tho </span>i'm still learning
            and exploring new things to perfect my craft.
          </h3>
        </div>
      </Flex>
    </motion.div>
  );
};

export default AboutProfile;
