import React from "react";
import styles from "./style.module.css";
import Button  from "../Button"
const Banner = () => {
  return (
    <div className={styles.Banner}>
      <div className="Container">
        <div className="row">
          <div className="col-12 col-md-8 col-xl-5">
            <h2 className={styles.title}>Let Your Home Be Unique</h2>
            <p className={styles.description}>
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority.
            </p>
            <Button title="Send now" arrow={true} bg="dark"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
