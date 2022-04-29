import React from 'react'
import styles from './styles.module.scss'

const CypherPunkSection = () => {
  return (
    <div className={styles.cypherPunkWrapper}>
      <img src='/images/homepage/zk_back.jpg' className={styles.zk_back} />
      <div className={styles.title}>
        ZK Cypherpunk Zeitgeist
      </div>
      <div className={styles.content}>
        <div className={styles.collection}>
          <img src='/images/zerorender.png' className={styles.image1} />
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
    </div>
  )
}

export default CypherPunkSection