import React, { useState } from "react";
import styles from "./Dateneingabeherosection.module.scss";
import Slider from "@/components/slider";
import Link from "next/link";

export default function Dateneingabeherosection() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <>
      {currentStep === 1 && (
        <div className={styles.Dateneingabeherosection}>
          <div className="container">
            <div className={styles.Dateneingabeherosectioncontentmain}>
              <div className={styles.Dateneingabeherosectioncontenttop}>
                <h1>Dateneingabe</h1>
                <p>Wie viele Module sind vorgesehen?</p>
              </div>
              <div className={styles.Dateneingabeherosectioncontentbottom}>
                <h2>13 Module</h2>
                <div className={styles.slidedivandcontentmain}>
                  <div className={styles.slidedivmain}>
                    <Slider />
                  </div>
                  <div className={styles.slidecontent}>
                    <span>mind. 8 Module</span>
                    <span>über 40 Module</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.Weiterbutton}
                  title="open step 2"
                  onClick={() => handleNextStep(2)}
                >
                  Weiter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className={styles.Dateneingabeherosection}>
          <div className="container">
            <div className={styles.Dateneingabeherosectioncontentmain}>
              <div className={styles.Dateneingabeherosectioncontenttop}>
                <h1>Dateneingabe</h1>
                <p>Wie viele Module sind vorgesehen?</p>
              </div>
              <div className={styles.Dateneingabeherosectioncontentbottom}>
                <h2>7 kWh</h2>
                <div className={styles.slidedivandcontentmain}>
                  <div className={styles.slidedivmain}>
                    <Slider />
                  </div>
                  <div className={styles.slidecontent}>
                    <span>mind. 5 kWh</span>
                    <span>über 20 kWh</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.Weiterbutton}
                  title="open step 3"
                  onClick={() => handleNextStep(3)}
                >
                  Weiter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className={styles.Dateneingabeherosection}>
          <div className="container">
            <div className={styles.Dateneingabeherosectioncontentmain}>
              <div className={styles.Dateneingabeherosectioncontenttop}>
                <h1>Dateneingabe</h1>
                <p>Wie viele Module sind vorgesehen?</p>
              </div>
              <div className={styles.Dateneingabeherosectioncontentbottom}>
                <h2>7 Jahre</h2>
                <div className={styles.slidedivandcontentmain}>
                  <div className={styles.slidedivmain}>
                    <Slider />
                  </div>
                  <div className={styles.slidecontent}>
                    <span>mind. 5 Jahre</span>
                    <span>über 25 Jahre</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.Weiterbutton}
                  title="open step 4"
                  onClick={() => handleNextStep(4)}
                >
                  Weiter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className={styles.DateneingabeherosectionVerkasse}>
          <div className="container">
            <div className={styles.DateneingabeherosectionVerkassetitle}>
              <h1>Dateneingabe</h1>
              <p>
                Wie sind die Zahlungsmodaltitäten im aktuellen Angebot Vorkasse
              </p>
            </div>
            <div className={styles.DateneingabeherosectionVerkassebuttonsmain}>
              <button
                type="button"
                className={styles.JaAndNeinbutton}
                title="open step 5"
                onClick={() => handleNextStep(5)}
              >
                Ja
              </button>
              <button
                type="button"
                className={styles.JaAndNeinbutton}
                title="open step 6"
                onClick={() => handleNextStep(6)}
              >
                Nein
              </button>
            </div>
          </div>
        </div>
      )}

      {currentStep === 5 && (
        <div className={styles.DateneingabeherosectionVerkasse}>
          <div className="container">
            <div className={styles.DateneingabeherosectionVerkassetitle}>
              <h1>Dateneingabe</h1>
              <p>
                Wie sind die Zahlungsmodaltitäten im aktuellen Angebot Vorkasse
              </p>
            </div>
            <div className={styles.DateneingabeherosectionVerkassebuttonsmain}>
              <button type="button" className={styles.JaAndNeinbutton}>
                Es stört mich
              </button>
              <button type="button" className={styles.JaAndNeinbutton}>
                Es stört mich nicht
              </button>
            </div>
          </div>
        </div>
      )}

      {currentStep === 6 && (
        <div className={styles.DateneingabeherosectionVerkasse}>
          <div className="container">
            <div className={styles.DateneingabeherosectionVerkassetitle}>
              <h1>Dateneingabe</h1>
              <p>Ist eine Wallbox im bisherigen Angebot enthalten?</p>
            </div>
            <div className={styles.DateneingabeherosectionVerkassebuttonsmain}>
              <button type="button" className={styles.JaAndNeinbutton}>
                Ja
              </button>
              <button type="button" className={styles.JaAndNeinbutton}>
                Nein
              </button>
              <button
                type="button"
                className={styles.JaAndNeinbutton}
                onClick={() => handleNextStep(7)}
              >
                Nein, aber erwünscht
              </button>
            </div>
          </div>
        </div>
      )}

      {currentStep === 7 && (
        <div className={styles.DateneingabeherosectionVerkasse}>
          <div className="container">
            <div className={styles.DateneingabeherosectionVerkassetitle}>
              <h1>Dateneingabe</h1>
              <p>Das ist mir besonders wichtig:</p>
            </div>
            <div className={styles.DateneingabeherosectionVerkassebuttonsmain}>
              <div
                className={styles.DateneingabeherosectionVerkassecheckboxmain}
              >
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Regionalität</p>
                </div>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Preis/-Leistung</p>
                </div>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Deutsche Produkte</p>
                </div>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Garantieleistungen</p>
                </div>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Faire Zahlungsmodalitäten</p>
                </div>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Schnelle Abwicklung</p>
                </div>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Garantierte Fertigstellung</p>
                </div>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Smarte Anbindung (technisch)</p>
                </div>
                <div
                  className={
                    styles.DateneingabeherosectionVerkassecheckboxalignment
                  }
                >
                  <div
                    className={
                      styles.DateneingabeherosectionVerkassecheckboxdivmain
                    }
                  >
                    <input type="checkbox" />
                  </div>
                  <p>Alles aus einer Hand</p>
                </div>
              </div>
              <Link href={"/receiveoffer"}>
                <button
                  type="button"
                  className={styles.JaAndNeinbutton}
                  onClick={() => handleNextStep(8)}
                >
                  Weiter
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
