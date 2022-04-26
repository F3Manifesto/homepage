import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Loader from '@components/loader'
import styles from './styles.module.scss'

const Button = ({
  className, background, onClick, children, disabled, loading
}) => {
  console.log('loading: ', loading)
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.transparent]: background === 'transparent',
          [styles.black]: background === 'black',
        },
        className,
      )}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {!loading && children}
      {loading && (
        <Loader size='default' />
      )}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  background: PropTypes.oneOf(['transparent', 'black']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
}

Button.defaultProps = {
  className: '',
  background: 'transparent',
  onClick: () => {},
  disabled: false,
  children: null,
}

export default memo(Button)
