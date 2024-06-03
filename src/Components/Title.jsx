import React from "react";

const Title = ({ title, className }) => {
  return (
    <div>
      <h2
        className={`text-[24px] font-medium font-primary text-white ${className}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default Title;
