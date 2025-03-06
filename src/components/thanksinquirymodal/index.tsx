import React from "react";
import styles from "./Thanksinquirymodal.module.scss";
import Checkicon from "@/assets/icons/Checkicon";
import Link from "next/link";

export default function Thanksinquirymodal() {
  return (
    <div className={styles.Thanksinquirymodalmain}>
      <div className={styles.Thanksinquirymodalcontainer}>
        <div className={styles.Thanksinquirymodaltitle}>
          <div className={styles.Thanksinquirymodaltitletrueicon}>
            <Checkicon />
          </div>
          <h1>Vielen Dank für Ihre Anfrage!</h1>
        </div>
        <div className={styles.Thanksinquirymodalpera}>
          <p>
            <span>Vielen Dank</span> - wir haben Ihre Anfrage für eine
            kostenlose und unverbindliche Photovoltaik-Beratung erhalten.
          </p>
        </div>
        <Link href={"/howoffer"}>
          <button className={styles.Thanksinquirymodalbutton}>
            Angebots-Score ermitteln
          </button>
        </Link>
      </div>
    </div>
  );
}
