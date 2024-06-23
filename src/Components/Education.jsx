import React from "react";
import Title from "./Title";
import EducationCard from "./EducationCard";
import Flex from "./Flex";

const Education = () => {
  return (
    <div className="bg-[#252525] my-[70px] px-[25px] py-[40px] rounded-xl select-none">
      <Title title="Education" />
      <Flex className=" mt-[35px] flex-col xl:flex-row justify-between items-start ">
        <EducationCard institute="Creative IT Institute" field="Field of study - Front-end Development " status="Status - on-going" />
        <EducationCard institute="Barisal Polytechnic Institute" field="Field of study - Diploma in Engineering" status="Status - on-going" className=" mt-[20px] xl:mt-0 " />
        <EducationCard institute="Udayan High School, Barishal" certification="Certification - SSC" grade="Grade - 4.89" className=" mt-[20px] xl:mt-0 " />
      </Flex>
    </div>
  );
};

export default Education;
