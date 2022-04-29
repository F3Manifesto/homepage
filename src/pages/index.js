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
import HowToSection from '@components/HowToSection'
import FreedomSection from '@components/FreedomSection'
import CypherPunkSection from '@components/CypherPunkSection'
import HyperUtilitySection from '@components/HyperUtilitySection'
import GuideSection from '@components/GuideSection'

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
      {
      // !isMobile ? 
      (
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
            <HowToSection />
          </section>
          <section className={styles.freedomSection} id='freedom_section'>
            <FreedomSection />
          </section>
          <section className={styles.cypherPunkSection} id='cypherpunk_section'>
            <CypherPunkSection />
          </section>
          <section className={styles.hyperUtilitySection} id='hyperutility_section'>
            <HyperUtilitySection />
          </section>
          <section className={styles.guideSection} id='guide_section'>
            <GuideSection />
          </section>
          <section className={styles.patronSection} id='patron_section'>
            <div className={styles.title}>
              BECOME A PATRON <br />
              &<br />
              JOIN THE DAO
            </div>
          </section>
        </div>
      )
      // : (
      //   <div className={styles.mobileWrapper}>
      //     <section className={styles.initSection}>
      //       <div className={styles.mainPart}>
      //         <h1>
      //           F<sub>3</sub>Manifesto
      //         </h1>
      //       </div>
      //       <div className={styles.sidePart}>
      //         <div className={styles.learnMoreText}>
      //           Learn More
      //         </div>
      //         <div className={styles.line}></div>
      //       </div>
      //     </section>
      //   </div>
      // )
      }
    </>
  )
}

export default Landing
