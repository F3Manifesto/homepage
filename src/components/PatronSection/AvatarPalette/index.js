import React from 'react'
import styles from './styles.module.scss'

const avatars = [
  '/images/homepage/packs/pack1.png',
  '/images/homepage/packs/pack2.png',
  '/images/homepage/packs/pack3.png',
  '/images/homepage/packs/pack1.png',
  '/images/homepage/packs/pack2.png',
  '/images/homepage/packs/pack3.png',
  '/images/homepage/packs/pack1.png',
  '/images/homepage/packs/pack2.png',
  '/images/homepage/packs/pack3.png',
  '/images/homepage/packs/pack1.png',
  '/images/homepage/packs/pack2.png',
  '/images/homepage/packs/pack3.png',
  '/images/homepage/packs/pack1.png',
  '/images/homepage/packs/pack2.png',
  '/images/homepage/packs/pack3.png',
  '/images/homepage/packs/pack1.png',
  '/images/homepage/packs/pack2.png',
  '/images/homepage/packs/pack3.png',
]

const AvatarPalette = () => {
  return (
    <div className={styles.paletteWrapper}>
      <div className={styles.paletteBody}>
        <div className={styles.headerBar}>
          <div className={styles.title}>
            CHARACTERS
          </div>
          <div className={styles.description}>
            413 GYLPHS <br />
            BLACK (800) <br />
            OTF
          </div>
        </div>
        <div className={styles.palette}>
          {
            Array(60).fill().map((item, index) => {
              return (
                <div className={styles.paletteItem}>
                  <img src={avatars[index]} />
                </div>
              )
            })
          }
        </div>
      </div>
      <a
        href=''
        target='_blank'
        className={styles.viewAllButton}
      >
        VIEW ALL 
      </a>
    </div>
  )
}

export default AvatarPalette