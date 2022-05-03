import React from 'react'
import styles from './styles.module.scss'

const guideImages = [
  '/images/homepage/guide/guide-1.jpg',
  '/images/homepage/guide/guide-2.jpg',
  '/images/homepage/guide/guide-3.jpg',
]

const GuideSection = () => {
  return (
    <div className={styles.guideWrapper}>
      <div className={styles.title}>
        Znarky's Poignant Guide to NFTs
      </div>

      <div className={styles.animationWrapper}>
        <div className={styles.animationReverse}>
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
        <div className={styles.animationReverse}>
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