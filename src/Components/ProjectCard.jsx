import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ProjectCard = ({ description, src, alt }) => {
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
        hidden: {opacity: 0, scale: 0.5 },
        visible: {opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.8,
        easeInOut,
      }}
      className="max-w-sm bg-transparent border border-[#252525] rounded-lg shadow w-[48%] lg:w-[30%] xl:w-full "
    >
      <a href="#">
        <img className="rounded-t-lg" src={src} alt={alt} />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          LIVE
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
