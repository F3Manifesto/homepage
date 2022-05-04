import React from 'react'
import AchieveItem from './AchieveItem'
import AvatarPalette from './AvatarPalette'
import styles from './styles.module.scss'

const PatronSection = () => {
  return (
    <div className={styles.patronWrapper}>
      <div className={styles.title}>
        BECOME A PATRON <br />
        &<br />
        JOIN THE DAO
      </div>

      <div className={styles.introWrapper}>
        <div className={styles.introDesc}>
          Hello, I'm Michael, a creative developer from South<br />
          of France, currently working freelance. I am lucky<br />
          enough to have learnt from and worked with the<br />
          <a href='' target='_blank' >PAM</a> team. Here's some of my works.
        </div>

        <div className={styles.introTitle}>
          MADE WITH LOVE
        </div>

        <div className={styles.achieveItems}>
          
            <AchieveItem
              title='TIER ONE'
            >
              The visual keys that secure and surround us, and every channel through which information passes, are inherent and given their greatest expression in every NFT truly encapsulating the open value of creative free expression. 
            </AchieveItem>
            <AchieveItem
              title='TIER TWO'
            >
              The visual keys that secure and surround us, and every channel through which information passes, are inherent and given their greatest expression in every NFT truly encapsulating the open value of creative free expression. 
            </AchieveItem>
            <AchieveItem
              title='TIER THREE'
            >
              The visual keys that secure and surround us, and every channel through which information passes, are inherent and given their greatest expression in every NFT truly encapsulating the open value of creative free expression. 
            </AchieveItem>
          {/* <AchieveItem 
            title='Benjamin Righetti'
          >
            FWA FOTD <br />
            AWWWARDS SOTD <br />
            AWWWARDS DEVELOPER AWARD <br />
            AWWWARDS MOBILE EXCELLENCE <br />
            SITE INSPIRE <br />
          </AchieveItem>
          <AchieveItem 
            title='Anagram Club'
            year='2021'
          >
            FWA FOTD <br />
            AWWWARDS MOBILE EXCELLENCE <br />
            SITE INSPIRE <br />
            CSSDA WOTD <br />
          </AchieveItem>
          <AchieveItem 
            title='Helias Oils'
            year='2020'
          >
            FWA FOTD <br />
            AWWWARDS SOTD <br />
            AWWWARDS MOBILE EXCELLENCE <br />
            NOMINATION E-COMMERCEOTY AWWWARDS <br />
            CSSDA WOTD <br />
          </AchieveItem>
          <AchieveItem 
            title='Kombu'
            year='2019'
          >
            FWA FOTD <br />
            AWWWARDS SOTD <br />
            AWWWARDS MOBILE EXCELLENCE <br />
          </AchieveItem>
          <AchieveItem 
            title='Rubxkub'
          >
            AWWWARDS SOTD <br />
            AWWWARDS DEVELOPER AWARD <br />
            AWWWARDS MOBILE EXCELLENCE <br />
            SITE INSPIRE <br />
            CSSDA WOTD <br />
            CSSDA INNOVATION, UI DESIGN, UX DESIGN <br />
          </AchieveItem>
          <AchieveItem 
            title='Top Paddock'
          >
            AWWWARDS SOTD <br />
            CSSDA WOTD <br />
          </AchieveItem>
          <AchieveItem 
            title='Mustafa Celik'
            year='2018'
          >
            FWAWWWARD <br />
            FWA FOTD <br />
            FAA FOTD MOBILE <br />
            AWWWARDS SOTD <br />
            SITE INSPIRE <br />
            CSSDA WOTD <br />
          </AchieveItem>
          <AchieveItem 
            title='Higher Ground'
          >
            AWWWARDS SOTD <br />
            CSSDA WOTD <br />
          </AchieveItem>
          <AchieveItem 
            title='Blackballoon'
            year='2017'
          >
            CSSDA WOTD <br />
          </AchieveItem>
          <AchieveItem 
            title='Maeva Barriere'
          >
            AWWWARDS SOTD <br />
            SITE INSPIRE <br />
            CSSDA WOTD <br />
          </AchieveItem>
          <AchieveItem 
            title='Confluence'
          >
            SITE INSPIRE (RED STAR MENTION) <br />
            CSSDA WOTD <br />
          </AchieveItem>
          <AchieveItem 
            title='Orly Place Wilson'
          >
            SITE INSPIRE <br />
          </AchieveItem>
          <AchieveItem 
            title='Studio Chevojon'
            year='2016'
          >
            AWWWARDS SOTD <br />
            AWWWARDS DEVELOPER AWARD <br />
            NOMINATION DOTY AWWWARDS<br />
            AWWWARDS MOBILE EXCELLENCE <br />
            SITE INSPIRE <br />
            CSSDA WOTD <br />
          </AchieveItem> */}
        </div>

        <div className={styles.introDesc2}>
          I'm also doing live midi / WebGI vjing for an <br />
          awesome band called <a href='' target='_blank'>Rachell</a>. I'm available for
          freelance. Feel free to contact me !
        </div>
      </div>

      <div className={styles.paletteWrapper}>
        <AvatarPalette />
      </div>
    </div>
  )
}

export default PatronSection