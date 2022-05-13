import React from "react";
import AchieveItem from "./AchieveItem";
import AvatarPalette from "./AvatarPalette";
import styles from "./styles.module.scss";

const PatronSection = () => {
  return (
    <div className={styles.patronWrapper}>
      <div className={styles.introWrapper}>
        <div className={styles.introDesc}>
          Web3 Patron NFTs lets you buy directly into the heart of indie web3
          fashion.
          <br />
          <br />
          It is natively decentralised where anyone can purchase NFTs
          categorised across different tiers of access and utility.Specific and
          unique attributes for each Realm’s Patron NFTs will grow overtime and
          is outlined across the following pages. These attributes compound and
          evolve as this economy scales with the open metaverse.
          <br />
          <br />
          As of now, the Patron Contribution NFTs are categorised across three
          tiers, with each tier offering different levels of access, utility and
          content unlockables, both native and specialised to this realm/label
          and also to the broader web3 fashion economy. <br />
        </div>

        <div className={styles.introTitle}>PATRON TIERS</div>

        <div className={styles.achieveItems}>
          <AchieveItem title="TIER ONE">
            Early and Whitelisted Access to New Drip and Collections (2
            Collections Per Year). Map 2 the Metaverse Location Based Common NFT
            Collectibles. Everyday Patchwork Common Chronicle Mints. Common
            Access to the Distributed Network of Fashion Galleries for On-Site
            Minting and Other Unique Experiences.
          </AchieveItem>
          <AchieveItem title="TIER TWO">
            Early and Whitelisted Access to New Drip and Collections (4
            Collections Per Year). Map 2 the Metaverse Location Based Semi-Rare
            NFT Collectibles. Everyday Patchwork Semi-Rare Chronicle Mints.
            Semi-Rare Access to the Distributed Network of Fashion Galleries for
            On-Site Minting and Other Unique Experiences.
          </AchieveItem>
          <AchieveItem title="TIER THREE">
            Early and Whitelisted Access to New Drip and Collections (All Pieces
            Brought Forth). Map 2 the Metaverse Location Based Exclusive NFT
            Collectibles. Everyday Patchwork Exclusive Chronicle Mints.
            Exclusive Access to the Distributed Network of Fashion Galleries for
            On-Site Minting and Other Unique Experiences.
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
          Giving voice to a kind of cryptographic language creating portal
          hopping pathways between the metaverse and the streets.
          <br />
        </div>
      </div>

      <div className={styles.paletteWrapper}>
        <div className={styles.title}>
          BECOME A PATRON <br />
          &<br />
          JOIN THE DAO
        </div>
        <AvatarPalette />
      </div>
    </div>
  );
};

export default PatronSection;
