import React from 'react'
import styles from './styles.module.scss'

const AchieveItem = props => {
  const { year, title, children } = props
  return (
    <div className={styles.achiveItemWrapper}>
      <div className={styles.year}>
        { year }
      </div>
      <div className={styles.title}>
        { title }
      </div>
      <div className={styles.description}>
        { children }
      </div>
    </div>
  )
}

export default AchieveItem