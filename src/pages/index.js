import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

import Button from '@components/Button'
import { getAccount } from '@selectors/user.selectors'
import { getChainId } from '@selectors/global.selectors'
import {
  openConnectMetamaskModal,
  openSignupModal,
  openCryptoOptionsModal,
  openSwitchNetworkModal
} from '@actions/modals.actions'
import { getUser } from '@helpers/user.helpers'
import {
  POLYGON_CHAINID
} from '@constants/global.constants'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import styles from './styles.module.scss'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

function Landing(props) {
  const screenWidth = useWindowDimensions().width
  const [isMobile, setIsMobile] = useState(false)
  const account = useSelector(getAccount)
  const chainId = useSelector(getChainId)
  const user = useSelector(getUser)
  const dispatch = useDispatch()
   
  useEffect(() => {
    screenWidth > 707 ? setIsMobile(false) : setIsMobile(true)
  }, [screenWidth])

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log('here')
      gsap.registerPlugin(ScrollTrigger);

      // gsap.to('#side_part',
      // {
      //   yPercent: 100,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: "#side_part",
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: true
      //   }
      // })

      gsap.timeline()
        .from("#title", {y: -100})
        .from("#side_part", {x: 100})
        .from("#init_image1", {scale: 0, transformOrigin: 'center center'})
        .from("#init_image2", {scale: 0, transformOrigin: 'center center'})
        .from("#init_image3", {scale: 0, transformOrigin: 'center center'})
        .from("#init_image4", {scale: 0, transformOrigin: 'center center'})

      gsap.timeline({defaults: {duration: 1},
        scrollTrigger: {
          trigger: `#side_part`,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })
      .to("#side_part", {yPercent: 90, duration: 1})
    }
  }, []);


  return (
    <>
      {!isMobile ? (
        <div className={styles.wrapper}>
          <section className={styles.initSection} id='init_section'>
            <div className={styles.mainPart}>
              <h1 id='title'>
                F<sub>3</sub>Manifesto
              </h1>

              <div className={styles.imageWindow} id='image_window'>

              </div>

              <img src='/images/homepage/init_image1.png' className={styles.initImage1} id='init_image1' />
              <img src='/images/homepage/init_image2.png' className={styles.initImage2} id='init_image2' />
              <img src='/images/homepage/init_image3.png' className={styles.initImage3} id='init_image3' />
              <img src='/images/homepage/init_image4.png' className={styles.initImage4} id='init_image4' />

            </div>
            <div className={styles.sidePart} id='side_part'>
              <div className={styles.learnMoreText}>
                Learn More
              </div>
              <div className={styles.line} id='line_arrow'></div>
            </div>  
          </section>
          <section className={styles.howtoSection} id='howto_section'>
            <div className={styles.title}>
              How to:
            </div>
            <ul>
              <li>Make</li>
              <li>Collect</li>
              <li>Sell</li>
              <li>Use</li>
            </ul>
            <div className={styles.description}>
              multiple layers of different sized background divs with gradients ranging from transparent to close varieties of the full background blue. they shift in relation to each other, giving a shifting perspective impression
            </div>
          </section>
          <section className={styles.freedomSection} id='freedom_section'>
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
          </section>
          <section className={styles.cypherPunkSection} id='cypherpunk_section'>
            <img src='/images/homepage/zk_back.jpg' className={styles.zk_back} />
            <div className={styles.title}>
              ZK Cypherpunk Zeitgeist
            </div>
            <div className={styles.content}>
              <div className={styles.collection}>

              </div>  
              <div className={styles.description}>
                The visual keys that secure and surround us, and every channel through which information passes, are inherent and given their greatest expression in every NFT truly encapsulating the open value of creative free expression. 
                <br /><br />
                Advanced technologies through cryptography, ZK Proofs and ideographic keys operate almost like magic to the untrained eye. They give us enhancements, armaments and power far beyond our undressed origins. 
                <br /><br />
                All upcoming navigators of this neo-arcane age, alternates between fumbling and moving quick through all the same challenges as the rest of us, if we count ourselves among the hungry, humble and insatiably curious.
                <br />
                Cryptographic cyphers and proofs embedded within ideographic keys will be interwoven between the cypherpunk collection series and released in an asymmetry of both public and private mediums, auctions and digital and IRL settings. 
                <br /><br />
                Meet all of the navigators as their stories are spun on the loom. 
              </div>  
            </div>
          </section>
          <section className={styles.hyperUtilitySection} id='hyperutility_section'>
            <div className={styles.smallTitle}>
              BIG BOLD TEXT SAYING; 
            </div>
            <div className={styles.title}>
              HYPERUTILITY PACKS
            </div>
          </section>
          <section className={styles.guideSection} id='guide_section'>
            <div className={styles.title}>
              Znarky's Poignant Guide to NFTs
            </div>
          </section>
          <section className={styles.patronSection} id='patron_section'>
            <div className={styles.title}>
              BECOME A PATRON <br />
              &<br />
              JOIN THE DAO
            </div>
          </section>
        </div>
      ) : (
        <div className={styles.mobileWrapper}>
          <section className={styles.initSection}>
            <div className={styles.mainPart}>
              <h1>
                F<sub>3</sub>Manifesto
              </h1>
            </div>
            <div className={styles.sidePart}>
              <div className={styles.learnMoreText}>
                Learn More
              </div>
              <div className={styles.line}></div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default Landing
