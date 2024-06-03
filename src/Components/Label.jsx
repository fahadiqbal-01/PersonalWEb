import React from "react";

const Label = ({ label, className }) => {
  return <label className={` text-[16px] font-primary font-normal text-orange ${className} `}>{label}</label>;
};

export default Label;
