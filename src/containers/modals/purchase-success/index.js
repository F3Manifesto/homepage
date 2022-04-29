import React from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import Button from '@components/buttons/button'
import Modal from '@components/modal'
import styles from './styles.module.scss'
import { closePurchaseSuccessModal } from '@actions/modals.actions'

const PurchaseSuccess = ({ className }) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closePurchaseSuccessModal())
  }

  const handleClick = (mode) => {
    dispatch(closePurchaseSuccessModal())
  }

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={'Success! See You There!'}
          titleStyle={styles.textCenter}
          className={className}
        >
          <div className={styles.footer}>
            <p className={styles.footerCaption}>
              <span>
                You will be sent your NFT Ticket shortly. 
              </span>
              {/* <p>
                You can stake your fashion for $MONA yield <a href="https://staking.digitalax.xyz/" target="_blank">here!</a>
              </p> */}
            </p>
            <div className={styles.selectWrapper}>
              <Button
                background="black"
                onClick={() => handleClick()}
                className={styles.button}
              >
                OKAY!
              </Button>
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  )
}

export default PurchaseSuccess