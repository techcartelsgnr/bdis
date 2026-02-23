import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getRulesRegulationData } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';
const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

const RulesRegulation = () => {

  const dispatch = useDispatch();
  const [rulesregulationdata, setRulesRegulationData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchRulesRegulationData = async () => {
            const res = await dispatch(getRulesRegulationData()).unwrap()
            setRulesRegulationData(res.rulesregulation);
            console.log("Rules & Regulation Data", res.rulesregulation);
       }
       useEffect(() => {
            fetchRulesRegulationData()
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
    if (!rulesregulationdata) return <p>No data found</p>;
  
    
  
  
  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
          ) : rulesregulationdata ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{ background: `url('bg.jpg')` }}>
              
                
              <div className="container">
                <h2 className="breadcrumb-title">Rules & Regulation</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>Rules & Regulation</li>
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
                        <h3 className="mb-20">Rules & Regulation</h3>

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
                            <SummernoteContent content={rulesregulationdata && rulesregulationdata[0]?.desp} />
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

export default RulesRegulation