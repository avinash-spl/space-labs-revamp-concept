import React, { useEffect, useRef, useState } from "react";
import styles from "./Parallax2.module.css";
// import CommentTile from "./CommentTile";

const Parallax2 = () => {
  const parallaxRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari or iOS
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
      (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1) ||
      /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);

    // Handle scroll for manual parallax effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate background position based on scroll with an upper limit
  const backgroundPositionY = `${10 + Math.min(scrollPosition * 0.05, 30)}%`;
  // For mobile on Safari, adjust X position as well
  const backgroundPositionX =
    isSafari && window.innerWidth <= 600 ? "30%" : "10%";

  return (
    <div
      ref={parallaxRef}
      className={`${styles.container} ${
        isSafari ? styles.safariContainer : ""
      }`}
      style={{
        // Apply dynamic background position for Safari
        ...(isSafari && {
          backgroundPositionY,
          backgroundPositionX,
        }),
      }}
    >
      {/* <CommentTile /> */}
    </div>
  );
};

export default Parallax2;
