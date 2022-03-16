import React from "react";
import "./button.css";
const index = ({ buttonText, onClick, prefix, customClass }) => {
  return (
    <div
      className={`button-wrapper flex absolute-center ${customClass}`}
      onClick={onClick}
    >
      {prefix}
      {buttonText}
    </div>
  );
};

export default index;
