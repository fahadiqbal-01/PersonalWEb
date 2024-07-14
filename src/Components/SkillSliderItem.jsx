import React from "react";
import { FaHtml5 } from "react-icons/fa";

const SkillSliderItem = ({icon, name}) => {
  return (
    <div className=" flex flex-col gap-[15px] items-center py-[25px] ">
      <h2 className=" text-[15px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[25px] font-primary font-extralight tracking-tight ">{name}</h2>
      <div className="text-[35px] ">{icon}</div>
    </div>
  );
};

export default SkillSliderItem;
