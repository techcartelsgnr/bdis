import React, { useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import "./highlightsingleslider.css"
import { EffectCoverflow } from 'swiper/modules';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const removeHtmlTags = (htmlString, numOfStr) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
  };

const HighlightSingleSlider = ({
    highlightpagedata // Changed from facilitysingleslider to match prop name passed from parent
}) => {
    console.log('Highlight Data Slice with ID', highlightpagedata)
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
                    navigation={false} 
                    modules={[EffectCoverflow, Pagination,Autoplay]} 
                    className="mySwiper myswiper2 "   
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
                            highlightpagedata?.map((item, index) => ( // Changed from facilitysingleslider to facility
                                <SwiperSlide className='hero-slider' key={item.id || index}>
                                    <div className="event-item" style={{height: '300px',width: 'auto',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                                        <div className="event-img" style={{height: '300px',width: 'auto',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                                            <img src={item.other_images} alt="" style={{height: '100%',width: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center'}} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }
        </>
    )
}

export default HighlightSingleSlider