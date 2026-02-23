import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getHeaderdata } from '../../Redux/UserSlice';

const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [headerdata, setHeaderdata] = useState([]);
  const [loading, setLoading] = useState(false)
  const { Headerdata } = useSelector((state) => state.user)
  // console.log("Header section Selector Data", Headerdata.about);
  const [title, setTitle] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await dispatch(getHeaderdata()).unwrap();
        console.log('Header All Data', result); // Debugging log
        setHeaderdata(result);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* header area */}
      <header className="header">
        {/* header top */}
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrap">
              <div className="header-top-left">
                <div className="header-top-social">
                  <span>Follow Us: </span>
                  <Link to="https://www.facebook.com/bdis.edu.in/" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://www.instagram.com/bdis.edu.in/" target="_blank">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://www.youtube.com/@bdis.edu.in" target="_blank">
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link to="/" >
                    <i className="fab fa-whatsapp" />
                  </Link>
                </div>
              </div>
              <div className="header-top-right">
                <div className="header-top-contact">
                  <ul>
                   
                    <li>
                      <a href="#">
                        <i className="far fa-envelopes" />{" "}
                        <span
                          className="__cf_email__"
                          data-cfemail="fc95929a93bc99849d918c9099d29f9391"
                        >
                          bdismeetusharma@gmail.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+0154-2461423">
                        <i className="far fa-phone-volume" /> 0154-2461423
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navigation">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <div className="navbar-brand" onClick={() => nav('/')}>
                {/* <img src="assets/img/logo/logo.png" alt="logo"> */}
                <img
                  src="/bdis-logo-2.jpg"
                  alt="logo"

                />
              </div>
              <div className="mobile-menu-right">
                {/* <div class="search-btn">
                         <button type="button" class="nav-right-link search-box-outer"><i
                                 class="far fa-search"></i></button>
                     </div> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-mobile-icon">
                    <i className="far fa-bars" />
                  </span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                  <li className="nav-item" onClick={() => setTitle('home')}>
                    <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} to={'/'}>
                      Home
                    </Link>
                  </li>
                    <li  onClick={()=>{
                      if (title === 'about') {
                        setIsOpen(!isOpen)
                      } else {
                        setIsOpen(true)
                      }
                      setTitle('about')
                    }} className={`nav-item dropdown ${window.location.pathname.includes('/about') ? 'active' : ''}`} >
                    <Link
                      className={`nav-link dropdown-toggle ${window.location.pathname.includes('/about') ? 'active' : ''}`}
                      to={'/'}
                      data-bs-toggle="dropdown"
                    >
                      About Us
                    </Link>
                    <ul className={`dropdown-menu fade-down ${title === 'about' && isOpen ? 'show' : ''}`}>
                      {headerdata.about?.length > 0 ? (
                        headerdata.about?.map((item) => (

                          <li key={item.id}>
                            <Link className="dropdown-item"
                              to={`/about/${item.slug}`}>
                              {item.title}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li>No Data Available</li>
                      )}
                    </ul>


                  </li>
                  
                  
                    <li className="nav-item mega-menu dropdown" onClick={()=>{
                      if (title === 'pages') {
                        setIsOpen(!isOpen)
                      } else {
                        setIsOpen(true)
                      }
                      setTitle('pages')
                    }}>
                    <Link
                      className={`nav-link dropdown-toggle ${window.location.pathname.includes('/board-result') || 
                                                           window.location.pathname.includes('/examination-updates') ||
                                                           window.location.pathname.includes('/curriculum') ||
                                                           window.location.pathname.includes('/scholarship') ||
                                                           window.location.pathname.includes('/curriculars') ||
                                                           window.location.pathname.includes('/academic-calendar') ||
                                                          //  window.location.pathname.includes('/notification') ||
                                                           window.location.pathname.includes('/faq') ||
                                                           window.location.pathname.includes('/facility') ||
                                                           window.location.pathname.includes('/activity') ? 'active' : ''}`}
                      to={'/'}
                      data-bs-toggle="dropdown"
                    >
                      Insights
                    </Link>
                    <div className={`dropdown-menu fade-down ${title === 'pages' && isOpen ? 'show' : ''}`}>
                      <div className="mega-content">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12 col-sm-4 col-md-4">
                              <h5>Academics</h5>
                              <ul className="mega-menu-item">

                                <li>
                                  <Link className="dropdown-item" to={'/board-result'}>
                                    Board Results
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to={'/examination-updates'}>
                                    Examination Updates
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to={'/curriculum'}>
                                    Curriculum
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to={'/scholarship'}>
                                    Scholarship
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to={'/curriculars'}>
                                    Circulars
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to={'/academic-calendar'}>
                                    Academic Calendar
                                  </Link>
                                </li>
                                {/* <li>
                                  <Link className="dropdown-item" to={'/notification'}>
                                    Notification
                                  </Link>
                                </li> */}
                                 <li>
                                  <Link className="dropdown-item" to={'/faq'}>
                                    Faq
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-sm-4 col-md-4">
                              <h5>Facilities</h5>
                              <ul className="mega-menu-item">
                                {headerdata.facility?.length > 0 ? (
                                  headerdata.facility?.map((item) => (
                                    <li key={item.id}>
                                      <Link className="dropdown-item"
                                        
                                        to={`/facility/${item.slug}`}>
                                        {item.title}
                                      </Link>
                                      
                                    </li>
                                  ))
                                ) : (
                                  <li>No Data Available</li>
                                )}


                              </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-3">
                              <h5>Activities</h5>
                              <ul className="mega-menu-item">
                                {
                                  headerdata.activity?.length > 0 ? (
                                    [...new Set(headerdata.activity.map(item => item.category))].map((category) => (
                                      <li key={category}>
                                        <Link className="dropdown-item" to={`/activity/${category.replace(/\s+/g, '-')}`}>
                                          {category}
                                        </Link>
                                      </li>
                                    ))
                                  ) : (
                                    <li>No Data Available</li>
                                  )
                                }
                                
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>


                    <li className="nav-item dropdown" onClick={()=>{
                      if (title === 'admission') {
                        setIsOpen(!isOpen)
                      } else {
                        setIsOpen(true)
                      }
                      setTitle('admission')
                      localStorage.setItem('activeMenu', 'admission')
                    }}>
                    <a
                      className={`nav-link dropdown-toggle ${window.location.pathname === '/admission-form' || window.location.pathname === '/admission-policy' || window.location.pathname === '/rules-regulation' ? 'active' : ''}`}
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Admission
                    </a>
                    <ul className={`dropdown-menu fade-down ${title === 'admission' && isOpen ? 'show' : ''}`}>
                      <li>
                        <Link className={`dropdown-item `} to={'/admission-form'}>
                          Online Admission
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item `} to={'/admission-policy'}>
                          Admission Policy
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item `} to={'/rules-regulation'}>
                          Rules &amp; Regulations
                        </Link>
                      </li>
                    
                    </ul>
                  </li>

                  
                  <li className="nav-item " onClick={()=> setTitle('bdps')}  >
                    <Link className={`nav-link ${window.location.pathname === '/bdps' ? 'active' : ''}`} to={'/bdps'} data-bs-toggle="dropdown">
                     Play School
                    </Link>
                  </li>
                  <li className="nav-item " onClick={()=> setTitle('gallery')}  >
                    <Link className={`nav-link ${window.location.pathname === '/gallery' ? 'active' : ''}`} to={'/gallery'} data-bs-toggle="dropdown">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item " onClick={()=> setTitle('mandatory')}>
                    <Link className={`nav-link ${window.location.pathname === '/mandatory' ? 'active' : ''}`} to={'/mandatory'}>
                      Public Mandatory
                    </Link>
                  </li>

                  <li className="nav-item" onClick={()=> setTitle('contact')}>
                    <Link className={`nav-link ${window.location.pathname === '/contact-us' ? 'active' : ''}`} to={'/contact-us'}>
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="nav-right">
                  <div className="nav-right-btn mt-2">
                    <Link to={'/admission-form'} className="theme-btn">
                      <span className="fal fa-pencil" />
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* header area end */}
    </>

  )
}

export default Header