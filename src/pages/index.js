import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import Button from "@components/Button";
import { getAccount } from "@selectors/user.selectors";
import { getChainId } from "@selectors/global.selectors";
import {
  openConnectMetamaskModal,
  openSignupModal,
  openCryptoOptionsModal,
  openSwitchNetworkModal,
} from "@actions/modals.actions";
import { getUser } from "@helpers/user.helpers";
import { POLYGON_CHAINID } from "@constants/global.constants";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./styles.module.scss";
import HowToSection from "@components/HowToSection";
import FreedomSection from "@components/FreedomSection";
import CypherPunkSection from "@components/CypherPunkSection";
import HyperUtilitySection from "@components/HyperUtilitySection";
import GuideSection from "@components/GuideSection";
import PatronSection from "@components/PatronSection";
import BuyBadge from "@components/BuyBadge";
import QRCodeBounce from "@components/QRCodeBounce";
import ModelsSection from "@components/ModelsSection";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Landing(props) {
  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    screenWidth > 707 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("here");
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

      gsap
        .timeline()
        .from("#title", { y: -100 })
        .from("#side_part", { x: 100 })
        .from("#image_window", { scale: 0, transformOrigin: "50% 50%" })
        .from("#init_image1", { scale: 0, transformOrigin: "50% 50%" })
        .from("#init_image3", { scale: 0, transformOrigin: "50% 50%" })
        .from("#init_image2", { scale: 0, transformOrigin: "50% 50%" })
        .from("#init_image4", { scale: 0, transformOrigin: "50% 50%" });

      gsap
        .timeline()
        .from("#badge1", { scale: 0, transformOrigin: "center center" })
        .from("#badge2", { scale: 0, transformOrigin: "center center" })
        .from("#badge3", { scale: 0, transformOrigin: "center center" })
        .from("#badge4", { scale: 0, transformOrigin: "center center" });

      gsap
        .timeline({
          defaults: { duration: 1 },
          scrollTrigger: {
            trigger: `#side_part`,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .to("#side_part", { yPercent: 90, duration: 1 });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".initSection",
          start: "top 20%",
          end: "20% 100%",
          scrub: 1,
          onEnter: () => {
            gsap.to("#back_image1", { opacity: 1, duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to("#back_image1", { opacity: 0, duration: 0.5 });
          },
        },
      });
      // .fromTo("#back_image1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)

      gsap.timeline({
        scrollTrigger: {
          trigger: ".initSection",
          start: "20% top",
          end: "40% 100%",
          scrub: 1,
          onEnter: () => {
            gsap.to("#back_image2", { opacity: 1, duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to("#back_image2", { opacity: 0, duration: 0.5 });
          },
        },
      });
      // .fromTo("#back_image2", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)

      gsap.timeline({
        scrollTrigger: {
          trigger: ".initSection",
          start: "40% top",
          end: "60% 100%",
          scrub: 1,
          onEnter: () => {
            gsap.to("#back_image3", { opacity: 1, duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to("#back_image3", { opacity: 0, duration: 0.5 });
          },
        },
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".initSection",
          start: "60% top",
          end: "80% 100%",
          scrub: 1,
          onEnter: () => {
            gsap.to("#back_image4", { opacity: 1, duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to("#back_image4", { opacity: 0, duration: 0.5 });
          },
        },
      });
      // .fromTo("#back_image3", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)
    }
  }, []);

  return (
    <>
      {
        // !isMobile ?
        <div className={styles.wrapper}>
          <section className={styles.initSection} id="init_section">
            <div className={styles.imageWindow} id="image_window">
              <video
                className={[styles.backImage, styles.show].join(" ")}
                autoPlay
                muted
                loop
                playsInline
                webkitPlaysInline
                id="back_image1"
              >
                <source src="/video/tvscene.mp4" />
                </video>
            </div>

            <div className={styles.qrCodeGround}>
              <QRCodeBounce />
            </div>
            {/* <div className={styles.qrCodeGround}>
              <div className={[styles.qrCode, styles.qrCode2].join(' ')}>
                <img src='/images/homepage/qrCode.png' className={styles.qrCodeImage} />
              </div>
            </div>
            <div className={styles.qrCodeGround}>
              <div className={[styles.qrCode, styles.qrCode3].join(' ')}>
                <img src='/images/homepage/qrCode.png' className={styles.qrCodeImage} />
              </div>
            </div>
            <div className={styles.qrCodeGround}>
              <div className={[styles.qrCode, styles.qrCode4].join(' ')}>
                <img src='/images/homepage/qrCode.png' className={styles.qrCodeImage} />
              </div>
            </div> */}

            <div className={styles.mainPart}>
              <h1 id="title">
                F<sub>3</sub>Manifesto
              </h1>

              <img
                src="/images/homepage/1.png"
                className={styles.initImage1}
                id="init_image1"
              />
              <img
                src="/images/homepage/2.png"
                className={styles.initImage3}
                id="init_image3"
              />
              <img
                src="/images/homepage/3.png"
                className={styles.initImage2}
                id="init_image2"
              />
              <img
                src="/images/homepage/4.png"
                className={styles.initImage4}
                id="init_image4"
              />

              <BuyBadge
                className={styles.badge1}
                id={"badge1"}
                link={"https://popup.f3manifesto.xyz/"}
                label={"BUY PHYSICAL"}
              />
              <BuyBadge
                className={styles.badge2}
                id={"badge2"}
                link={"https://market.f3manifesto.xyz/"}
                label={"BUY DIGITAL"}
              />
              <BuyBadge
                className={styles.badge3}
                id={"badge3"}
                link={"https://auctions.f3manifesto.xyz/"}
                label={"CYPHER KEY AUCTIONS"}
              />
              <BuyBadge
                className={styles.badge4}
                id={"badge4"}
                link={"https://web3fashion.f3manifesto.xyz/"}
                label={"READ MANIFESTO"}
              />
            </div>
            <div className={styles.sidePart} id="side_part">
              <a className={styles.learnMoreText} href="" target="_blank">
                NFT
              </a>
              <div className={styles.line} id="line_arrow"></div>
            </div>
            <div className={styles.arrowDown}></div>
          </section>
          <section className={styles.howtoSection} id="howto_section">
            <HowToSection />
          </section>
          <section className={styles.modelsSection} id="models_section">
            <ModelsSection />
          </section>
          <section className={styles.freedomSection} id="freedom_section">
            <FreedomSection />
          </section>
          <section className={styles.cypherPunkSection} id="cypherpunk_section">
            <CypherPunkSection />
          </section>
          <section
            className={styles.hyperUtilitySection}
            id="hyperutility_section"
          >
            <HyperUtilitySection />
          </section>
          <section className={styles.guideSection} id="guide_section">
            <GuideSection />
          </section>
          <section className={styles.patronSection} id="patron_section">
            <PatronSection />
          </section>
        </div>
      }
    </>
  );
}

export default Landing;
