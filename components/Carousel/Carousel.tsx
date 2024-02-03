"use client";
import styles from "./Carousel.module.css";
import Image from "next/image";
import { useState } from "react";
import Corners from "../Corners/Corners";

type data = {
  [key: number]: {
    color: string;
    image: string;
    name: string;
    creatureName: string;
    desc: string;
    info: { origin: string; region: string; symbols: string };
  };
};

export default function Home() {
  const [rotation, setRotation] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  const rotate = () => {
    setRotation(rotation + 90);
    setIndex((index + 1) % 3);
  };
  const rotateRev = () => {
    setRotation(rotation - 90);
    var c = index;
    c = index - 1 < 0 ? 2 : index - 1;
    setIndex(c);
  };

  const carouselData: data = {
    0: {
      color: "FF9843",
      image: "phoenix.webp",
      name: "THE IMMORTAL FIREBIRD",
      creatureName: "Phoenix",
      desc: "The Phoenix, from Greek mythology, is a symbol of resilience, immortality, and renewal, embodying life's endless cycle.",
      info: {
        origin: "Greek Mythology",
        region: "Ancient Greece",
        symbols: "fire sun renewal",
      },
    },
    1: {
      color: "7B3D80",
      image: "kitsune.webp",
      creatureName: "Kitsune",
      desc: "Kitsune, from Japanese folklore, is a magical fox known for intelligence, trickery, and enchanting shape-shifting abilities. Playing a pivotal role in many mystical tales.",
      name: "THE ENCHANTING FOX SPIRIT",
      info: {
        origin: "Japanese Mythology",
        region: "Japan",
        symbols: "Magic Fire Intelligence",
      },
    },
    2: {
      color: "43766C",
      image: "quetzalcoatl.webp",
      name: "THE FEATHERED SERPANT",
      creatureName: "Quetzalcoatl",
      desc: "Quetzalcoatl, in Mesoamerican mythology, is a feathered-serpent deity associated with wind and learning, revered by civilizations like the Aztecs and the Toltecs.",
      info: {
        origin: "Aztec Mythology",
        region: "Teotihucan",
        symbols: "Wind Water Wisdom",
      },
    },
  };

  return (
    <main className={styles.main}>
      <div
        className={styles.image__container}
        style={{
          position: "relative",
        }}
      >
        <div
          className={styles.imagediv}
          id="image"
          style={{
            transitionDuration: "1s",
            width: "35vw",
            height: "auto",
            objectFit: "contain",
            // border: "1px solid red",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 526 526"
            fill="none"
            style={{
              rotate: `${rotation}deg`,
              transitionDuration: "1s",
            }}
          >
            <circle
              cx="263"
              cy="262.685"
              r="212.215"
              stroke={`#${carouselData[index].color}`}
            />
            <path
              stroke={`#${carouselData[index].color}`}
              d="m263 .892 261.793 261.793L263 524.478 1.207 262.685z"
            />
            <path
              fill={`#${carouselData[index].color}`}
              fill-rule="evenodd"
              d="m263.156 497.481 5.63 5.63-5.63 5.629-5.629-5.629 5.629-5.63Zm0-1.414.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.629-5.629-.707-.707.707-.708 5.629-5.629.707-.707Zm1.458 8.501a2.061 2.061 0 1 0-2.915-2.915 2.061 2.061 0 0 0 2.915 2.915ZM494.805 262.973l5.629-5.629 5.63 5.629-5.63 5.63-5.629-5.63Zm-1.414 0 .707-.707 5.629-5.629.707-.707.708.707 5.629 5.629.707.707-.707.708-5.629 5.629-.708.707-.707-.707-5.629-5.629-.707-.708Zm5.586-1.457a2.061 2.061 0 1 0 2.915 2.915 2.061 2.061 0 0 0-2.915-2.915ZM263.156 22.925l5.63 5.63-5.63 5.629-5.629-5.63 5.629-5.629Zm0-1.414.707.707 5.63 5.63.707.706-.707.708-5.63 5.629-.707.707-.707-.707-5.629-5.63-.707-.707.707-.707 5.629-5.63.707-.706Zm1.458 8.501a2.062 2.062 0 1 0-2.916-2.915 2.062 2.062 0 0 0 2.916 2.915ZM20.249 262.974l5.63-5.63 5.629 5.63-5.63 5.629-5.63-5.629Zm-1.414 0 .707-.708 5.63-5.629.706-.707.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.63-5.629-.706-.707Zm5.586-1.458a2.061 2.061 0 1 0 2.914 2.915 2.061 2.061 0 0 0-2.914-2.915Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className={styles.image__container}>
          <Image
            src={`/CarouselImages/${carouselData[index].image}`}
            width={3200}
            height={1800}
            alt="creature"
            style={{
              objectFit: "cover",
              width: "30%",
              height: "85%",
              borderRadius: "100px",
              border: `2px solid #${carouselData[index].color}`,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%) ",
            }}
          ></Image>
        </div>
      </div>

      {/* The name of creature in heading  */}
      <h1
        style={{ fontFamily: "cirka", color: `#${carouselData[index].color}` }}
        className={styles.name__heading}
      >
        {carouselData[index].name}
      </h1>

      {/* the info about the creature  */}

      <div
        className={styles.info__section}
        style={{ color: `#${carouselData[index].color}` }}
      >
        <p>Origin: {carouselData[index].info.origin}</p>
        <p>Region: {carouselData[index].info.region}</p>
        <p>Symbols: {carouselData[index].info.symbols}</p>
      </div>

      {/* creature description  */}
      <p
        className={styles.creature__desc}
        style={{ color: `#${carouselData[index].color}` }}
      >{`${carouselData[index].desc}`}</p>

      {/* descover creature button  */}

      <div className={styles.discover__button}>
        <Corners
          text={`Discover ${carouselData[index].creatureName}`}
          color={`${carouselData[index].color}`}
        />
      </div>

      {/* The next and previous buttons  */}
      <div className={styles.buttons}>
        <button
          onClick={rotateRev}
          className={styles.button}
          style={{
            border: `2px solid #${carouselData[index].color} `,
          }}
        >
          <Image
            width="50"
            height="50"
            src={`https://img.icons8.com/fluency-systems-filled/48/${carouselData[index].color}/long-arrow-left.png`}
            alt="back--v1"
          />
        </button>
        <button
          onClick={rotate}
          style={{
            border: `2px solid #${carouselData[index].color} `,
          }}
          className={styles.button}
        >
          <Image
            width="50"
            height="50"
            src={`https://img.icons8.com/fluency-systems-filled/48/${carouselData[index].color}/long-arrow-right.png`}
            alt={`forward--v1`}
          />
        </button>
      </div>
    </main>
  );
}
