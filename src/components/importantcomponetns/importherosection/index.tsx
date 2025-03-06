import React from "react";
import styles from "./Importherosection.module.scss";
import Link from "next/link";

export default function Importherosection() {
  return (
    <div className={styles.DateneingabeherosectionVerkasse}>
      <div className="container">
        <div className={styles.DateneingabeherosectionVerkassetitle}>
          <h1>Dateneingabe</h1>
          <p>Das ist mir besonders wichtig:</p>
        </div>
        <div className={styles.DateneingabeherosectionVerkassebuttonsmain}>
          <div className={styles.DateneingabeherosectionVerkassecheckboxmain}>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Regionalität</p>
            </div>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Preis/-Leistung</p>
            </div>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Deutsche Produkte</p>
            </div>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Garantieleistungen</p>
            </div>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Faire Zahlungsmodalitäten</p>
            </div>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Schnelle Abwicklung</p>
            </div>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Garantierte Fertigstellung</p>
            </div>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Smarte Anbindung (technisch)</p>
            </div>
            <div
              className={
                styles.DateneingabeherosectionVerkassecheckboxalignment
              }
            >
              <Link href={"/receivesoffers"}>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxdivmain
                  }
                >
                  <input type="checkbox" />
                </div>
              </Link>
              <p>Alles aus einer Hand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
