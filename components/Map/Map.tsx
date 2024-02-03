import React from "react";
import styles from "./Map.module.css";
import Image from "next/image";
interface Props {}

const Map = (props: Props) => {
  return (
    <div className={styles.map__page}>
      <Image
        src={"/map_bg.webp"}
        width={3200}
        height={1800}
        alt="map"
        className={styles.img}
      />
      <div className={styles.test}></div>
      <div className={styles.test}></div>
      <div className={styles.test}></div>
      <div className={styles.test}></div>
      <div className={styles.test}></div>
    </div>
  );
};

export default Map;
