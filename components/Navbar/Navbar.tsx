"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Navbar = () => {
  const audioref = useRef(null);
  const audioref2 = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    if (audioref) playing ? audioref.current.pause() : audioref.current.play();
    setPlaying(!playing);
  };

  const playPen = () => {
    audioref2.current.play();
  };

  return (
    <div className={styles.navbar}>
      <audio ref={audioref} src={"/bgsound.mp3"} autoPlay loop></audio>
      <audio ref={audioref2} src={"/click.mp3"}></audio>
      <div className={styles.logo}>Mythic Codex</div>
      <div className={styles.links}>
        <Link href={"#"} onMouseOver={playPen}>
          Home
        </Link>
        <Link href={"#Explore"} onMouseOver={playPen}>
          Explore
        </Link>
        <Link href={"#quiz"} onMouseOver={playPen}>
          quiz
        </Link>
        <button
          className={styles.play__button}
          onClick={play}
          style={{ padding: "5px" }}
        >
          {!playing ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
