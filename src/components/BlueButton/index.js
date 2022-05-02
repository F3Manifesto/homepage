import React from 'react'
import styles from './styles.module.scss'

const BlueButton = props => {
  const { link, children, className } = props
  return (
    <a
      href={link}
      className={[styles.blueButtonWrapper, className].join(' ')}
      target='_blank'
    >
      { children }
    </a>
  )
}

export default BlueButton