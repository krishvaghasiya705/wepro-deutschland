import React from "react";
import styles from "./footer.module.scss";
import Trueicon from "@/assets/icons/trueicon";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <div className={styles.footercontent}>
          <div className={styles.footertoptags}>
            <div className={styles.footertoptagsflex}>
              <div className={styles.footertruicondiv}>
                <Trueicon />
              </div>
              <p>100% kostenlos & unverbindlich</p>
            </div>
            <div className={styles.footertoptagsflex}>
              <div className={styles.footertruicondiv}>
                <Trueicon />
              </div>
              <p>Regionale Fachfirmen</p>
            </div>
            <div className={styles.footertoptagsflex}>
              <div className={styles.footertruicondiv}>
                <Trueicon />
              </div>
              <p>unabhängige Angebotserstellung</p>
            </div>
          </div>
          <div className={styles.footerbottomperagraph}>
            <p>
              Rechtlicher Hinweis: Nachdem wir Ihre Bedürfnisse erfasst haben,
              leiten wir Sie an bis zu vier Fachpartner weiter. Dieser Service
              ist für Sie vollständig kostenlos und unverbindlich. Unsere
              Anbieter vergüten uns über Provisionen, wodurch wir diesen Service
              finanzieren.
            </p>
          </div>
          <div className={styles.footerbottomlastline}>
            <p>Impressum - Datenschutz</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
