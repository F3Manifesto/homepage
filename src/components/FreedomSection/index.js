import React from 'react'
import styles from './styles.module.scss'

const FreedomSection = () => {
  return (
    <div className={styles.freedomSectionWrapper}>
      <div className={styles.title}>
        FREEDOM TO PLAY <br />
        ENTER THE CC0 ARCADE
      </div>
      <div className={styles.description}>
        It empowers and supports directly incentivised CC0. 
        <br /><br />
        The CC0 Arcade challenges you to get more from the time you spent wasted staring at glowing screens. 
        <br /><br />
        Now, each moment, each credit, each effort that you put in to the creative machines records, propagates and scales the full diverse extent and quality of content and culture that are not only free in spirit but interesting and interactive enough to keep you engaged in your own self sovereign journeys. 
      </div>
      <img
        className={styles.imageFreedomFrame}
        src='/images/homepage/freedom_frame.png'
      />
    </div>
  )
}

export default FreedomSection