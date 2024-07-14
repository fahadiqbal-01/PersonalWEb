import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ProjectCard = ({ description, src, alt, projectCartTitle, projectDescription }) => {
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
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.8,
        easeInOut,
      }}
      className="bg-transparent border border-[#252525] rounded-lg shadow w-full sm:w-[45%] lg:w-[30%] xl:w-[45%] overflow-hidden pointer-events-none "
    >
      <div className=" relative group ">
         <img
        className="rounded-t-lg ml-[350px] grayscale-[100%] hover:ml-0 hover:grayscale-0 duration-300 ease-linear z-50 group pointer-events-auto "
        src={src}
        alt={alt}
      ></img>
      <div className=" absolute left-4 top-4 z-auto group-hover:text-transparent duration-200 ease-in-out w-[45%] ">
        <h2>{projectCartTitle}</h2>
        <p>{projectDescription}</p>
      </div>
      </div>
     
      <div className="p-5">
        <a
          href="#"
          className=" px-[10px] py-[3px] border-[1px] border-gray-400 rounded-[4px] "
        >
          LIVE
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
