import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yusuf</h1>
        <p className={styles.description}>
          I'm a Software Developer as a Full-Stack. Reach out if you'd like to learn more!
        </p>
        <div>
        <a href="mailto:yusufkaya.yjk@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="resume.pdf" className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        </div>
       
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
