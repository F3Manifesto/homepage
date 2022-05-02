import React, { useRef } from 'react'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

const packs = [
  {
    url: '/images/homepage/packs/pack1.png'
  },
  {
    url: '/images/homepage/packs/pack2.png'
  },
  {
    url: '/images/homepage/packs/pack3.png'
  },
  {
    url: '/images/homepage/packs/pack4.png'
  },
  {
    url: '/images/homepage/packs/pack1.png'
  },
  {
    url: '/images/homepage/packs/pack2.png'
  },
  {
    url: '/images/homepage/packs/pack3.png'
  },
  {
    url: '/images/homepage/packs/pack3.png'
  }
]

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
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            console.log(swiper)
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
          // onSlideChange={(swiper) => {
          //   const slides = swiper.slides
          //   const sliderClasses = slides.map(item => item.className)
          //   const activeIndex = sliderClasses.findIndex(item => item.search('swiper-slide-active') >= 0)
          //   if (activeIndex < 0) return
          //   const isOdd = activeIndex % 2
          //   console.log('isOdd: ', isOdd)

          //   swiper.slides.forEach((item, index) => {
          //     if (isOdd == index % 2) {
          //       item.classList.remove('slider--even')
          //       item.classList.add('slider--odd')
          //     } else {
          //       item.classList.remove('slider--odd')
          //       item.classList.add('slider--even')
          //     }
          //   })

          //   console.log('swiper: ', swiper.slides)
          // }
          // }
          onTransitionStart={(swiper) => {
            const slides = swiper.slides
            const sliderClasses = slides.map(item => item.className)
            const activeIndex = sliderClasses.findIndex(item => item.search('swiper-slide-active') >= 0)
            if (activeIndex < 0) return
            const isOdd = activeIndex % 2
            console.log('isOdd: ', isOdd)

            swiper.slides.forEach((item, index) => {
              if (isOdd == index % 2) {
                item.classList.remove('slider--even')
                item.classList.add('slider--odd')
              } else {
                item.classList.remove('slider--odd')
                item.classList.add('slider--even')
              }
            })

            console.log('swiper: ', swiper.slides)
          }
          }
        >
          {
            packs.map((item, index) => {
              const { url } = item
              return (
                <SwiperSlide
                  key={index}
                  className={index % 2 == 0 ? 'slider--odd' : 'slider--even'}
                >
                  <div className={styles.packItem}>
                    <img src={url} alt={`pack_${index}`}/>
                  </div>
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