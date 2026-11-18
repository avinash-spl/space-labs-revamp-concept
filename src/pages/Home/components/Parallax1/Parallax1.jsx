import React from "react";
import styles from "./Parallax1.module.css";
import CommentTile from "./CommentTile";

const Parallax1 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <CommentTile />
      </div>
    </section>
  );
};

export default Parallax1;
