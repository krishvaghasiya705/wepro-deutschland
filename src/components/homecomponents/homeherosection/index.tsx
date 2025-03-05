import React from "react";
import styles from "./Homeherosection.module.scss";
import Link from "next/link";

export default function Homeherosection() {
  return (
    <div className={styles.Homeherosectionmain}>
      <div className={styles.Homeherosection}>
        <div className={styles.Homeherosectionboxmain}>
          <h1>
            Mache <span>deinen</span> Photovoltaik <span>Vergleichs-check</span>
          </h1>
          <div className={styles.HomeherosectionboxsmallTexts}>
            <p>und spare im Ø 7.000€</p>
            <p>und spare im Ø 7.000€</p>
          </div>
          <div className={styles.Homeherosectionsmallboxesmain}>
            <Link href="/angebot">
              <div className={styles.Homeherosectionsmallbox}>
                <p>Ich habe bereits ein Angebot.</p>
              </div>
            </Link>
            <Link href="/gmbhmain">
              <div className={styles.Homeherosectionsmallbox}>
                <p>Ich möchte gerne drei unabhängige Angebote erhalten.</p>
              </div>
            </Link>
            <div className={styles.Homeherosectionsmallboxslidermain}>
              <div className={styles.Homeherosectionsmallboxslider}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
