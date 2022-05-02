import React from 'react'
import styles from './styles.module.scss'

const BuyBadge = props => {
  
  const { link, label, className, id } = props

  return (
    <a
      className={[styles.buyBadgeWrapper, className].join(' ')}
      href={link}
      target='_blank'
      id={id}
    >
      <img
        src='/images/homepage/badge.png' 
        className={styles.badgeImage}
        alt='Buy Digital Badge'
      />
      <div
        className={styles.label}
      >
        { label }
      </div>
    </a>
  )
}

export default BuyBadge