import React, { useRef } from 'react'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

const packs = []

const HyperUtilitySection = () => {

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <div className={styles.hyperUtilityWrapper}>
      <div className={styles.smallTitle}>
        BIG BOLD TEXT SAYING; 
      </div>
      <div className={styles.title}>
        HYPERUTILITY PACKS
      </div>
      <div className={styles.swiperWrapper}>
        <Swiper
          spaceBetween={5}
          slidesPerView={5}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current
    
              // Re-init navigation
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
          onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {
            packs.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>test1</div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.container}>
          <button ref={navigationPrevRef} >
            <img src='/images/homepage/leftarrow.png' className={styles.backButton} />
          </button>
          <button ref={navigationNextRef} >
            <img src='/images/homepage/rightarrow.png' className={styles.nextButton} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HyperUtilitySection