import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHeaderdata } from '../../Redux/UserSlice';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
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
      {/* footer area */}
      <footer className="footer-area">
        {/* <div class="footer-shape">
         <img src="assets/img/logo/bdis-logo-3.png" alt="">
     </div> */}
        <div className="footer-widget">
          <div className="container">
            <div className="row footer-widget-wrapper pt-100 pb-70">
              <div className="col-md-6 col-lg-4">
                <div className="footer-widget-box about-us">
                  <a href="#" className="footer-logo">
                    {/* <img src="assets/img/logo/logo.png" alt=""> */}
                    <img src="/bdis-logo-2.png" alt="" />
                  </a>
                  <p className="mb-3">
                    The school provides a blend of resources and environment for all
                    round personality development of its students.
                  </p>
                  <ul className="footer-contact">
                    <li>
                      <a href="tel:+0154 2462744">
                        <i className="far fa-phone" />
                        +0154 2462744
                      </a>
                    </li>
                    {/* <li><i class="far fa-map-marker-alt"></i>Hanumangarh Road
                                 2 ML, Nathawali
                                 Sri Ganganagar, Rajasthan
                                 335001</li> */}
                    <li>
                      <a href="mailto:bdismeetusharma@gmail.com">
                        <i className="far fa-envelope" />
                        <span
                          className="__cf_email__"
                          data-cfemail="6801060e07280d10090518040d460b0705"
                        >
                          bdismeetusharma@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <ul className="footer-list">
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
                    <li>
                      <Link to="/tc-download" >Transfer Certificate</Link>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Our Facilities</h4>
                  <ul className="footer-list">
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
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Contact Us</h4>
                  <div className="footer-newsletter">
                    <p>
                      Hanumangarh Road 2 ML, Nathawali Sri Ganganagar, Rajasthan
                      335001
                    </p>
                    <div className="subscribe-form">
                      <form action="#">
                        {/* <input type="email" class="form-control" placeholder="Your Email"> */}
                        <Link to="/contact-us" className="theme-btn" type="submit">
                          Contact Us <i className="far fa-paper-plane" />
                        </Link>
                        <Link to="/enquiry" className="theme-btn" type="submit">
                          Enquiry <i className="fas fa-question-circle" />
                        </Link>
                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="copyright-wrapper">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <p className="copyright-text">
                    © Copyright <span id="date" /> <Link to="https://techcartel.in/" style={{ color: "#F9DE19" }} target='_blank'> TechCartel </Link> All
                    Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 align-self-center">
                  <ul className="footer-social">
                    <li>
                      <Link to="https://www.facebook.com/bdis.edu.in/" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/bdis.edu.in/" target="_blank">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/@bdis.edu.in" target="_blank">
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>

  )
}

export default Footer