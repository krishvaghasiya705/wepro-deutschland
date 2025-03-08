import React, { ReactNode } from "react";
import styles from "./commonbutton.module.scss";
import Trueicon from "@/assets/icons/trueicon";

interface Commonbuttonprops {
  text: String;
  ButtonclassName: any;
  classNameText: any;
  icon: ReactNode;
  disabled: any;
  type: any;
  variant: String;
}

export default function CommonButton({
  text = "Common button text",
  ButtonclassName = "commonbutton",
  classNameText = "textlight",
  icon = <Trueicon />,
  disabled = false,
  type = "button",
  variant = "primary",
}: Commonbuttonprops) {
  return (
    <div className={styles[ButtonclassName as any]}>
      <button
        type={type}
        disabled={disabled}
        className={styles[variant as any]}
      >
        {icon}
        <div className={styles[classNameText as any]}>{text}</div>
      </button>
    </div>
  );
}
