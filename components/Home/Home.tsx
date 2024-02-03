"use client";
import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import { scroll, motion } from "framer-motion";

type Props = {};

const Home = (props: Props) => {
  useEffect(() => {
    const rotateWheel = document.getElementById(
      "rotator"
    ) as HTMLImageElement | null;
    const scalingimage = document.getElementById(
      "image"
    ) as HTMLImageElement | null;

    scroll((progress) => {
      rotateWheel && (rotateWheel.style.transform = `translate(-50%,-70%) rotate(${
        progress * 1000
      }deg)
      scale(${1 - progress * 1.5})
      `);
    scalingimage&&(scalingimage.style.transform = `translate(-50%,-70%) 
      scale(${1 - progress * 1.5})
      `);
    });
  });

  return (
    <div className={styles.home__page} id="home">
      <motion.div className={styles.home__image} id="imageOverlay">
        <div className={styles.overlayCreature}></div>
        <Image
          src={"/homedragon.webp"}
          width={300}
          height={300}
          id="image"
          className={styles.home__image}
          alt="creature"
        />
      </motion.div>

      <Image
        src={"/homebg.svg"}
        className={styles.home__image}
        width={400}
        height={400}
        alt="bg"
        id="rotator"
      />

      <div className={styles.cloud}>
        <Image
          src={"/clouds.webp"}
          className={styles.cloud__image}
          width={400}
          height={350}
          alt="clouds"
          id="cloud"
        />
      </div>

      <h1 className={styles.heading}>
        Explore the <br /> realms of mythical craetures
      </h1>

      <div className={styles.header__gradient}></div>
    </div>
  );
};

export default Home;
