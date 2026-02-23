import React, { useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import "../AboutSlider/aboutslider.css"
import { EffectCoverflow } from 'swiper/modules';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const removeHtmlTags = (htmlString, numOfStr) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
  };





const AboutSlider = ({
    aboutslider
}) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const setLoadingFalse = () => {
            setLoading(false);
        };

        const timer = setTimeout(() => {
            setLoadingFalse();
        }, 150);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);



    return (
        <>

            {
                loading ? (
                    ''
                ) : (
                    <Swiper 

                    navigation={false} modules={[EffectCoverflow, Pagination,Autoplay]} className="mySwiper myswiper2 "   
                    // pagination={{
                    //   clickable: true,
                    // }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    loop={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                    }}
                    autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                    >
                        {
                            aboutslider.map((item, index) => (
                                <SwiperSlide className='hero-slider' key={item.id || index}>

                                    <div className="event-item">

                                        <div className="event-img">
                                            <img src={item.other_images} alt="" />
                                        </div>
                                        
                                    </div>


                                </SwiperSlide>
                            )
                            )
                        }

                    </Swiper>
                )
            }



        </>









    )
}

export default AboutSlider