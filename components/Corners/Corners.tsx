import React from "react";
import styles from "./Corners.module.css";

type Props = {
  color: string;
  text: string;
};

export default function Corners({ color, text }: Props) {
  return (
    <>
      <button
        className={styles.corner__button}
        style={{
          borderColor: `#${color}`,
        }}
      >
        <span className={styles.name} style={{ color: `#${color}` }}>
          {text}
        </span>
      </button>
    </>
  );
}
