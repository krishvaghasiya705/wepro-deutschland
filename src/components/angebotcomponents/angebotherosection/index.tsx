import React from "react";
import styles from "./Angebotherosection.module.scss";
import Link from "next/link";

interface AngeherosectionProps {
  Title: React.ReactNode;
  Smallpera: string;
  Cardtext1: React.ReactNode;
  CardText2: string;
  CardText1link: string;
  CardText2link: string;
}

export default function Angeherosection({
  Title = "Default Title",
  Smallpera = "Default Smallpera",
  Cardtext1 = "Default Cardtext1",
  CardText2 = "Default CardText2",
  CardText1link = "/",
  CardText2link = "/",
}: AngeherosectionProps) {
  return (
    <div className={styles.Angeherosectionmain}>
      <div className={styles.Angeherosection}>
        <div className={styles.Angeherosectionboxmain}>
          <h1>{Title}</h1>
          <div className={styles.AngeherosectionboxsmallTexts}>
            <p>{Smallpera}</p>
          </div>
          <div className={styles.Angeherosectionsmallboxesmain}>
            <Link href={CardText1link}>
              <div className={styles.Angeherosectionsmallboxfirst}>
                <p>{Cardtext1}</p>
              </div>
            </Link>
            <Link href={CardText2link}>
              <div className={styles.Angeherosectionsmallboxsecond}>
                <p>{CardText2}</p>
              </div>
            </Link>
            <div className={styles.Angeherosectionsmallboxslidermain}>
              <div className={styles.Angeherosectionsmallboxslider}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
