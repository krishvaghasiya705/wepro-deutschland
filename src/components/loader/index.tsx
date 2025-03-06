import React from "react";
import styles from "./Loader.module.scss";
import Loadericon from "@/assets/icons/loadericon";

export default function Loader() {
  return (
    <div className={styles.Loadermain}>
      <div className={styles.Loader}>
        <Loadericon />
      </div>
    </div>
  );
}
