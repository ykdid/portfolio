import React, { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 200) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button className={styles.toTopBtn} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
