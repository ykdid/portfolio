import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                Capable of developing high-performance APIs with ASP.NET Core, focusing on scalability and reliability.
              </p>
              <p>
                Experienced in Entity Framework, LINQ, Dapper, and skilled in applying Design Patterns, SOLID principles, and OOP.
              </p>
              <p>
                Knowledgeable in PostgreSQL, Microsoft SQL and Redis for robust database management.
              </p>
              <p>
              Familiar with architectural patterns such as Microservices, CQRS, and N-Layered Architecture, as well as containerization technologies like Docker, ensuring scalable and maintainable solutions.              </p>
            </div>
          </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
                I specialize in creating responsive and visually appealing websites using modern frontend technologies.
              </p>
              <p>
                Proficient in semantic HTML, CSS, SCSS, and utility-first CSS frameworks like Tailwind CSS, ensuring clean and maintainable code.
              </p>
              <p>
                Experienced in JavaScript and React.js, building dynamic, interactive user interfaces with a focus on performance.
              </p>
              <p>
                Knowledgeable in responsive design principles and familiar with various UI libraries to build modern, accessible user interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
