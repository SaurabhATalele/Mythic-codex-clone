"use client";
import React,{useState} from "react";
import styles from "./Map.module.css";
import Image from "next/image";
import Card from "./Card";
interface Props {}

const Map = (props: Props) => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.map__page}>
      <Image
        src={"/map_bg.webp"}
        width={3200}
        height={1800}
        alt="map"
        className={styles.img}
      />

      <h1 className={styles.explore__heading}>
        EXPLORE THE WORLD OF MYTHOLOGY
      </h1>
      <div className={styles.points__container}>
        {/* point no 1  */}
        <div
          className={styles.test}
          onMouseEnter={() => setActive(2)}
        >
          <div className={styles.dot}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 526 526"
            fill="none"
          >
            <circle
              strokeWidth={"7px"}
              cx="263"
              cy="262.685"
              r="212.215"
              scale={0.8}
              stroke="#e9a174"
            />
            <path
              stroke="#e9a174"
              strokeWidth={"8px"}
              d="m263 .892 261.793 261.793L263 524.478 1.207 262.685z"
            />
            <path
              fill="#e9a174"
              fill-rule="evenodd"
              d="m263.156 497.481 5.63 5.63-5.63 5.629-5.629-5.629 5.629-5.63Zm0-1.414.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.629-5.629-.707-.707.707-.708 5.629-5.629.707-.707Zm1.458 8.501a2.061 2.061 0 1 0-2.915-2.915 2.061 2.061 0 0 0 2.915 2.915ZM494.805 262.973l5.629-5.629 5.63 5.629-5.63 5.63-5.629-5.63Zm-1.414 0 .707-.707 5.629-5.629.707-.707.708.707 5.629 5.629.707.707-.707.708-5.629 5.629-.708.707-.707-.707-5.629-5.629-.707-.708Zm5.586-1.457a2.061 2.061 0 1 0 2.915 2.915 2.061 2.061 0 0 0-2.915-2.915ZM263.156 22.925l5.63 5.63-5.63 5.629-5.629-5.63 5.629-5.629Zm0-1.414.707.707 5.63 5.63.707.706-.707.708-5.63 5.629-.707.707-.707-.707-5.629-5.63-.707-.707.707-.707 5.629-5.63.707-.706Zm1.458 8.501a2.062 2.062 0 1 0-2.916-2.915 2.062 2.062 0 0 0 2.916 2.915ZM20.249 262.974l5.63-5.63 5.629 5.63-5.63 5.629-5.63-5.629Zm-1.414 0 .707-.708 5.63-5.629.706-.707.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.63-5.629-.706-.707Zm5.586-1.458a2.061 2.061 0 1 0 2.914 2.915 2.061 2.061 0 0 0-2.914-2.915Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* point NO 2 */}
        <div className={styles.test} onMouseEnter={()=>setActive(0)}>
          <div className={styles.dot}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 526 526"
            fill="none"
          >
            <circle
              strokeWidth={"7px"}
              cx="263"
              cy="262.685"
              r="212.215"
              scale={0.8}
              stroke="#e9a174"
            />
            <path
              stroke="#e9a174"
              strokeWidth={"8px"}
              d="m263 .892 261.793 261.793L263 524.478 1.207 262.685z"
            />
            <path
              fill="#e9a174"
              fill-rule="evenodd"
              d="m263.156 497.481 5.63 5.63-5.63 5.629-5.629-5.629 5.629-5.63Zm0-1.414.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.629-5.629-.707-.707.707-.708 5.629-5.629.707-.707Zm1.458 8.501a2.061 2.061 0 1 0-2.915-2.915 2.061 2.061 0 0 0 2.915 2.915ZM494.805 262.973l5.629-5.629 5.63 5.629-5.63 5.63-5.629-5.63Zm-1.414 0 .707-.707 5.629-5.629.707-.707.708.707 5.629 5.629.707.707-.707.708-5.629 5.629-.708.707-.707-.707-5.629-5.629-.707-.708Zm5.586-1.457a2.061 2.061 0 1 0 2.915 2.915 2.061 2.061 0 0 0-2.915-2.915ZM263.156 22.925l5.63 5.63-5.63 5.629-5.629-5.63 5.629-5.629Zm0-1.414.707.707 5.63 5.63.707.706-.707.708-5.63 5.629-.707.707-.707-.707-5.629-5.63-.707-.707.707-.707 5.629-5.63.707-.706Zm1.458 8.501a2.062 2.062 0 1 0-2.916-2.915 2.062 2.062 0 0 0 2.916 2.915ZM20.249 262.974l5.63-5.63 5.629 5.63-5.63 5.629-5.63-5.629Zm-1.414 0 .707-.708 5.63-5.629.706-.707.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.63-5.629-.706-.707Zm5.586-1.458a2.061 2.061 0 1 0 2.914 2.915 2.061 2.061 0 0 0-2.914-2.915Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* point no 3  */}
        <div className={styles.test}>
          <div className={styles.dot}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 526 526"
            fill="none"
          >
            <circle
              strokeWidth={"7px"}
              cx="263"
              cy="262.685"
              r="212.215"
              scale={0.8}
              stroke="#e9a174"
            />
            <path
              stroke="#e9a174"
              strokeWidth={"8px"}
              d="m263 .892 261.793 261.793L263 524.478 1.207 262.685z"
            />
            <path
              fill="#e9a174"
              fill-rule="evenodd"
              d="m263.156 497.481 5.63 5.63-5.63 5.629-5.629-5.629 5.629-5.63Zm0-1.414.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.629-5.629-.707-.707.707-.708 5.629-5.629.707-.707Zm1.458 8.501a2.061 2.061 0 1 0-2.915-2.915 2.061 2.061 0 0 0 2.915 2.915ZM494.805 262.973l5.629-5.629 5.63 5.629-5.63 5.63-5.629-5.63Zm-1.414 0 .707-.707 5.629-5.629.707-.707.708.707 5.629 5.629.707.707-.707.708-5.629 5.629-.708.707-.707-.707-5.629-5.629-.707-.708Zm5.586-1.457a2.061 2.061 0 1 0 2.915 2.915 2.061 2.061 0 0 0-2.915-2.915ZM263.156 22.925l5.63 5.63-5.63 5.629-5.629-5.63 5.629-5.629Zm0-1.414.707.707 5.63 5.63.707.706-.707.708-5.63 5.629-.707.707-.707-.707-5.629-5.63-.707-.707.707-.707 5.629-5.63.707-.706Zm1.458 8.501a2.062 2.062 0 1 0-2.916-2.915 2.062 2.062 0 0 0 2.916 2.915ZM20.249 262.974l5.63-5.63 5.629 5.63-5.63 5.629-5.63-5.629Zm-1.414 0 .707-.708 5.63-5.629.706-.707.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.63-5.629-.706-.707Zm5.586-1.458a2.061 2.061 0 1 0 2.914 2.915 2.061 2.061 0 0 0-2.914-2.915Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* point no 4 */}
        <div className={styles.test}>
          <div className={styles.dot}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 526 526"
            fill="none"
          >
            <circle
              strokeWidth={"7px"}
              cx="263"
              cy="262.685"
              r="212.215"
              scale={0.8}
              stroke="#e9a174"
            />
            <path
              stroke="#e9a174"
              strokeWidth={"8px"}
              d="m263 .892 261.793 261.793L263 524.478 1.207 262.685z"
            />
            <path
              fill="#e9a174"
              fill-rule="evenodd"
              d="m263.156 497.481 5.63 5.63-5.63 5.629-5.629-5.629 5.629-5.63Zm0-1.414.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.629-5.629-.707-.707.707-.708 5.629-5.629.707-.707Zm1.458 8.501a2.061 2.061 0 1 0-2.915-2.915 2.061 2.061 0 0 0 2.915 2.915ZM494.805 262.973l5.629-5.629 5.63 5.629-5.63 5.63-5.629-5.63Zm-1.414 0 .707-.707 5.629-5.629.707-.707.708.707 5.629 5.629.707.707-.707.708-5.629 5.629-.708.707-.707-.707-5.629-5.629-.707-.708Zm5.586-1.457a2.061 2.061 0 1 0 2.915 2.915 2.061 2.061 0 0 0-2.915-2.915ZM263.156 22.925l5.63 5.63-5.63 5.629-5.629-5.63 5.629-5.629Zm0-1.414.707.707 5.63 5.63.707.706-.707.708-5.63 5.629-.707.707-.707-.707-5.629-5.63-.707-.707.707-.707 5.629-5.63.707-.706Zm1.458 8.501a2.062 2.062 0 1 0-2.916-2.915 2.062 2.062 0 0 0 2.916 2.915ZM20.249 262.974l5.63-5.63 5.629 5.63-5.63 5.629-5.63-5.629Zm-1.414 0 .707-.708 5.63-5.629.706-.707.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.63-5.629-.706-.707Zm5.586-1.458a2.061 2.061 0 1 0 2.914 2.915 2.061 2.061 0 0 0-2.914-2.915Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* point no 5 */}
        <div className={styles.test} onMouseEnter={()=>setActive(1)}>
          <div className={styles.dot}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 526 526"
            fill="none"
          >
            <circle
              strokeWidth={"7px"}
              cx="263"
              cy="262.685"
              r="212.215"
              scale={0.8}
              stroke="#e9a174"
            />
            <path
              stroke="#e9a174"
              strokeWidth={"8px"}
              d="m263 .892 261.793 261.793L263 524.478 1.207 262.685z"
            />
            <path
              fill="#e9a174"
              fill-rule="evenodd"
              d="m263.156 497.481 5.63 5.63-5.63 5.629-5.629-5.629 5.629-5.63Zm0-1.414.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.629-5.629-.707-.707.707-.708 5.629-5.629.707-.707Zm1.458 8.501a2.061 2.061 0 1 0-2.915-2.915 2.061 2.061 0 0 0 2.915 2.915ZM494.805 262.973l5.629-5.629 5.63 5.629-5.63 5.63-5.629-5.63Zm-1.414 0 .707-.707 5.629-5.629.707-.707.708.707 5.629 5.629.707.707-.707.708-5.629 5.629-.708.707-.707-.707-5.629-5.629-.707-.708Zm5.586-1.457a2.061 2.061 0 1 0 2.915 2.915 2.061 2.061 0 0 0-2.915-2.915ZM263.156 22.925l5.63 5.63-5.63 5.629-5.629-5.63 5.629-5.629Zm0-1.414.707.707 5.63 5.63.707.706-.707.708-5.63 5.629-.707.707-.707-.707-5.629-5.63-.707-.707.707-.707 5.629-5.63.707-.706Zm1.458 8.501a2.062 2.062 0 1 0-2.916-2.915 2.062 2.062 0 0 0 2.916 2.915ZM20.249 262.974l5.63-5.63 5.629 5.63-5.63 5.629-5.63-5.629Zm-1.414 0 .707-.708 5.63-5.629.706-.707.707.707 5.63 5.629.707.708-.707.707-5.63 5.629-.707.707-.707-.707-5.63-5.629-.706-.707Zm5.586-1.458a2.061 2.061 0 1 0 2.914 2.915 2.061 2.061 0 0 0-2.914-2.915Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <Card num={active}/>
      </div>
    </div>
  );
};

export default Map;
