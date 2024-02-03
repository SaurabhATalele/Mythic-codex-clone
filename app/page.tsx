import styles from "./page.module.css";
import Carousel from "../components/Carousel/Carousel";
import Corners from "@/components/Corners/Corners";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Home from "@/components/Home/Home";
import Map from "@/components/Map/Map";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Carousel />
      <Map />
    </div>
  );
};

export default page;
