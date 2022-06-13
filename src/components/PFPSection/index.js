import React from "react";
import RedButton from "@components/RedButton";
import styles from "./styles.module.scss";

const guideImages = [
  '/images/homepage/pfp/panel1.png',
]

const PFPSection = () => {
  return (
    <div className={styles.PFPSectionWrapper}>

      <div className={styles.animationWrapper}>
        {
          Array(3).fill().map((item, index) => {
            return (
              <div className={styles.animationReverse} key={`reverse-${index}`}>
                <div className={styles.marquee}>
                  <div className={styles.animationFrame}>
                    {
                      guideImages.map((item, index) => {
                        return (
                          <img key={index} src={guideImages[index]} />
                        )
                      })
                    }
                    {
                      guideImages.map((item, index) => {
                        return (
                          <img key={guideImages.length + index} src={guideImages[index]} />
                        )
                      })
                    }
                  </div>
                </div>
                <div className={styles.marquee}>
                  <div className={styles.animationFrame}>
                    {
                      guideImages.map((item, index) => {
                        return (
                          <img key={index} src={guideImages[index]} />
                        )
                      })
                    }
                    {
                      guideImages.map((item, index) => {
                        return (
                          <img key={guideImages.length + index} src={guideImages[index]} />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
        
          })
        }
      </div>


      <div className={styles.title}>
        POCKET FASHION PRINTERS
      </div>
      <div className={styles.h2}>
        Printing this CC0 Summer.
      </div>
      <RedButton link='https://pfp.f3manifesto.xyz/' className={styles.pfpButton}>
      BRRRRRRRRRR
      </RedButton>
      
    </div>
  );
};

export default PFPSection;
