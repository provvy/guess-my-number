import React from "react";

const Message = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default Message;
