import React from "react";
import styles from "./Detailscroreherosection.module.scss";
import graphimage from "@/assets/image/graphimage.png"
import Image from "next/image";

export default function Detailscroreherosection() {
  return (
    <div className={styles.Detailscroreherosectionmain}>
      <div className={styles.Detailscroreherosectioncontainer}>
        <div className={styles.Detailscroreherosectiontitle}>
          <h1>Detail-Score</h1>
          <p>
            Ihr Angebot ist erhält einen <span>guten</span> Score
          </p>
        </div>
        <div className={styles.Graphimagemain}>
            <Image src={graphimage} alt="graphimage" width={1000} height={1000} />
        </div>
        <div className={styles.Detailscroreherosectionbutton}>
          <button type="button">Ergebnis Download</button>
        </div>
      </div>
    </div>
  );
}
