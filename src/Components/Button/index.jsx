import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./style.module.css"

const Button = ({ title, arrow, bg }) => {
  return (
    <button className={styles.button}>
      {title} {arrow && <AiOutlineArrowRight />}
    </button>
  );
};
export default Button;
