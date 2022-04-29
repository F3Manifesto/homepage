import React from 'react'
import styles from './styles.module.scss'

const HowToSection = () => {
  return (
    <div className={styles.howToSectionWrapper}>
      <ul className={styles.category}>
        <li>How to:</li>
        <li className={styles.selectable}>Make</li>
        <li className={styles.selectable}>Collect</li>
        <li className={styles.selectable}>Sell</li>
        <li className={styles.selectable}>Use</li>
      </ul>
      {/* <div className={styles.description}>
        multiple layers of different sized background divs with gradients ranging from transparent to close varieties of the full background blue. they shift in relation to each other, giving a shifting perspective impression
      </div> */}
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
    </div>
  )
}

export default HowToSection