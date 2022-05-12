import React from "react";
import styles from "./styles.module.scss";

const ModelsSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line1} />
      <img src="/images/models1.png" className={styles.image1} />
      <img src="/images/models1.png" className={styles.image3} />
      <img src="/images/models1.png" className={styles.image2} />
      <img src="/images/models2.png" className={styles.image4} />
    </div>
  );
};

export default ModelsSection;
