import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { inquirydata } from '../../Redux/UserSlice';

const year = new Date().getFullYear();
const shortSession = `${year}-${String(year + 1).slice(-2)}`;

const EnquiryForm = () => {
     const dispatch = useDispatch();
//      const currentSession = getAcademicSession();
// const shortSession = getShortSession(currentSession);

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
     console.log("Input Value", e.target.value);
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
       setForm({
          studentname: "",
          parentname: "",
          parentemail: "",
          parentphone: "",
          address: "",
          class: "",
          dob: "",
        })
     
     } catch (error) {
       toast.error(error.message);
       console.error('Error fetching data:', error);
     }
 
 
   };
 
   // Model show useEffect
//    useEffect(() => {
//      setTimeout(() => {
//        setModelShow(true)
//      }, 5000)
//    }, [])


     return (
          <div className={"inquiry-form2 col-12"} >
               <div className="form-part1" style={{border:'1px solid #777',margin:'50px auto',boxShadow:'2px 5px 7px #777'}}>
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
                         {/* <button onClick={() => setModelShow(false)} id="close-btn" style={{ position: 'absolute', top: '10px', right: '10px', background: 'white', border: 'none', color: 'red', fontSize: '15px', borderRadius: '50%', display: window.innerWidth > 500 ? 'none' : 'block', padding: '2px 9px' }}>
                              <i className="fas fa-times"></i>
                         </button> */}
                    </div>
               </div>
               {/* <div className="form-part2">
                    <div className="part2-center">
                         <h2>BDIS</h2>
                         <p>Blooming Dales International School</p>
                         <div className="social-icon">
                              <i className="fa-brands fa-facebook-f" />
                              <i className="fa-solid fa-envelope" />
                              <i className="fa-brands fa-youtube" />
                              <i className="fa-brands fa-instagram" />
                         </div>
                         <button onClick={() => setModelShow(false)} id="close-btn" style={{ position: 'absolute', top: '10px', right: '10px', background: 'white', border: 'none', color: 'red', fontSize: '20px', borderRadius: '50%' }}>
                              <i className="fas fa-times"></i>
                         </button>
                    </div>
               </div> */}
          </div>
     )
}

export default EnquiryForm