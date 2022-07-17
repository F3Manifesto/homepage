import React from "react";
import BlueButton from "@components/BlueButton";
import styles from "./styles.module.scss";

const FreedomSection = () => {
  return (
    <div className={styles.freedomSectionWrapper}>
      <div className={styles.line1}></div>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <video className={styles.freedom3DImage} playsInline autoPlay muted loop>
        <source src="/video/cc0arc.mp4" type="video/mp4" />
      </video>

      <div className={styles.title}>
        FREEDOM TO PLAY <br />
        ENTER THE CC0 ARCADE
      </div>
      <div className={styles.description}>
        It empowers and supports directly incentivised CC0.
        <br />
        <br />
        The CC0 Arcade challenges you to get more from the time you spent wasted
        staring at glowing screens.
        <br />
        <br />
        Now, each moment, each credit, each effort that you put in to the
        creative machines records, propagates and scales the full diverse extent
        and quality of content and culture that are not only free in spirit but
        interesting and interactive enough to keep you engaged in your own self
        sovereign journeys.
      </div>
      <a href="https://web3fashionmanifesto.f3manifesto.xyz/manifesto/1/11/" target="_blank">
        <img
          className={styles.imageInsert}
          src="/images/homepage/insertCC0.png"
        />
      </a>
      <img
        className={styles.imageFreedomFrame}
        src="/images/homepage/freedom_frame.png"
      />
      <img className={styles.mouseImage} src="/images/homepage/mouse.png" />

      <a
        className={styles.circle1}
        href="https://www.youtube.com/watch?v=K9NMXDPTnvg"
        target="_blank"
      >
        <img
          src="/images/homepage/sticky.png"
          className={styles.imageInfluence}
        />
      </a>
      <a
        className={styles.circle2}
        href="https://docs.f3manifesto.xyz/axioms-and-creed/cc0-and-ip-freedom"
        target="_blank"
      >
        <img
          src="/images/homepage/rightclick.png"
          className={styles.imageInfluence}
        />
      </a>
      <a
        className={styles.circle3}
        href="https://www.mypocketempire.xyz/"
        target="_blank"
      >
        <img src="/images/homepage/mpe.png" className={styles.imageInfluence} />
      </a>

      <div className={styles.text1}>The manifest</div>
      <div className={styles.text2}>
        The Manifest is a curated gallery of the most direct ways to advance
        self sovereignty & the global decentralised fabrication renaissance
        through web3, cc0, NFTs, web3 fashion, DAOs, and the open metaverse.
        Personally hand selected by Emma-Jane MacKinnon-Lee.
      </div>
      <div className={styles.text3}>Letters to a young VC</div>
      <div className={styles.text4}>Web3 CC0 Open Library</div>
      <div className={styles.text5}>
        Make derivatives
        <br />
        <br />
        ---
      </div>
      <div className={styles.text6}>cc0 materials</div>
      <div className={styles.text7}>Sub-thread</div>
      <div className={styles.text8}>
        From text to textiles, from stores to stories— every week we take a
        confidential behind the scenes look chronicling diverse experiences and
        accounts of some of the most pivotal, impactful and transformative
        narratives that make up the real fabric of fashion.
      </div>

      <BlueButton
        className={styles.buttonView}
        link="https://themanifest.f3manifesto.xyz/"
      >
        View
      </BlueButton>
      <BlueButton
        className={styles.buttonSubscribe}
        link="https://mirror.xyz/f3manifesto.eth"
      >
        Subscribe
      </BlueButton>
      <BlueButton
        className={styles.buttonLibrary}
        link="https://web3cc0openlibrary.f3manifesto.xyz/"
      >
        Go to library
      </BlueButton>
      <BlueButton
        className={styles.buttonCreate}
        link="https://github.com/f3Manifesto/ccomaterials/ "
      >
        Create
      </BlueButton>
      <BlueButton
        className={styles.buttonRead}
        link="https://mirror.xyz/f3manifesto.eth"
      >
        Read
      </BlueButton>
      <div className={styles.arrowDown}></div>
    </div>
  );
};

export default FreedomSection;
