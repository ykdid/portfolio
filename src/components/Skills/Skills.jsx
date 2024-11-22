import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        speed={1200}
        freeMode={true}
        autoplay={{ 
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className={styles.swiperContainer}
        breakpoints={{
          768: {
            slidesPerView: 5, // 768px'den küçük ekranlarda 4 item
          },
          380: {
            slidesPerView: 4, // 480px'den küçük ekranlarda 3 item
          },
          
        }}
        
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.image} />
            </div>
            <p className={styles.skillText}>{skill.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

