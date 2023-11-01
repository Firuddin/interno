import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ title, arrow, bg }) => {
  return (
    <button>
      {title} {arrow && <AiOutlineArrowRight />}
    </button>
  );
};
export default Button;
