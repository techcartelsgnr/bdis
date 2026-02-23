import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { admissiondata } from '../../Redux/UserSlice';

// const getAcademicSession = () => {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth(); // 0 = Jan, 3 = April

//   // Example logic:
//   // Session starts in April (adjust if needed)
//   if (month >= 3) {
//     return `${year}-${year + 1}`;
//   } else {
//     return `${year - 1}-${year}`;
//   }
// };

const getAcademicSession = () => {
  const year = new Date().getFullYear();
  return `${year}-${year + 1}`;
};

const AdmissionForm = () => {
  const dispatch = useDispatch();
  const currentSession = getAcademicSession();
  // Admission Form submit state
  const [form, setForm] = useState({
    name: "",
    father_name: "",
    mother_name: "",
    class: "",
    academic_year: "",
    privious_school: "",
    address: "",
    aadhar: "",
    category: "",
    phone: "",
  });



  const handleChange = (e) => {
    console.log("VALUES", e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log('form', form)
    e.preventDefault();

    try {
      const res = await dispatch(admissiondata(form)).unwrap();
      console.log('fetchData2 =>', res);
      toast.success(res.message)
      setForm({
        name: "",
        father_name: "",
        mother_name: "",
        class: "",
        academic_year: "",
        privious_school: "",
        address: "",
        aadhar: "",
        category: "",
        phone: "",
      });
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
        style={{ background: "url('/DSC_9241.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Online Admission</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link to={'/'} style={{color: 'yellow'}}>Home</Link>
            </li>
            <li className="active" style={{color: 'yellow'}}>Online Admission</li>
          </ul>
        </div>
      </div>
      {/* breadcrumb end */}
      {/* contact area */}
      <div className="contact-area py-120">
        <div className="container">

          <div className="contact-wrapper">
            <div className="row">

              <div className="col-lg-12 align-self-center">
                <div className="contact-form">
                  <div className="contact-form-header">
                    <h2>Admission Enquiry</h2>
                  </div>
                  <form onSubmit={handleSubmit}
                    id="contact-form"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="form-group"
                          style={{ position: "relative" }}
                        >
                          <label
                            htmlFor=""
                            style={{
                              color: "black",
                              fontWeight: 500,
                              paddingBottom: "1%"
                            }}
                          >
                            Academic Year
                          </label>
                          <div className="custom-select-container">
                            <select
                              name="academic_year"
                              className="form-control custom-select"
                              id=""
                              onChange={handleChange}
                              value={form.academic_year}
                            >
                              <option value="">Select an option</option>
                              <option value={currentSession}>{currentSession}</option>
                              {/* <option value="2026-2027">2026-2027</option>
                              <option value="2024-2025">2024-2025</option>
                              <option value="2023-2024">2023-2024</option> */}
                              
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Class/Standard</label>
                          <div className="custom-select-container">
                            <select
                              name="class" onChange={handleChange}
                              value={form.class}
                              className="form-control custom-select"
                              id=""
                            >
                              <option value="">Select an option</option>
                              <option value="Nursery">Nursery</option>
                              <option value="Lower K.G">Lower K.G</option>
                              <option value="Upper K.G">Upper K.G</option>
                              <option value="Grade-1">Grade-1</option>
                              <option value="Grade-2">Grade-2</option>
                              <option value="Grade-3">Grade-3</option>
                              <option value="Grade-4">Grade-4</option>
                              <option value="Grade-5">Grade-5</option>
                              <option value="Grade-6">Grade-6</option>
                              <option value="Grade-7">Grade-7</option>
                              <option value="Grade-8">Grade-8</option>
                              <option value="Grade-9">Grade-9</option>
                              <option value="Grade-10">Grade-10</option>
                              <option value="Grade-11">Grade-11</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Student Name</label>
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
                          <label htmlFor="">Father Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="father_name"
                            onChange={handleChange}
                            value={form.father_name}
                            placeholder="Your Father Name"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Mother Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="mother_name"
                            onChange={handleChange}
                            value={form.mother_name}
                            placeholder="Your Mother Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Category</label>
                          <div className="custom-select-container">
                            <select
                              name="category"
                              onChange={handleChange}
                              value={form.category}
                              className="form-control custom-select"
                              id=""
                            >
                              <option value="">Select an option</option>
                              <option value="GEN">GEN</option>
                              <option value="OBC">OBC</option>
                              <option value="SC">SC</option>
                              <option value="ST">ST</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Aadhar Number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="aadhar"
                            onChange={handleChange}
                            value={form.aadhar}
                            placeholder="Your Aadhar Number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Mobile Number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            onChange={handleChange}
                            value={form.phone}
                            placeholder="Your Mobile Number"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Privious School</label>
                      <input
                        type="text"
                        className="form-control"
                        name="privious_school"
                        onChange={handleChange}
                        value={form.privious_school}
                        placeholder="Your Privious School Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Address</label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="address"
                        onChange={handleChange}
                        value={form.address}
                        placeholder="Your Address"
                        required=""
                        defaultValue={
                          "                                            "
                        }
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
      {/* <div className="contact-map">
       <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
       />
     </div> */}
    </main>

  )
}

export default AdmissionForm