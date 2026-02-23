import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getScholarshipData } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';
const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

  const Scholarship = () => {    

  const dispatch = useDispatch();
  const [scholarshipdata, setScholarshipData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchScholarshipData = async () => {
            const res = await dispatch(getScholarshipData()).unwrap()
              setScholarshipData(res.scholarship);
            console.log("Scholarship Data", res.scholarship);
       }
       useEffect(() => {
            fetchScholarshipData()
       }, [])

  const SummernoteContent = ({ content }) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ fontFamily: "Open Sans, Helvetica, Arial, sans-serif",paddingBottom:'10px' }}
      />
    );
  };

  if (loading) return <p>Loading...</p>;
  if (!scholarshipdata) return <p>No data found</p>;
  
    
  
  
  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
        ) : scholarshipdata ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{ background: `url('bg.jpg')` }}>
              
                
              <div className="container">
                <h2 className="breadcrumb-title">Scholarship</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>Scholarship</li>
                </ul>
              </div>
            </div>

            {/* breadcrumb end */}
            {/* department-single */}
            <div className="department-single-area py-120">
              <div className="container">
                <div className="department-single-wrapper">

                  
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="department-details">
                        <h3 className="mb-20">Scholarship</h3>

                        {/* <p className="mb-20">
                          {mandatorydata[0].desp}
                        </p> */}
                        <div className="content-box p-4 rounded shadow-lg bg-white">
                          <div className="content-wrapper" style={{
                            maxWidth: '100%',
                            margin: '0 auto',
                            fontSize: '16px',
                            lineHeight: '1.3',
                            color: '#333'
                          }}>
                            {
                              scholarshipdata && scholarshipdata?.length>0 ? (
                                scholarshipdata?.map((item,index)=>(

                                  <SummernoteContent key={index} content={item.desp} />
                                ))
                              ):(
                                <p>No data available</p>
                              )
                            }
                          </div>
                        </div>
                        


                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

            {/* department-single end*/}
             
          </main >
        ) : (
          <p>No data found</p>
        )}



     
    </>
  );
};

export default Scholarship;