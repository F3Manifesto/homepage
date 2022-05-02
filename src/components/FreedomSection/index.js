import React from 'react'
import BlueButton from '@components/BlueButton'
import styles from './styles.module.scss'

const FreedomSection = () => {
  return (
    <div className={styles.freedomSectionWrapper}>
      <div className={styles.line1}></div>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <img
        className={styles.freedom3DImage}
        src='/images/homepage/freedom_3d.png'
      />

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
        className={styles.imageInsert}
        src='/images/homepage/insertCC0.png'
      />
      <img
        className={styles.imageFreedomFrame}
        src='/images/homepage/freedom_frame.png'
      />
      <img
        className={styles.mouseImage}
        src='/images/homepage/mouse.png'
      />

      <div className={styles.circle1}>
        <div className={styles.innerCircle}>
          blinaut
        </div>
        <div className={styles.subText}>
          arcane runes
        </div>
      </div>
      <div className={styles.circle2}>
        <div className={styles.innerCircle}>
          <img
            src='/images/homepage/influence.png'
            className={styles.imageInfluence}
          />
        </div>
        <div className={styles.text}>
          noun
        </div>
        <div className={styles.subText}>
          blank
        </div>
      </div>
      <div className={styles.circle3}>
        <div className={styles.innerCircle}>
          game
        </div>
        <div className={styles.subText}>
          geometric shapes
        </div>
      </div>

      <div className={styles.text1}>
        The manifest
      </div>
      <div className={styles.text2}>
        The Manifest is a curated gallery of the most direct ways to advance self sovereignty & the global decentralised fabrication renaissance through web3, cc0, NFTs, web3 fashion, DAOs, and the open metaverse. Personally hand selected by Emma-Jane MacKinnon-Lee.
      </div>
      <div className={styles.text3}>
        Young letters to a vc
      </div>
      <div className={styles.text4}>
        Web3 CC0 Open Library
      </div>
      <div className={styles.text5}>
        Make derivatIVes
        <br /><br />
        ---
      </div>
      <div className={styles.text6}>
        cc0 materials
      </div>
      <div className={styles.text7}>
        Sub-thread 
      </div>
      <div className={styles.text8}>
        From text to textiles, from stores to stories— every week we take a confidential behind the scenes look chronicling diverse experiences and accounts of some of the most pivotal, impactful and transformative narratives that make up the real fabric of fashion.
      </div>

      <BlueButton
        className={styles.buttonView}
        link=''
      >

        View
      </BlueButton>
      <BlueButton
        className={styles.buttonSubscribe}
        link=''
      >
        Subscribe
      </BlueButton>
      <BlueButton
        className={styles.buttonLibrary}
        link=''
      >
        Go to library
      </BlueButton>
      <BlueButton
        className={styles.buttonCreate}
        link=''
      >
        Create
      </BlueButton>
      <BlueButton
        className={styles.buttonRead}
        link=''
      >
        Read
      </BlueButton>
    </div>
  )
}

export default FreedomSection