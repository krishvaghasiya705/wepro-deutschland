import React, { useState } from "react";
import styles from "./Gmbhherosection.module.scss";
import Link from "next/link";
import Checkicon from "@/assets/icons/Checkicon";

export default function Gmbhherosection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 7 ? prevStep + 1 : prevStep));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      {!isSubmitted ? (
        <div className={styles.Gmbhherosectionmain}>
          <div className={styles.Gmbhherosection}>
            <div className={styles.Gmbhherosectionboxmain}>
              <div className={styles.GmbhTitle}>
                <h1>WePro Deutschland GmbH</h1>
                <div className={styles.GmbhNumbers}>
                  <span>{currentStep}/7</span>
                </div>
              </div>
              {currentStep === 1 && (
                <div className={styles.Gmbhherosectionsmallboxesmain}>
                  <div className={styles.GmbhInputaligment}>
                    <input type="text" placeholder="Straße" />
                    <div className={styles.GmbhNrinput}>
                      <input type="text" placeholder="Nr." />
                    </div>
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Weiter</p>
                  </div>
                  <div className={styles.Gmbhherosectionsmallboxslidermain}>
                    <div className={styles.Gmbhherosectionsmallboxslider}></div>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className={styles.Gmbhherosectionsmallboxesmain}>
                  <div className={styles.GmbhInputaligmentsec}>
                    <input type="text" placeholder="Ort" />
                    <div className={styles.GmbhNrinput}>
                      <input type="text" placeholder="PLZ" />
                    </div>
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Weiter</p>
                  </div>
                  <div className={styles.Gmbhherosectionsmallboxslidermain}>
                    <div className={styles.Gmbhherosectionsmallboxslider}></div>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className={styles.Gmbhherosectionsmallboxesmain}>
                  <div className={styles.GmbhInputaligmentthird}>
                    <input type="tel" placeholder="Telefon" />
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Weiter</p>
                  </div>
                  <div className={styles.Gmbhherosectionsmallboxslidermain}>
                    <div className={styles.Gmbhherosectionsmallboxslider}></div>
                  </div>
                </div>
              )}
              {currentStep === 4 && (
                <div className={styles.Gmbhherosectionsmallboxesmain}>
                  <div className={styles.GmbhInputaligmentthird}>
                    <input type="email" placeholder="E-Mail" />
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Weiter</p>
                  </div>
                  <div className={styles.Gmbhherosectionsmallboxslidermain}>
                    <div className={styles.Gmbhherosectionsmallboxslider}></div>
                  </div>
                </div>
              )}
              {currentStep === 5 && (
                <div className={styles.Gmbhherosectionsmallboxesmain}>
                  <div className={styles.GmbhInputaligmentthird}>
                    <input type="text" placeholder="Stromverbrauch" />
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Weiter</p>
                  </div>
                  <div className={styles.Gmbhherosectionsmallboxslidermain}>
                    <div className={styles.Gmbhherosectionsmallboxslider}></div>
                  </div>
                </div>
              )}
              {currentStep === 6 && (
                <div className={styles.Gmbhsixth}>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Satteldach</p>
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Flachdach</p>
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Walmdach</p>
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Pultdach</p>
                  </div>
                  <div
                    className={styles.Gmbhherosectionsmallbox}
                    onClick={handleNextStep}
                  >
                    <p>Anderes</p>
                  </div>
                </div>
              )}
              {currentStep === 7 && (
                <div className={styles.Gmbhherosectionsmallboxesmain}>
                  <div className={styles.GmbhInputaligmenteightmain}>
                    <input type="text" placeholder="Vor-und Nachname" />
                    <div
                      className={styles.Gmbhherosectionsmallbox}
                      onClick={handleSubmit}
                    >
                      <p>Anfrage absenden</p>
                    </div>
                  </div>
                  <div className={styles.Gmbhherosectionsmallboxslidermain}>
                    <div className={styles.Gmbhherosectionsmallboxslider}></div>
                  </div>
                  <div className={styles.GmbhCheckboxmain}>
                    <input type="checkbox" />
                    <p>
                      Mit dem Absenden meiner Anfrage akzeptiere ich die AGB
                      und, dass ich die Datenschutzerklärung zur Kenntnis
                      genommen habe.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.Gmbhherosectionsucessmain}>
          <div className={styles.Gmbhsucesscontainer}>
            <div className={styles.GmbhSucesstitle}>
              <div className={styles.GmbhSucessTrueicon}>
                <Checkicon />
              </div>
              <h1>Vielen Dank für Ihre Anfrage!</h1>
            </div>
            <div className={styles.GmbhSucessPeramain}>
              <p>
                Vielen Dank - wir haben Ihre Anfrage für eine kostenlose und
                unverbindliche Photovoltaik-Beratung erhalten.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
