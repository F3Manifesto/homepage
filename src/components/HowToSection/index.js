import React, { useState, useRef } from 'react'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

import ProductItem from './ProductItem'

import {
  makeProductList,
  collectProductList,
  sellProductList,
  useProductList
} from './data'

const categoryList = [
  'Make',
  'Collect',
  'Distro',
  'Use'
]

SwiperCore.use([Navigation])

const HowToSection = () => {
  const [currentCategory, setCurrentCategory] = useState(0)
  // const swiper = useSwiper()


  const getCurrentProductList = () => {
    if (currentCategory === 0) return makeProductList
    if (currentCategory === 1) return collectProductList
    if (currentCategory === 2) return sellProductList
    if (currentCategory === 3) return useProductList
    return []
  }

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  // const gotoNextSlider = () => {
  //   swiper.slideNext()
  // }

  // const gotoPrevSlider = () => {
  //   swiper.slidePrevious()
  // }

  return (
    <div className={styles.howToSectionWrapper}>
      <ul className={styles.category}>
        <li>How to:</li>
        {
          categoryList.map((item, index) => {
            return (
              <li

                className={[styles.selectable, index === currentCategory ? styles.selected : ''].join(' ')}
                onClick={() => setCurrentCategory(index)}
              >
                {item}
              </li>
            )
          })
        }
      </ul>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>

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
            getCurrentProductList().map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductItem
                    image={item.image}
                    title={item.title}
                    seller={item.seller}
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.container}>
          <button ref={navigationPrevRef} >
            <img src='/images/homepage/backward-button.png' className={styles.backButton} />
          </button>
          <button ref={navigationNextRef} >
            <img src='/images/homepage/forward-button.png' className={styles.nextButton} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HowToSection