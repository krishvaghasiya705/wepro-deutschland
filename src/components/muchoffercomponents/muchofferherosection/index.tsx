import React, { useState } from "react";
import styles from "./Muchofferherosection.module.scss";
import Slider from "@/components/slider";
import Link from "next/link";
import CommonDropdown from "@/components/commondropdown";

export default function Muchofferherosection() {
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
                onClick={() => handleNextStep(4)}
              >
                Nein
              </button>
              <button
                type="button"
                className={styles.weiterbutton}
                onClick={() => handleNextStep(4)}
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
        <div className={styles.Howofferherosectionmain}>
          <div className={styles.Howofferherosectioncontainer}>
            <div className={styles.Howofferherosectiontitle}>
              <h1>Dateneingabe</h1>
              <p>Wie groß ist die geplante Anlage?</p>
            </div>
            <div className={styles.sliderandcontent}>
              <h2>10kWp</h2>
              <div className={styles.slidedivandcontentmain}>
                <div className={styles.slidedivmain}>
                  <Slider />
                </div>
                <div className={styles.slidecontent}>
                  <span>mind. 3,2kWp</span>
                  <span>über 20kWp</span>
                </div>
              </div>
            </div>
            <div className={styles.weiterbuttonmain}>
              <button
                type="button"
                className={styles.weiterbutton}
                onClick={() => handleNextStep(5)}
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
      {currentStep === 5 && (
        <div className={styles.DateneingabeherosectionVerkasse}>
          <div className="container">
            <div className={styles.DateneingabeherosectionVerkassetitle}>
              <h1>Dateneingabe</h1>
              <p>Das ist beim Angebot inbegriffen</p>
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
                  <p>Gerüst</p>
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
                  <p>zusätzlicher Zählerschrank (kostenlos)</p>
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
                  <p>zusätzlicher Zählerschrank (Aufpreis)</p>
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
                  <p>Anmedlung beim Netzbetreiber)</p>
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
                  <p>in Betriebnahme</p>
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
                  <p>Wartung</p>
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
                  <p>Netzersatz/ Notstrom</p>
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
                  <p>Smarte Steuerung </p>
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
                  <p>Wärmebildanalyse</p>
                </div>
              </div>
            </div>
            <div className={styles.weiterbuttonmain}>
              <button
                type="button"
                className={styles.weiterbutton}
                onClick={() => handleNextStep(6)}
              >
                Weiter
              </button>
            </div>
          </div>
        </div>
      )}
      {currentStep === 6 && (
        <div className={styles.Howofferherosectionmainsc}>
          <div className={styles.Howofferherosectioncontainer}>
            <div className={styles.Howofferherosectiontitle}>
              <h1>Dateneingabe</h1>
              <p>Wählen Sie Ihre Produkthersteller aus</p>
            </div>
            <div className={styles.inputalignmentsc}>
              <CommonDropdown
                title="Module"
                options={[
                  "Bauer Solar Glas-Folie 400Wp Bauer ",
                  "Solar Glas-Glas 400Wp",
                  "AE Solar Glas-Glas 400Wp",
                  "AE Solar Glas-Folie 400Wp",
                  "Jolywood 400Wp",
                  "Risen Titan S 400Wp",
                  "SOLARWATT 400Wp SolarFabrik ",
                  "405Wp / SolarFabrik 420Wp",
                  "SonnenstromFabrik Glas-Folie 400Wp ",
                  "SonnenstromFabrik Glas-Glas 400Wp",
                  "JinkoSolar TOPCon 410Wp",
                  "JinkoSolar PERC 400Wp",
                  "JA Solar 405Wp",
                  "JA Solar Glas-Glas 410Wp",
                  "SENEC Solar 405Wp Astronergy 400Wp ",
                  "Vitovolt 300 400Wp",
                  "AXITEC 415Wp Solyco 420Wp",
                  "Andere",
                ]}
              />
              <CommonDropdown
                title="Speicher"
                options={[
                  "KEIN SPEICHER",
                  "BYD 5,12kWh",
                  "BYD 7,68kWh",
                  "BYD 10,24kWh",
                  "BYD 12,8kWh",
                  "E3/DC 6,5kWh",
                  "E3/DC 10,0kWh",
                  "E3/DC 13,0kWh",
                  "E3/DC 15,0kWh",
                  "E3/DC 19,5kWh",
                  "Varta 6,5kWh",
                  "Varta 13,0kWh",
                  "Varta 19,5kWh",
                  "Sonnen 5,5kWh",
                  "Sonnen 11,0kWh",
                  "/ Sonnen 22,0kWh",
                  "Alpha ESS 8,2kWh",
                  "Alpha ESS 16,4kWh",
                  "Alpha ESS 24,6kWh",
                  "SENEC 2,5kWh",
                  "SENEC 5,0kWh",
                  "SENEC 7,5kWh",
                  "SENEC 10,0kWh",
                  "Growatt ARK 5, 12kWh",
                  "Growatt ARK 7,68kWh",
                  "Growatt ARK 10,24kWh",
                  "Growatt ARK 12,8kWh",
                  "Growatt ARK 15,36kWh",
                  "Growatt ARK 17,92kWh",
                  "Growatt ARK 20,48kWh",
                  "Growatt ARK 23,04kWh",
                  "Growatt ARK 25,6kWh",
                  "SENEC.Home 4 4,2kWh",
                  "SENEC. Home 4 8,4kWh",
                  "SENEC.Home 4 12,6kWh",
                  "SENEC.Home 4 16,8kWh",
                  "SENEC. Home 4 21,0kWh",
                  "SENEC. Home 4 25,2kWh",
                  "Huawei 5,0kWh",
                  "Huawei 10,0kWh",
                  "Huawei 15,0kWh",
                  "Huawei 20,0kWh",
                  "Enphase 3,5kWh",
                  "Enphase 7,0kWh",
                  "Enphase 10,5kWh",
                  "Ampere.Storage. Pro 6,0kWh",
                  "Ampere.Storage.Pro 8,0kWh",
                  "Ampere.Storage. Pro 12,0kWh",
                  "Ampere.Storage. Pro 16,0kWh",
                  "Ampere.Storage.Pro 20,0kWh",
                  "Tesla 14kWh",
                  "SunGrow",
                  "Andere",
                ]}
              />
              <CommonDropdown
                title="Wechselrichter"
                options={[
                  "SMA Solar Technology AG",
                  "Fronius International GmbH",
                  "Huawei Technologies Co., Ltd.",
                  "SolarEdge Technologies, Inc.",
                  "ABB Group",
                  "Enphase Energy, Inc.",
                  "Sungrow Power Supply Co., Ltd.",
                  "GoodWe Power Supply Technology Co., Ltd.",
                  "Delta Electronics, Inc.",
                  "KACO new energy GmbH",
                  "Solar SAJ R5",
                  "Andere",
                ]}
              />
              <CommonDropdown
                title="Wallbox"
                options={[
                  "KEINE WALLBOX",
                  "ABB",
                  "Tesla",
                  "Huawei",
                  "GO-E",
                  "Heidelberg Amperfied",
                  "MyEnergie",
                  "Schneider Electric",
                  "EVBox",
                  "Juice Technology",
                  "Webasto",
                  "Siemens",
                  "Ensto",
                  "KEBA",
                  "Garo",
                  "Wallbe",
                  "BMW",
                  "Porsche",
                  "Mercedes-Benz",
                  "VW",
                  "Andere",
                ]}
              />
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
