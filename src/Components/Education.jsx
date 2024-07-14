import React, { useEffect, useRef } from "react";
import Title from "./Title";
import EducationCard from "./EducationCard";
import Flex from "./Flex";
import { delay, motion, useAnimation, useInView } from "framer-motion";

const Education = () => {
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
      transition={{ duration: 0.5, delay:.25, type: "tween" }}

      className="bg-transparent my-[70px] px-[25px] py-[40px] rounded-xl select-none border-[2px] border-[#252525] "
    >
      <Title title="Education" />
      <Flex className=" mt-[35px] flex-col xl:flex-row justify-between items-start ">
        <EducationCard
          institute="Creative IT Institute"
          field="Field of study - Front-end Development "
          status="Status - on-going"
        />
        <EducationCard
          institute="Barisal Polytechnic Institute"
          field="Field of study - Diploma in Engineering"
          status="Status - on-going"
          className=" mt-[20px] xl:mt-0 "
        />
        <EducationCard
          institute="Udayan High School, Barishal"
          certification="Certification - SSC"
          grade="Grade - 4.89"
          className=" mt-[20px] xl:mt-0 "
        />
      </Flex>
    </motion.div>
  );
};

export default Education;
