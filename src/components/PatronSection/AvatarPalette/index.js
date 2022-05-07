import React from 'react'
import styles from './styles.module.scss'

const avatars = [
  '/images/homepage/packs/Rectangle 1967.png',
  '/images/homepage/packs/Rectangle 1984.png',
  '/images/homepage/packs/Rectangle 1985.png',
  '/images/homepage/packs/Rectangle 1986.png',
  '/images/homepage/packs/Rectangle 1987.png',
  '/images/homepage/packs/Rectangle 1988.png',
  '/images/homepage/packs/Rectangle 1989.png',
  '/images/homepage/packs/Rectangle 1990.png',
  '/images/homepage/packs/Rectangle 1991.png',
  '/images/homepage/packs/Rectangle 1992.png',
  '/images/homepage/packs/Rectangle 1993.png',
  '/images/homepage/packs/Rectangle 1994.png',
  '/images/homepage/packs/Rectangle 1995.png',
  '/images/homepage/packs/Rectangle 1996.png',
  '/images/homepage/packs/Rectangle 1997.png',
  '/images/homepage/packs/Rectangle 1998.png',
  '/images/homepage/packs/Rectangle 1999.png',
  '/images/homepage/packs/Rectangle 2000.png',
  '/images/homepage/packs/Rectangle 2001.png',
  '/images/homepage/packs/Rectangle 2002.png',
  '/images/homepage/packs/Rectangle 2003.png',
  '/images/homepage/packs/Rectangle 2004.png',
  '/images/homepage/packs/Rectangle 2005.png',
  '/images/homepage/packs/Rectangle 2006.png',
  '/images/homepage/packs/Rectangle 2007.png',
  '/images/homepage/packs/Rectangle 2008.png',
  '/images/homepage/packs/Rectangle 2009.png',
  '/images/homepage/packs/Rectangle 2010.png',
  '/images/homepage/packs/Rectangle 2011.png',
  '/images/homepage/packs/Rectangle 2012.png',
  '/images/homepage/packs/Rectangle 2013.png',
  '/images/homepage/packs/Rectangle 2014.png',
  '/images/homepage/packs/Rectangle 2015.png',
  '/images/homepage/packs/Rectangle 2016.png',
  '/images/homepage/packs/Rectangle 2017.png',
  '/images/homepage/packs/Rectangle 2018.png',
  '/images/homepage/packs/Rectangle 2019.png',
  '/images/homepage/packs/Rectangle 2020.png',
  '/images/homepage/packs/Rectangle 2021.png',
  '/images/homepage/packs/Rectangle 2022.png',
  '/images/homepage/packs/Rectangle 2023.png',
  '/images/homepage/packs/Rectangle 2025.png',
  '/images/homepage/packs/Rectangle 2026.png',
  '/images/homepage/packs/Rectangle 2027.png',
  '/images/homepage/packs/Rectangle 2028.png',
  '/images/homepage/packs/Rectangle 2024.png',
  '/images/homepage/packs/Rectangle 2024.png',
  '/images/homepage/packs/Rectangle 2024.png'
]

const AvatarPalette = () => {
  return (
    <div className={styles.paletteWrapper}>
      <div className={styles.paletteBody}>
        <div className={styles.headerBar}>
          <div className={styles.title}>
            DESIGNER REALM
          </div>
          <div className={styles.description}>
            Web3 (not just in<br />
            name). Explore the<br />
            Bakers Dozen Crew.
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
        href='https://patrons.digitalax.xyz/realm/F3Manifesto/'
        target='_blank'
        className={styles.viewAllButton}
      >
        JOIN THE DAO
      </a>
    </div>
  )
}

export default AvatarPalette