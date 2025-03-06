import React from "react";
import styles from "./Receiveoffersherosection.module.scss";
import Link from "next/link";

export default function Receiveoffersherosection() {
  return (
    <div className={styles.Receiveoffersherosectionmain}>
      <div className={styles.Receiveoffersherosectiontitle}>
        <h1>Wer soll die Angebote erhalten?</h1>
      </div>
      <div className={styles.Gmbhherosectionsmallboxesmain}>
        <div className={styles.GmbhInputaligment}>
          <input type="text" placeholder="Vor-und Nachname" />
          <input type="email" placeholder="E-Mail" />
          <input type="tel" placeholder="Telefon" />
        </div>
        <div className={styles.GmbhCheckboxmain}>
          <input type="checkbox" />
          <p>
            Mit dem Absenden meiner Anfrage akzeptiere ich die AGB und, dass ich
            die Datenschutzerklärung zur Kenntnis genommen habe.
          </p>
        </div>
        <Link href={"/thanksinquirypage"}>
          <div className={styles.Gmbhherosectionsmallbox}>
            <p>Anfrage absenden</p>
          </div>
        </Link>
        <div className={styles.Gmbhherosectionsmallboxslidermain}>
          <div className={styles.Gmbhherosectionsmallboxslider}></div>
        </div>
      </div>
    </div>
  );
}
