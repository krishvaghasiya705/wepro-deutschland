import React from "react";
import Angeherosection from "@/components/angebotcomponents/angebotherosection";

export default function Gmbhmain() {
  return (
    <>
      <Angeherosection
        Title={
          <>
            Mache <span>deinen</span> Photovoltaik <span>Vergleichs-check</span>
          </>
        }
        Smallpera="und spare im Ø 7.000€"
        Cardtext1={
          <>
            In <span>7 kurzen Fragen</span> zu min. 3{" "}
            <span>Vergleichsangeboten</span>
          </>
        }
        CardText2="Jetzt starten"
        CardText1link="/"
        CardText2link="/gmbh"
      />
    </>
  );
}
