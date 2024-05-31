import React from "react";
import Image from "next/image";
import styles from "./Map.module.css";
import carouselData from "../data";

type props = {
  num: number;
};

const Card = (props: props) => {
  return (
    <div
      className={styles.description__card}
      style={{ color: `#${carouselData[props.num].color}` }}
    >
      <Image
        src={`/CarouselImages/${carouselData[props.num].descImg}`}
        width={300}
        height={300}
        quality={100}
        alt="character"
      ></Image>
      <div className={styles.origin}>Origin</div>
      <div className={styles.mythology}>
        {carouselData[props.num].info.origin}
      </div>
      <div className={styles.creature__desc}>
        {carouselData[props.num].desc}
      </div>
      {/* <button
        className={styles.discover__button}
        style={{ color: `#${carouselData[props.num].color}` }}
      >
        Listen Story
      </button> */}
    </div>
  );
};

export default Card;
