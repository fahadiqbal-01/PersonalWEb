import React from "react";

const Flex = ({ children, className, id }) => {
  return <div id={id} className={`flex ${className}`}>{children}</div>;
};

export default Flex;
