import React, { useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./testimonialslider.css"


// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const removeHtmlTags = (htmlString, numOfStr) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};



const TestimonialSlider = ({
    testimonial
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
                    <Swiper navigation={false} modules={[Autoplay, Navigation]} className="testimonial-slider mySwiper myswiper2" slidesPerView={1} spaceBetween={10}
                        loop={true}
                        //    pagination={{
                        //     clickable: true,
                        //   }}
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
                            testimonial.map((item, index) => (
                                <SwiperSlide key={item.id || index}>
                                    <div className="testimonial-item">

                                        <div className="testimonial-video">
                                            <video
                                                src={item.video}
                                                controls
                                                className="w-100"
                                                // poster={item.front_image}
                                                style={{ height: '400px', objectFit: 'cover',borderRadius:'15px 15px 0 0' }}
                                                onPlay={(e) => {
                                                    // Pause all other videos
                                                    document.querySelectorAll('video').forEach(video => {
                                                        if (video !== e.target) {
                                                            video.pause();
                                                        }
                                                    });
                                                    // Stop slider autoplay when video plays
                                                    const swiper = document.querySelector('.testimonial-slider').swiper;
                                                    swiper.autoplay.stop();
                                                }}
                                                onPause={(e) => {
                                                    // Resume slider autoplay when video pauses
                                                    const swiper = document.querySelector('.testimonial-slider').swiper;
                                                    swiper.autoplay.start();
                                                }}
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>

                                        <div className="testimonial-rate">
                                            <i className="fas fa-star" />
                                           <i className="fas fa-star" />
                                           <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="testimonial-quote">
                                            <p>
                                                "{removeHtmlTags(item.desp)}"
                                            </p>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="testimonial-author-img">
                                                <img src={item.front_image} alt="" />
                                            </div>
                                            <div className="testimonial-author-info">
                                                <h4>{item.name}</h4>
                                                <p>Parents</p>
                                            </div>
                                        </div>
                                        <span className="testimonial-quote-icon">
                                            <i className="far fa-quote-right" />
                                        </span>


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

export default TestimonialSlider