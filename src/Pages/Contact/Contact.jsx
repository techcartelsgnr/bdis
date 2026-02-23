import React, { useState } from 'react'
import { contactdata } from '../../Redux/UserSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Contact = () => {
     const dispatch = useDispatch();
     // Contact Form submit state
     const [form, setForm] = useState({
          name: "",
          email: "",
          subject: "",
          msg: "",
     });



     const handleChange = (e) => {
          console.log("VALUES", e.target.value);
          setForm({
               ...form,
               [e.target.name]: e.target.value,
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const res = await dispatch(contactdata(form)).unwrap();
               console.log('fetchData2 =>', res);
               toast.success('Contact Details Submit Succefully')
               setForm({
                    name: "",
                    email: "",
                    subject: "",
                    msg: "",
               })

          } catch (error) {
               toast.error(error.message);
               console.error('Error fetching data:', error);
          }


     };
     return (
          <main className="main">
               {/* breadcrumb */}
               <div
                    className="site-breadcrumb"
                    style={{ background: "url('/admissionbg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
               >
                    <div className="container">
                         <h2 className="breadcrumb-title">Contact Us</h2>
                         <ul className="breadcrumb-menu">
                              <li>
                                   <Link to="/" style={{color: 'yellow'}}>Home</Link>
                              </li>
                              <li className="active" style={{color: 'yellow'}}>Contact Us</li>
                         </ul>
                    </div>
               </div>
               {/* breadcrumb end */}
               {/* contact area */}
               <div className="contact-area py-120">
                    <div className="container">
                         <div className="contact-content">
                              <div className="row">
                                   <div className="col-md-4">
                                        <div className="contact-info">
                                             <div className="contact-info-icon">
                                                  <i className="fal fa-map-location-dot" />
                                             </div>
                                             <div className="contact-info-content">
                                                  <h5>Address</h5>
                                                  <p>
                                                       Sri Ganganagar, Rajasthan</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-md-4">
                                        <div className="contact-info">
                                             <div className="contact-info-icon">
                                                  <i className="fal fa-phone-volume" />
                                             </div>
                                             <div className="contact-info-content">
                                                  <h5>Call Us</h5>
                                                  <p>0154-2461421</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-md-4">
                                        <div className="contact-info">
                                             <div className="contact-info-icon">
                                                  <i className="fal fa-envelopes" />
                                             </div>
                                             <div className="contact-info-content">
                                                  <h5>Email Us</h5>
                                                  <p>
                                                       <a
                                                            href="#"
                                                       >
                                                            bdismeetusharma@gmail.com
                                                       </a>
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   {/* <div className="col-md-3">
                                        <div className="contact-info">
                                             <div className="contact-info-icon">
                                                  <i className="fal fa-alarm-clock" />
                                             </div>
                                             <div className="contact-info-content">
                                                  <h5>Open Time</h5>
                                                  <p>Mon - Sat (10.00AM - 05.30PM)</p>
                                             </div>
                                        </div>
                                   </div> */}
                              </div>
                         </div>
                         <div className="contact-wrapper">
                              <div className="row">
                                   <div className="col-lg-5">
                                        <div className="contact-img">
                                             <img src="assets/img/gallery/Image1.jpeg" alt="" />
                                        </div>
                                   </div>
                                   <div className="col-lg-7 align-self-center">
                                        <div className="contact-form">
                                             <div className="contact-form-header">
                                                  <h2>Get In Touch</h2>
                                                  <p>
                                                       For any queries related to admissions, curriculum, or school facilities, please fill in the details below. Our team will contact you at the earliest.{" "}
                                                  </p>
                                             </div>
                                             <form onSubmit={handleSubmit}
                                                  id="contact-form"
                                             >
                                                  <div className="row">
                                                       <div className="col-md-6">
                                                            <div className="form-group">
                                                                 <input
                                                                      type="text"
                                                                      className="form-control"
                                                                      name="name"
                                                                      onChange={handleChange}
                                                                      value={form.name}
                                                                      placeholder="Your Name"
                                                                      required=""
                                                                 />
                                                            </div>
                                                       </div>
                                                       <div className="col-md-6">
                                                            <div className="form-group">
                                                                 <input
                                                                      type="email"
                                                                      className="form-control"
                                                                      name="email"
                                                                      value={form.email}
                                                                      onChange={handleChange}
                                                                      placeholder="Your Email"
                                                                      required=""
                                                                 />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="form-group">
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            name="subject"
                                                            value={form.subject}
                                                            onChange={handleChange}
                                                            placeholder="Your Subject"
                                                            required=""
                                                       />
                                                  </div>
                                                  <div className="form-group">
                                                       <textarea
                                                            name="msg"
                                                            cols={30}
                                                            rows={5}
                                                            value={form.msg}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            placeholder="Write Your Message"

                                                       />
                                                  </div>
                                                  <button type="submit" className="theme-btn">
                                                       Send Message <i className="far fa-paper-plane" />
                                                  </button>
                                                  <div className="col-md-12 mt-3">
                                                       <div className="form-messege text-success" />
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* end contact area */}
               {/* map */}
               <div className="contact-map">
                    <iframe
                         src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bdis%20school+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                         style={{ border: 0 }}
                         allowFullScreen=""
                         loading="lazy"
                    />
               </div>
          </main>

     )
}

export default Contact