import React, { useState } from "react";
import styles from "./CommonDropdown.module.scss";
import Dropdownicon from "@/assets/icons/dropdownicon";

interface CommonDropdownProps {
  title: string;
  options: string[];
}

export default function CommonDropdown({ title, options }: CommonDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.CommonDropdownmain}>
      <div className={styles.CommonDropdownmainbox} onClick={toggleDropdown}>
        <div className={styles.CommonDropdownmainboxalignment}>
          <span>{selectedOption}</span>
          <div className={`${styles.dropdownicon} ${isOpen ? styles.rotate : ""}`}>
            <Dropdownicon />
          </div>
        </div>
        {isOpen && (
          <div className={styles.CommonDropdownContentmain}>
            {options.map((option, index) => (
              <p key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
