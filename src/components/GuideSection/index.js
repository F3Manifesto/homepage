import React from 'react'
import styles from './styles.module.scss'

const guideImages = [
  '/images/homepage/guide/guide-1.png',
  '/images/homepage/guide/guide-2.png',
  '/images/homepage/guide/guide-3.png',
  '/images/homepage/guide/guide-4.png',
  '/images/homepage/guide/guide-5.png'
]

const GuideSection = () => {
  return (
    <div className={styles.guideWrapper}>
      <div className={styles.title}>
        Znarky's Poignant Guide to NFTs
      </div>

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

      <a
        href='https://docs.f3manifesto.xyz/znarkys-poignant-guide-to-nfts/znarky'
        className={styles.grokMoreButton}
      >
        GROK MORE
      </a>
    </div>
  )
}

export default GuideSection