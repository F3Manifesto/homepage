import React from "react";
import styles from "./styles.module.scss";

const ModelsSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line1} />
      <img src="/images/modelfinal1.gif" className={styles.image1} />
      <img src="/images/bridgeshot.jpg" className={styles.image3} />
      <img src="/images/skagefirl.gif" className={styles.image2} />
      <img src="/images/whatisweb3.gif" className={styles.image4} />
      <a
        href="https://github.com/F3Manifesto/ccomaterials/tree/main/modelshots"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        see the web3 models.
      </a>
    </div>
  );
};

export default ModelsSection;
