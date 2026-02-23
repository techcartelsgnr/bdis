import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getBoardResultData } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';
const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

const BoardResult = () => {

  const dispatch = useDispatch();
  const [boardresultdata, setBoardResultData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchBoardResultData = async () => {
            const res = await dispatch(getBoardResultData()).unwrap()
              setBoardResultData(res.boardresult);
            console.log("Board Result Data", res.boardresult);
       }
       useEffect(() => {
            fetchBoardResultData()
       }, [])

  const SummernoteContent = ({ content }) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ fontFamily: "Open Sans, Helvetica, Arial, sans-serif" }}
      />
    );
  };

  if (loading) return <p>Loading...</p>;
  if (!boardresultdata) return <p>No data found</p>;
  
    
  
  
  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
        ) : boardresultdata ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{ background: `url('bg.jpg')` }}>
              
                
              <div className="container">
                <h2 className="breadcrumb-title">Board Result</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>Board Result</li>
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
                        <h3 className="mb-20">Board Result</h3>

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
                            {boardresultdata && boardresultdata.length > 0 ? (
                              boardresultdata.map((item, index) => (
                                <div key={index} className="mb-4">
                                  {item.title && (
                                    <h4 className="mb-3" style={{textAlign: 'left'}}>{item.title}</h4>
                                  )}
                                  <div className="row">
                                    {item.front_image && (
                                      <div className={`${item.desp ? 'col-md-6' : 'col-12'} mb-3`}>
                                        <div style={{
                                          width: '100%',
                                          minHeight: '300px' // Minimum height to ensure visibility
                                        }}>
                                          <img 
                                            src={item.front_image}
                                            alt={item.title || 'Board Result Image'} 
                                            style={{
                                              width: '100%',
                                              height: 'auto', // Allow natural height
                                              maxWidth: '100%',
                                              display: 'block'
                                            }}
                                          />
                                        </div>
                                      </div>
                                    )}
                                    {item.desp && (
                                      <div className={`${item.front_image ? 'col-md-6' : 'col-12'}`}>
                                        <div className="content-with-images">
                                          <style>
                                            {`
                                              .content-with-images img {
                                                width: 100%;
                                                height: auto;
                                                max-width: 100%;
                                                display: block;
                                                margin: 1rem auto;
                                              }
                                            `}
                                          </style>
                                          <SummernoteContent content={item.desp} />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="text-center py-5">
                                <h3>Results are coming soon!</h3>
                              </div>
                            )}
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

export default BoardResult;