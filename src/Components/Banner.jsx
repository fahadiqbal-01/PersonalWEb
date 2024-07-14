import React, { useEffect, useRef } from "react";
import "./AllCss.css";
import { delay, easeInOut, easeOut, motion, useAnimation, useInView } from "framer-motion";

const Banner = () => {

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
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: 0.25, duration: 0.6, easeOut }}
      className=" h-full xl:h-[100vh] md:pt-[200px] pt-[150px] xl:pt-[250px] sm:pt-0 pb-[150px] mt-0 sm:mt-[-75px] mb-0 sm:mb-[500px] "
      id="Home"
    >
      <motion.h2
      ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: [0.8, 0.2, 0.8, 0.2, 0.8, 0.2, 1] },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.5, duration: 2, easeOut }}
        className=" capitalize text-[40px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-primary
         font-bold text-orange text-center selection:text-white "
      >
        hi.Welcome
      </motion.h2>
      <motion.h3
      ref={ref}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: -20 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.5, duration: 0.8, easeInOut }}
        className=" text-[25px] lg:text-[30px] xl:text-[35px] text-white font-primary font-light text-center selection:text-orange mt-[20px] "
      >
        I'm Fahad Iqbal
      </motion.h3>
      <div className=" flex justify-center mt-[20px] select-none ">
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
