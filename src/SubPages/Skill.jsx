import React from "react";
import Education from "../Components/Education";
import SkillSLider from "../Components/SkillSLider";


const Skill = () => {
  return (
    <div id="Skills" className=" h-fit xl:h-[100vh] text-white pt-[10px] sm:pt-[20px] md:pt-[30px] lg:pt-[50px] xl:pt-[100px] ">
      <SkillSLider />
      <Education />
    </div>
  );
};

export default Skill;
