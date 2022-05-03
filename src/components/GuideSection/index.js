import React from 'react'
import styles from './styles.module.scss'

const GuideSection = () => {
  return (
    <div className={styles.guideWrapper}>
      <div className={styles.title}>
        Znarky's Poignant Guide to NFTs
      </div>

      <a
        link=''
        className={styles.grokMoreButton}
      >
        GROK MORE
      </a>
    </div>
  )
}

export default GuideSection