import React, { useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./slider.css"


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const removeHtmlTags = (htmlString, numOfStr) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
  };



const Slider = ({
    slider
}) => {

    console.log("slider", slider);
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
                    <Swiper navigation={false}     className="mySwiper myswiper2"
                    loop={true}
                    //  autoplay={{
                    //         delay: 3500,
                    //         disableOnInteraction: false,
                    //       }}
                          >
                        {
                            slider.map((item, index) => (
                                <SwiperSlide className='hero-slider' key={item.id || index}>

                                    <div className="hero-single"
                                        style={{ background: `url(${item.front_image})` }}
                                    >
                                        
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="hero-content">
                                                        <h6
                                                            className="hero-sub-title"
                                                           
                                                            style={{
                                                                color: "#FBF409",
                                                                WebkitTextStroke:'.2px black',
                                                                fontWeight:'800',
                                                                letterSpacing:'3.5px',
                                                                width:'100%',
                                                                textAlign:'center',
                                                                lineHeight: '.5',
                                                                paddingTop:'10px'
                                                            }}
                                                        >
                                                            <i className="far fa-book-open-reader" />
                                                            {/* {item.subtitle} */} Welcome To BDIS! 
                                                        </h6>
                                                        <h1
                                                            className="hero-title"
                                                            
                                                            style={{
                                                                width:'100%',
                                                                textAlign:'center',
                                                                position: 'relative',
                                                                lineHeight: '1'
                                                            }}
                                                        >
                                                            {item.title_first} {""}
                                                        </h1>
                                                        <h3
                                                        className='hero-title-2'
                                                            style={{
                                                              
                                                                fontWeight:'bold',
                                                                color:'#28166F',
                                                               
                                                                lineHeight: '1.4'
                                                            }}>
                                                            <span style={{ color: "#28166F",WebkitTextStroke:'.5px white' }}>{item.title_second} {item.title_third}</span> 
                                                        </h3>
                                                        <p 
                                                        className='hero-title-3'
                                                         style={{
                                                           
                                                            fontWeight:'500',
                                                            width:'fit-content',
                                                         
                                                            textAlign:'center',
                                                            lineHeight: '1.4',
                                                            // border:'1px solid red'
                                                        }}>
                                                            {removeHtmlTags(item.desp)}
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
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

export default Slider