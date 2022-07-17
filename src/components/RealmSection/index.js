import React from "react";
import styles from "./styles.module.scss";

const RealmSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>rEALM rUNWAY #1: nyc fashion Week</div>
      <div className={styles.text2}>
        February 11th, 2022. TriBeCa, New York, NY.
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        webkitPlaysInline
        className={styles.video}
      >
        <source src="/video/Untitled video (4) (1) (1).mp4" />
      </video>
      <a
        href="https://realmrunway.xyz/"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        SEE MORE ON REALM RUNWAYS
      </a>
    </div>
  );
};

export default RealmSection;
