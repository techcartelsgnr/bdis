import React, { useEffect, useState } from 'react'
import Slider from '../../Components/HomeSlider/Slider'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getdata, inquirydata, principaldata } from '../../Redux/UserSlice';
import { toast } from 'react-toastify';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import FacilitySlider from '../../Components/FacilitySlider/FacilitySlider';
import TestimonialSlider from '../../Components/TestimonialSlider/TestimonialSlider';
import ActivitySlider from '../../Components/ActivitySlider/ActivitySlider';



const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Homedata, setHomedata] = useState({});
  // const  {homeData}= useSelector(state => state.user);
  // console.log("home data print============<", homeData);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const [loading, setLoading] = useState(false)

  const [PrincipalMessage, setPrincipalMessage] = useState([]);
  const messageDataRedux = useSelector((state) => state.user.principalData);

  const msgstatus = useSelector((state) => state.user.status);
  const msgerror = useSelector((state) => state.user.error);
  const [modelShow, setModelShow] = useState(false);
  const [videodata, setVideodata] = useState([]);

  const year = new Date().getFullYear();
const shortSession = `${year}-${String(year + 1).slice(-2)}`;



  // Inquiry Form submit state
  const [form, setForm] = useState({
    studentname: "",
    parentname: "",
    parentemail: "",
    parentphone: "",
    address: "",
    class: "",
    dob: "",
  });



  const handleChange = (e) => {
    console.log("laksdjfklasdjf", e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(inquirydata(form)).unwrap();
      console.log('fetchData2 =>', res);
      toast.success('Inquiry Submit Succefully')
      setModelShow(false);

    } catch (error) {
      toast.error(error.message);
      console.error('Error fetching data:', error);
    }


  };



  // Model show useEffect
  useEffect(() => {
    setTimeout(() => {
      setModelShow(true)
    }, 5000)
  }, [Homedata.length > 0])


  // key highlight api fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await dispatch(getdata()).unwrap();
        console.log('fetchData', result); // Debugging log
        setHomedata(result);
        console.log('Front Page Facility Data', result.facility)
        setVideodata(result.videosection);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);


  const removeHtmlTags = (htmlString, numOfStr) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
  };


  // principal message api fetch data
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const result2 = await dispatch(principaldata()).unwrap();
        console.log('fetchData2 =>', result2);
        setPrincipalMessage(result2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData2();
  }, []);

  return (

    <>
      <div className={modelShow ? "inquiry-form active" : "inquiry-form"}>
        <div className="form-part1">
          <div className="circle-rt" />
          <div className="circle-lb" />
          <div className="circle-rb" />
          <div className="form-center">
            <h3>
              Enquiry Form{" "}
              <span>
                <i className="bi bi-circle-fill" />
              </span>
            </h3>
            <h4>{shortSession}</h4>
            <form onSubmit={handleSubmit} id='slide-form'>
              {/* {/* Student Name * /} */}
              <label htmlFor="">Student's Name</label>
              <input
                type="text"
                name="studentname"
                onChange={handleChange}
                value={form.studentname}
                placeholder="Student's Name"
              />
              {/* {/* Parent Name * /} */}
              <label htmlFor="">Father's Name</label>
              <input
                type="text"
                name="parentname"
                onChange={handleChange}
                value={form.parentname}
                placeholder="Father's Name"
              />

              {/* {/* Parent Phone * /} */}
              <label htmlFor="">Mobile No.</label>
              <input
                type="text"
                name="parentphone"
                value={form.parentphone}
                onChange={handleChange}
                placeholder="Mobile No."
              />
              {/* {/* Parent Email * /} */}
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="parentemail"
                value={form.parentemail}
                onChange={handleChange}
                placeholder="Email"
              />
              {/* {/* Date of Birth * /} */}
              <label>Date of Birth</label>
              <input id="dob"
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange} />
              {/* {/* Class * /} */}
              <label>Class</label>
              <select name="class" value={form.class} onChange={handleChange}>
                <option value="">Select</option>
                <option value="UKG">UKG</option>
                <option value="Play-Group">Play-Group</option>
                <option value="PRE-NUR">PRE-NUR</option>
                <option value="KG">KG</option>
                <option value="LKG">LKG</option>
                <option value="NUR">NUR</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
                <option value="XI">XI</option>
              </select>
              {/* {/* Address * /} */}
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Locality"
              />

              {/* {/* Submit Button * /} */}
              <button
                className="form-submit"
                type="submit"
                value="SUBMIT YOUR QUERY"
              >SUBMIT YOUR QUERY</button>
            </form>
            <button onClick={() => setModelShow(false)} id="close-btn" style={{position: 'absolute', top: '10px', right: '10px', background: 'white', border: 'none', color: 'red', fontSize: '15px',borderRadius:'50%', display: window.innerWidth > 500 ? 'none' : 'block',padding:'2px 9px'}}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="form-part2">
          <div className="part2-center">
            <h2>BDIS</h2>
            <p>Blooming Dales International School</p>
            <div className="social-icon">
              <a href="https://www.facebook.com/BDIANS?mibextid=ZbWKwL" target='_blank'><i className="fa-brands fa-facebook-f" /></a>
              <a href="" target='_blank'><i className="fab fa-whatsapp" /></a>
              <a href="https://www.instagram.com/bdians.bdians?igsh=MTIwd2w4bjN0M21odA==" target='_blank'><i className="fa-brands fa-instagram" /></a>
              <a href="https://www.youtube.com/@bdis.edu.in" target='_blank'><i className="fa-brands fa-youtube" /></a>
              
              
            </div>
            <button onClick={() => setModelShow(false)} id="close-btn" style={{position: 'absolute', top: '10px', right: '10px', background: 'white', border: 'none', color: 'red', fontSize: '20px',borderRadius:'50%'}}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>





      <main className="main">



        {/* latest Form end */}


        {
          Homedata?.slider?.length > 0 && (
            <Slider slider={Homedata?.slider} />

          )

        }

        {/* feature area */}
        <div className="feature-area fa-negative">
          <div className="col-xl-9 ms-auto">
            <div className="feature-wrapper">
              <div className="row g-4">
                {
                  loading ? (
                    <h1 style={{ color: 'white' }}>Please wait...</h1>
                  ) : Homedata?.highlights?.length > 0 ? (
                    Homedata?.highlights?.slice(0, 4).reverse().map((item, index) => (
                      <div className="col-md-6 col-lg-3" key={index}>
                        <div className="feature-item">
                          <span className="count">{index + 1}</span>
                          <div className="feature-icon">
                            <Link to={`/highlight/${item.slug}`}>
                              <img src={item.image || ''} alt={item.title || 'Feature Image'} />
                            </Link>
                          </div>
                          <div className="feature-content">
                            <h4 className="feature-title">{item.title}</h4>
                            <p>{item.desp.replace(/<\/?p>/g, '')}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No data availble</p>
                  )
                }

              </div>
            </div>
          </div>
        </div>
        {/* feature area end */}
        {/* about area */}
        <div className="about-area pt-60 pb-60">
          <div className="container">
            {


              loading ? (
                <h1 style={{ color: 'white' }}>Please wait....</h1>
              ) : PrincipalMessage.length > 0 ? (
                PrincipalMessage.map((item, index) => (
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-4">
                      <div className="about-left wow fadeInLeft" data-wow-delay=".25s">





                        <div className="about-img" >
                          <div className="row g-4">
                            <div className="col-md-12">
                              <img className="img-1" src={item.image} alt="" />
                              <div className="about-experience mt-4">

                                <b className="text-center" style={{ textAlign: "center" }}>
                                  {item.name}

                                  <br />
                                  Principal
                                </b>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="about-right wow fadeInRight" data-wow-delay=".25s">
                        <div className="site-heading mb-3">
                          <span className="site-title-tagline">
                            <i className="far fa-book-open-reader" /> Principal's Message
                          </span>
                          {/* <h2 className="site-title">
        Our Education System <span>Inspires</span> You More.
      </h2> */}
                        </div>
                        <h4 className="about-text" style={{ fontWeight: "600", color: "black", lineHeight: "28px" }}>
                          {item.title}


                        </h4>
                        <p style={{ color: "black" }}>
                          {removeHtmlTags(item.desp)}

                        </p>
                        <div className="about-experience mt-2 col-2 p-message" style={{
                          padding: '0', cursor: 'pointer'
                        }}>


                          {/* <div
                         
                            className="text-center" style={{ textAlign: "center" }}>
                            {" "}
                            Read More
                          </div> */}

                        </div>
                        <br />

                      </div>
                    </div>
                  </div>

                ))
              ) : (
                <p>No data available</p>
              )
            }
          </div>
        </div>
        {/* about area end */}

        {/* management area */}
        <div className="management-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  
                  <h2 className="site-title">
                    Management & <span>Trusty</span>
                  </h2>
                 
                </div>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              

              <div className="col-lg-4 col-md-6">
                <div className="management-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="management-img">
                    <img 
                      src={'/m3.jpeg'} 
                      alt="Management Member" 
                      className="img-fluid" 
                      style={{
                        width: '100%',
                        borderRadius: '12px'
                      }}
                    />
                  </div>
                  <div className="management-content text-center" style={{textAlign: 'center'}}>
                    <h4 style={{marginTop: '10px',marginBottom: '5px', textAlign: 'center'}}>Dr. S.L. Sihag </h4>
                    <p className="designation" style={{fontWeight: 'bold', color: '#2c3e50', fontSize: '1.1em', textAlign: 'center'}}> Chairman</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="management-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="management-img">
                    <img 
                      src={'/m2.jpeg'} 
                      alt="Management Member" 
                      className="img-fluid" 
                      style={{
                        width: '100%',
                        borderRadius: '12px'
                      }}
                    />
                  </div>
                  <div className="management-content text-center">
                    <h4 style={{marginTop: '10px',marginBottom: '5px'}}>Mr Ajay Gupta </h4>
                    <p className="designation" style={{fontWeight: 'bold', color: '#2c3e50', fontSize: '1.1em'}}>Secretary</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="management-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="management-img">
                    <img 
                      src={'/m1.jpeg'} 
                      alt="Management Member" 
                      className="img-fluid" 
                      style={{
                        width: '100%',
                        borderRadius: '12px'
                      }}
                    />
                  </div>
                  <div className="management-content text-center">
                    <h4 style={{marginTop: '10px',marginBottom: '5px'}}>Mr. Shyam jain</h4>
                    <p className="designation" style={{fontWeight: 'bold', color: '#2c3e50', fontSize: '1.1em'}}> Treasurer</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="row mt-5">
              <div className="col-12 text-center">
                <p className="management-message">
                  Together, we strive to create an educational environment that nurtures excellence and innovation.<br />
                  Our commitment is to provide quality education that shapes future leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* management area end */}

        {/* facility area */}
        <div className="event-area bg py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">
                    <i className="far fa-book-open-reader" /> Facilities
                  </span>
                  <h2 className="site-title">
                    Our <span>Facilities</span>
                  </h2>
                  <p>
                    At Blooming Dales International School, we offer state-of-the-art
                    facilities to support academic excellence and holistic growth.
                  </p>
                </div>
              </div>
            </div>


            {
              Homedata?.facility?.length > 0 && (

                <FacilitySlider facility={Homedata?.facility} />
              )
            }
          </div>
        </div>
        {/* facility area end */}

        {/* video-area */}


        <div className="video-area">
          <div className="container">
            <div className="row g-4 pt-120">


              <div className="col-lg-8 wow fadeInRight" data-wow-delay=".25s">
                <div
                  className="video-content"
                  style={{
                    backgroundImage: `url('unnamed.jpg')`
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="video-wrapper">
                        <Link
                          target='_blank'
                          className="play-btn popup-youtube"
                          to="https://bdis.edu.in/360view/"
                        >
                          <i className="fas fa-play" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".25s">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline">
                    <i className="fas fa-street-view animate-icon"></i> Virtual Tour
                  </span>
                  <h3 className="site-title">
                    School <span>360° View</span>
                  </h3>
                  <p>
                    Experience the vibrant atmosphere of Blooming Dales International School through our virtual tour.
                  </p>
                </div>
              
                <Link to="https://bdis.edu.in/360view/" className="theme-btn mt-30" target='_blank'>
                  Learn More
                  <i className="fas fa-arrow-right-long" />
                </Link>
              </div>

            </div>
          </div>
        </div>
        {/* video-area end */}

        {/* 360 View Section */}
        {/* <div className="view360-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">
                    <i className="fas fa-street-view animate-icon"></i> Virtual Tour
                  </span>
                  <h2 className="site-title">
                    School <span>360° View</span>
                  </h2>
                  <p>
                    Experience the vibrant atmosphere of Blooming Dales International School through our virtual tour.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center g-4">
              <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="view360-box wow fadeInUp" data-wow-delay=".1s">
                  <Link to="https://bdis.edu.in/360view/" target="_blank" className="view360-item">
                    <div className="view360-icon" style={{
                      transition: 'transform 0.3s ease',
                      marginBottom: '5px',
                      width: '250px',
                      height: '180px'
                    }}>
                      <img
                        src={'unnamed.jpg'}
                        alt=""
                        style={{
                          borderRadius: '2%',
                          border: '.5px solid #555',
                          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                          transition: 'transform 0.3s ease',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                    <h4 style={{ paddingTop: '5px', marginBottom: '5px' }}>Classrooms</h4>
                    <div
                      className="view360-btn"
                      style={{
                        background: 'linear-gradient(45deg, #7D1321, black)',
                        padding: '5px 15px',
                        borderRadius: '25px',
                        color: '#fff',
                        fontWeight: '400',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        marginTop: '5px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, black, #7D1321)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, #7D1321, black)';
                      }}
                    >
                      View Now <i className="far fa-arrow-right animate-icon" style={{ fontSize: '8px' }}></i>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="view360-box wow fadeInUp" data-wow-delay=".2s">
                  <Link to="/360-view/laboratories" className="view360-item">
                    <div className="view360-icon" style={{
                      transition: 'transform 0.3s ease',
                      marginBottom: '5px',
                      width: '250px',
                      height: '180px'
                    }}>
                      <img
                        src={'bg.jpg'}
                        alt=""
                        style={{
                          borderRadius: '2%',
                          border: '.5px solid #555',
                          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                          transition: 'transform 0.3s ease',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                    <h4 style={{ paddingTop: '5px', marginBottom: '5px' }}>Laboratories</h4>
                    <div
                      className="view360-btn"
                      style={{
                        background: 'linear-gradient(45deg, #7D1321, black)',
                        padding: '5px 15px',
                        borderRadius: '25px',
                        color: '#fff',
                        fontWeight: '400',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        marginTop: '5px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, black, #7D1321)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, #7D1321, black)';
                      }}
                    >
                      View Now <i className="far fa-arrow-right animate-icon" style={{ fontSize: '8px' }}></i>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="view360-box wow fadeInUp" data-wow-delay=".3s">
                  <Link to="/360-view/playground" className="view360-item">
                    <div className="view360-icon" style={{
                      transition: 'transform 0.3s ease',
                      marginBottom: '5px',
                      width: '250px',
                      height: '180px'
                    }}>
                      <img
                        src={'bg.jpg'}
                        alt=""
                        style={{
                          borderRadius: '2%',
                          border: '.5px solid #555',
                          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                          transition: 'transform 0.3s ease',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                    <h4 style={{ paddingTop: '5px', marginBottom: '5px' }}>Playground</h4>
                    <div className="view360-btn" style={{
                      background: 'linear-gradient(45deg, #7D1321, black)',
                      padding: '5px 15px',
                      borderRadius: '25px',
                      color: '#fff',
                      fontWeight: '400',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      marginTop: '5px'
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, black, #7D1321)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, #7D1321, black)';
                      }}
                    >
                      View Now <i className="far fa-arrow-right animate-icon" style={{ fontSize: '8px' }}></i>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="view360-box wow fadeInUp" data-wow-delay=".4s">
                  <Link to="/360-view/library" className="view360-item">
                    <div className="view360-icon" style={{
                      transition: 'transform 0.3s ease',
                      marginBottom: '5px',
                      width: '250px',
                      height: '180px'
                    }}>
                      <img
                        src={'bg.jpg'}
                        alt=""
                        style={{
                          borderRadius: '2%',
                          border: '.5px solid #555',
                          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                          transition: 'transform 0.3s ease',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                    <h4 style={{ paddingTop: '5px', marginBottom: '5px' }}>Library</h4>
                    <div className="view360-btn" style={{
                      background: 'linear-gradient(45deg, #7D1321, black)',
                      padding: '5px 15px',
                      borderRadius: '25px',
                      color: '#fff',
                      fontWeight: '400',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      marginTop: '5px'
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, black, #7D1321)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, #7D1321, black)';
                      }}
                    >
                      View Now <i className="far fa-arrow-right animate-icon" style={{ fontSize: '8px' }}></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Award section */}
        <div className="course-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">
                    <i className="far fa-book-open-reader" /> Our Awardes
                  </span>
                  <h2 className="site-title">
                    Honors and <span>Achievements</span>
                  </h2>
                  <p>
                    "Achievements that Define Us: Blooming Dales International School"
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {


                Homedata?.achievement?.length > 0 && (
                  Homedata?.achievement.map((item, index) => (

                    <div className="col-md-6 col-lg-4">
                      <div className="course-item wow fadeInUp" data-wow-delay=".25s">
                        <div className="course-img">

                          <img src={item.front_image} alt="" />
                          <a href="#" className="btn">
                            <i className="far fa-link" />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-meta">

                          </div>
                          <h4 className="course-title">
                            <a href="#">{item.title}</a>
                          </h4>
                          <p className="course-text">
                            {removeHtmlTags(item.desp)}
                          </p>
                          <div className="course-bottom">

                          </div>
                        </div>
                      </div>
                    </div>
                  )

                  )
                )
              }

            </div>
          </div>
        </div>
        {/* Award section end */}
        {/* video-area */}


        <div className="video-area">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".25s">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline ">
                    <i className="far fa-book-open-reader" /> BDIS School
                  </span>
                  <h2 className="site-title">
                    {/* Let's Check Our <span>Latest</span> Video */}
                    {videodata?.length > 0 ? videodata[0].title : '--'}

                  </h2>
                </div>
                <p className="about-text">
                  {videodata?.length > 0 ? (removeHtmlTags(videodata[0].desp)) : '--'}
                </p>
                <Link to={videodata?.length > 0 ? videodata[0].video_link
                  : '--'} className="theme-btn mt-30" target='_blank'>
                  Learn More
                  <i className="fas fa-arrow-right-long" />
                </Link>
              </div>
              <div className="col-lg-8 wow fadeInRight" data-wow-delay=".25s">
                <div
                  className="video-content"
                  style={{
                    backgroundImage: `url(${videodata?.length > 0 ? videodata[0].front_image : ''})`
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="video-wrapper">
                        <Link
                          target='_blank'
                          className="play-btn popup-youtube"
                          to={videodata?.length > 0 ? videodata[0].video_link
                            : '--'}
                        >
                          <i className="fas fa-play" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* video-area end */}

        {/* gallery-area */}
        <div className="gallery-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">
                    <i className="far fa-book-open-reader" /> Gallery
                  </span>
                  <h2 className="site-title">
                    Our Photo <span>Gallery</span>
                  </h2>
                  <p>
                    Explore our photo gallery to relive memorable moments of learning,
                    celebration, and achievements. Each picture reflects the vibrant
                    spirit of our school community.
                  </p>
                </div>
              </div>
            </div>
            <div className="row popup-gallery">
              {
                Homedata?.gallery?.length > 0 && (
                  <>
                    {Homedata.gallery.slice(0,6).map((item, index) => (
                      <div className="col-md-4 wow fadeInUp" data-wow-delay=".25s" key={index}>
                        <div className="gallery-item">
                          <div className="gallery-img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="gallery-content">
                            <Link
                              className="gallery-link"
                              to={'/gallery'}
                            >
                              <i className="fal fa-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="col-12 text-center mt-4">
                      <Link to="/gallery" className="theme-btn">View All Gallery <i className="far fa-arrow-right"></i></Link>
                    </div>
                  </>
                )
              }

            </div>
          </div>
        </div>
        {/* gallery-area end */}

        {/* Testimonial Section pending */}
        {/* testimonial area */}
        <div className="testimonial-area ts-bg pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline" style={{ color: 'white', border: 'none' }}>
                    <i className="far fa-book-open-reader" /> Testimonials
                  </span>
                  <h2 className="site-title text-white">
                    What Our Students <span style={{ color: 'white' }}>Say's</span>
                  </h2>
                  <p className="text-white">
                    Discover what our students have to say about their experiences,
                    the supportive environment, and how our school has helped them
                    grow academically, socially, and personally.
                  </p>
                </div>
              </div>
            </div>
            {
              Homedata?.testimonial?.length > 0 && (
                <TestimonialSlider testimonial={Homedata?.testimonial} />

              )

            }

          </div>
        </div>
        {/* testimonial area end */}

        {/* Activities Section */}
        <div className="blog-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">
                    <i className="far fa-book-open-reader" /> Our Activities
                  </span>
                  <h2 className="site-title">
                    Latest<span> Activities</span>
                  </h2>
                  <p>
                    Discover the latest happenings and events at our school,
                    highlighting student achievements, exciting programs, and
                    unforgettable moments.
                  </p>
                </div>
              </div>
            </div>
            {
              Homedata?.activity?.length > 0 && (
                <ActivitySlider activity={Homedata?.activity} />
              )
            }
            {/* <div className="row">
              {
                Homedata?.activity?.length > 0 && (
                  [...Homedata.activity].reverse().slice(0, 3).map((item, index) => (

                    <div className="col-md-6 col-lg-4">
                      <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                        <div className="blog-date">
                          <i className="fal fa-calendar-alt" /> {item.date}
                        </div>
                        <div className="blog-item-img">
                          <Link to={`/activities/${item.id}`}>
                            <img src={item.front_image} alt="Thumb" />
                          </Link>
                        </div>
                        <div className="blog-item-info">
                          <div className="blog-item-meta">
                            <ul>
                            
                            </ul>
                          </div>
                          <h4 className="blog-title">
                            <Link to={`/activities/${item.id}`}>{item.title}</Link>
                          </h4>
                          <p>
                            {removeHtmlTags(item.desp, 50)}...
                          </p>
                         
                        </div>
                      </div>
                    </div>
                  ))
                )
              }

            </div> */}
          </div>
        </div>
        {/* Activities Section end */}

      </main >
    </>


  )
}

export default Home