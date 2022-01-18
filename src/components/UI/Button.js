import React from "react";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.version} ${props.disabled && "disabled"}`}
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
