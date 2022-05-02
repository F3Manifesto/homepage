import React from 'react'
import styles from './styles.module.scss'

const YellowButton = props => {
  const { link, children, className } = props
  return (
    <a
      href={link}
      className={[styles.yellowButtonWrapper, className].join(' ')}
      target='_blank'
    >
      { children }
    </a>
  )
}

export default YellowButton