import React from "react";
import styles from "./Reciveofferherosection.module.scss";
import Link from "next/link";

export default function Reciveofferherosection() {
  return (
    <div className={styles.DateneingabeherosectionVerkassesecmain}>
      <h1>Wer soll die Angebote erhalten?</h1>
      <div className={styles.DateneingabeherosectionVerkassesec}>
        <div className={styles.GmbhInputaligment}>
          <input type="text" placeholder="Vor-und Nachname" />
          <input type="text" placeholder="E-Mail" />
          <input type="text" placeholder="Telefon" />
        </div>
        <Link href={"/thanksinquiry"}>
          <div className={styles.Gmbhherosectionsmallbox}>
            <p>Weiter</p>
          </div>
        </Link>
        <div className={styles.Gmbhherosectionsmallboxslidermain}>
          <div className={styles.Gmbhherosectionsmallboxslider}></div>
        </div>
        <div className={styles.GmbhCheckboxmain}>
          <input type="checkbox" />
          <p>
            Mit dem Absenden meiner Anfrage akzeptiere ich die AGB und, dass ich
            die Datenschutzerklärung zur Kenntnis genommen habe.
          </p>
        </div>
      </div>
    </div>
  );
}
