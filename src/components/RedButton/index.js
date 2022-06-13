import React from 'react'
import styles from './styles.module.scss'

const RedButton = props => {
  const { link, children, className } = props
  return (
    <a
      href={link}
      className={[styles.redButtonWrapper, className].join(' ')}
      target='_blank'
    >
      { children }
    </a>
  )
}

export default RedButton