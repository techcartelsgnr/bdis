import React, { useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./facilityslider.css"


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const removeHtmlTags = (htmlString, numOfStr) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
  };





const FacilitySlider = ({
        facility        
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
                    <Swiper navigation={false} modules={[Autoplay,Navigation]} className="mySwiper myswiper2 event-slider" slidesPerView={1}  spaceBetween={10}
                    // pagination={{
                    //   clickable: true,
                    // }}
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
                            facility.map((item, index) => (
                                <SwiperSlide className='hero-slider' key={item.id || index}>

                                    <div className="event-item">

                                        <div className="event-img">
                                            <img src={item.front_image} alt="" />
                                        </div>
                                        <div className="event-info">
                                            <div className="event-meta">

                                            </div>
                                            <h4 className="event-title">
                                                <Link state={{id: item.id}} to={`/facility/${item.title.replace(/\s+/g, '-')}`}>{item.title}</Link>
                                            </h4>
                                            <p>
                                                {removeHtmlTags(item.desp, 100) + '...'}
                                            </p>

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

export default FacilitySlider