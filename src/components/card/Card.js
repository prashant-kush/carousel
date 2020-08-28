import React from "react";
import styles from "./card.module.css";
const Card = ({ bgColor, img, heading, subHeading, para }) => {
  return (
    <div className={styles.card_parent}>
      <div
        className={styles.left}
        style={{ backgroundImage: `url("${img}")` }}
      />
      <div className={styles.right}>
        <h1 className={styles.heading}>{heading}</h1>
        <h2 className={styles.sub_heading}>{subHeading}</h2>
        <p className={styles.para}>{para}</p>
        <div className={styles.button_container}>
          <button
            className={styles.button}
            style={{ backgroundColor: bgColor }}
          >
            Download For
          </button>
          <button
            className={styles.button}
            style={{ backgroundColor: bgColor }}
          >
            Download For
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
