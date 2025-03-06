import React from "react";
import styles from "./Slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.slidedivbg}>
      <div className={styles.slidedivbgfilled}></div>
      <div className={styles.slidedivbgfilleddot}></div>
    </div>
  );
}
