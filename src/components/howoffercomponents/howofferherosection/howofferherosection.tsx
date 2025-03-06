import React, { useState } from "react";
import styles from "./Howofferherosection.module.scss";
import Slider from "@/components/slider";
import Link from "next/link";

export default function Howofferherosection() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = (step: number) => {
    setCurrentStep(step);
  };
  return (
    <>
      {currentStep === 1 && (
        <div className={styles.Howofferherosectionmain}>
          <div className={styles.Howofferherosectioncontainer}>
            <div className={styles.Howofferherosectiontitle}>
              <h1>Dateneingabe</h1>
              <p>Wie hoch ist Ihr Angebot</p>
            </div>
            <div className={styles.inputalignment}>
              <input type="number" placeholder="€" />
            </div>
            <div className={styles.weiterbuttonmain}>
              <button
                type="button"
                className={styles.weiterbutton}
                onClick={() => handleNextStep(2)}
              >
                Weiter
              </button>
              <div className={styles.Gmbhherosectionsmallboxslidermain}>
                <div className={styles.Gmbhherosectionsmallboxslider}></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className={styles.Howofferherosectionmain}>
          <div className={styles.Howofferherosectioncontainer}>
            <div className={styles.Howofferherosectiontitle}>
              <h1>Dateneingabe</h1>
              <p>Beeinhaltet Ihr Angebot eine deutsche Garantie?</p>
            </div>
            <div className={styles.yesnobuttonsmain}>
              <button
                type="button"
                className={styles.weiterbutton}
                onClick={() => handleNextStep(3)}
              >
                Ja
              </button>
              <button
                type="button"
                className={styles.weiterbutton}
                onClick={() => handleNextStep(3)}
              >
                Nein
              </button>
              <button
                type="button"
                className={styles.weiterbutton}
                onClick={() => handleNextStep(3)}
              >
                Unklar
              </button>
              <div className={styles.Gmbhherosectionsmallboxslidermain}>
                <div className={styles.Gmbhherosectionsmallboxslider}></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className={styles.Howofferherosectionmain}>
          <div className={styles.Howofferherosectioncontainer}>
            <div className={styles.Howofferherosectiontitle}>
              <h1>Dateneingabe</h1>
              <p>Laufzeit der Garantie</p>
            </div>
            <div className={styles.sliderandcontent}>
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
            </div>
            <div className={styles.weiterbuttonmain}>
              <button
                type="button"
                className={styles.weiterbutton}
                onClick={() => handleNextStep(4)}
              >
                Weiter
              </button>
              <div className={styles.Gmbhherosectionsmallboxslidermain}>
                <div className={styles.Gmbhherosectionsmallboxslider}></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className={styles.Howofferherosectionmainsc}>
          <div className={styles.Howofferherosectioncontainer}>
            <div className={styles.Howofferherosectiontitle}>
              <h1>Dateneingabe</h1>
              <p>Wählen Sie Ihre Produkthersteller aus</p>
            </div>
            <div className={styles.inputalignmentsc}>
              <input type="text" placeholder="Module" />
              <input type="text" placeholder="Speicher" />
              <input type="text" placeholder="Wechselrichter" />
              <input type="text" placeholder="Wechselrichter" />
            </div>
            <div className={styles.weiterbuttonmain}>
              <Link href={"/detailscore"}>
                <button
                  type="button"
                  className={styles.weiterbutton}
                  onClick={() => handleNextStep(5)}
                >
                  Weiter
                </button>
              </Link>
              <div className={styles.Gmbhherosectionsmallboxslidermain}>
                <div className={styles.Gmbhherosectionsmallboxslider}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
