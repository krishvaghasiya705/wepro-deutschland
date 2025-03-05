import React, { useState } from "react";
import styles from "./Angebothochladenherosection.module.scss";
import Link from "next/link";
import Uploadicon from "@/assets/icons/uploadicon";
import Cameraicon from "@/assets/icons/cameraicon";
import Commonmodal from "@/components/modal/commonmodal";
import Angetbotuploadimagcomponent from "../angetbotuploadimagecomponent";

export default function Angebothochladenherosection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.Angebothochladenherosectionmain}>
        <div className={styles.Angebothochladenherosection}>
          <div className={styles.Angebothochladenherosectionboxmain}>
            <h1>
              <span>Angebote hochladen</span>
            </h1>
            <div className={styles.AngebothochladenherosectionboxsmallTexts}>
              <p>
                lade dein <span>aktuelles Angebot</span> hoch und erhalte{" "}
                <span>Vergleichsangebote</span>
              </p>
            </div>
            <div className={styles.Angebothochladenherosectionsmallboxesmain}>
              <Link href="/hochladen">
                <div className={styles.Angebothochladenherosectionsmallbox}>
                  <p>Angebote hochladen</p>
                  <div
                    className={styles.Angebothochladenherosectionsmallboxicon}
                  >
                    <Uploadicon />
                  </div>
                </div>
              </Link>
              <span>oder</span>
              <div
                className={styles.Angebothochladenherosectionsmallbox}
                onClick={openModal}
              >
                <p>Foto vom Angebot machen</p>
                <div className={styles.Angebothochladenherosectionsmallboxicon}>
                  <Cameraicon />
                </div>
              </div>
              <span>oder</span>
              <Link href="/hochladen">
                <div className={styles.Angebothochladenherosectionsmallboxlast}>
                  <p>Daten manuell eingeben</p>
                </div>
              </Link>
              <div
                className={styles.Angebothochladenherosectionsmallboxslidermain}
              >
                <div
                  className={styles.Angebothochladenherosectionsmallboxslider}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Commonmodal
        ModalContent={
          <>
            <Angetbotuploadimagcomponent />
          </>
        }
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
