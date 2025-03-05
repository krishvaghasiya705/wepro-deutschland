import React, { ReactNode, useState } from "react";
import styles from "./Commonmodal.module.scss";
import Crossicon from "@/assets/icons/crossicon";

interface CommonmodalProps {
  ModalContent: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Commonmodal({ ModalContent, isOpen, onClose }: CommonmodalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.Commonmodalmain}>
      <div className={styles.Commonmodalboxmain}>
        <div className={styles.Commonmodalcrossicon} onClick={onClose}>
          <Crossicon />
        </div>
        <div className={styles.Commonmodalbox}>
          <h1>Fügen Sie die Bilder hinzu</h1>
          {ModalContent}
          <div className={styles.Commonmodaltwobuttonmain}>
            <button type="button" className={styles.Commonmodaltwobuttonone} onClick={onClose}>
              Abbrechen
            </button>
            <button type="button" className={styles.Commonmodaltwobuttontwo}>
              Weiter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
