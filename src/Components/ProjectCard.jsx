import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ProjectCard = ({
  description,
  src,
  alt,
  projectCartTitle,
  projectDescription,
  link,
}) => {
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
          className="rounded-t-lg xl:ml-[350px] lg:ml-[140px] md:ml-[150px] sm:ml-[140px] ml-[180px] grayscale-[100%] hover:ml-0 hover:grayscale-0
           duration-300 ease-linear z-50 group pointer-events-auto select-none "
          src={src}
          alt={alt}
        ></img>
        <div className=" absolute left-4 top-4 z-auto w-[45%] ">
          <h2 className=" xl:text-[20px] font-mono font-medium scale-1 group-hover:text-transparent group-hover:scale-0 duration-200 ease-in-out w-[90%] ">
            {projectCartTitle}...
          </h2>
        </div>
      </div>

      <div className="p-5 pointer-events-auto ">
        <a
          href={link}
          target="blank"
          className=" px-[10px] py-[3px] border-[1px] text-yellow border-yellow rounded-[4px] cursor-pointer select-none"
        >
          LIVE
        </a>
        <p className="scale-1 group-hover:text-transparent group-hover:scale-0 duration-200 ease-in-out mt-[15px] pointer-events-none ">
          {projectDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
