import React from "react";

const Whatidoitems = ({ icon, title, summary, className }) => {
  return (
    <>
      {" "}
      <div className={` rounded-xl w-full xl:w-[24.5%] py-[15px] px-[20px] mt-[20px] selection:text-white ${className}  `}>
        <h2 className=" text-[20px] font-medium font-primary text-black flex justify-start items-center gap-[15px] ">
          <span>{icon}</span> {title}
        </h2>
        <p className=" text-[17px] font-primary font-normal text-black mt-[20px] ">
          {summary}
        </p>
      </div>
    </>
  );
};

export default Whatidoitems;
