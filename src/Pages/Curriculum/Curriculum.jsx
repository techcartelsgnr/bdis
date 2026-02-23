import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getCurriculumData } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';
const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

  const Curriculum = () => {

  const dispatch = useDispatch();
  const [curriculumdata, setCurriculumData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchCurriculumData = async () => {
            const res = await dispatch(getCurriculumData()).unwrap()
              setCurriculumData(res.curriculum);
            console.log("Curriculum Data", res.curriculum);
       }
       useEffect(() => {
            fetchCurriculumData()
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
  if (!curriculumdata) return <p>No data found</p>;
  
  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
        ) : curriculumdata ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{ background: `url('bg.jpg')` }}>
              
                
              <div className="container">
                <h2 className="breadcrumb-title">Curriculum</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>Curriculum</li>
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
                        <h3 className="mb-20">Curriculum</h3>

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
                              curriculumdata && curriculumdata?.length > 0 ? (
                                curriculumdata?.map((item, index) => (
                                  <SummernoteContent key={index} content={item.desp} />
                                ))
                              ) : (
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

export default Curriculum;