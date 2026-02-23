import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationData } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';
const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

  const Notification = () => {

  const dispatch = useDispatch();
  const [notificationdata, setNotificationData] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchNotificationData = async () => {
              const res = await dispatch(getNotificationData()).unwrap()
            setNotificationData(res.notification);
            console.log("Notification Data", res.notification);
       }
       useEffect(() => {
            fetchNotificationData()
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
    if (!notificationdata) return <p>No data found</p>;
  
    
  
  
  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
        ) : notificationdata ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{ background: `url('bg.jpg')` }}>
              
                
              <div className="container">
                <h2 className="breadcrumb-title">Notification</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>Notification</li>
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
                        <h3 className="mb-20">Notification</h3>

                        {/* <p className="mb-20">
                          {mandatorydata[0].desp}
                        </p> */}
                        <SummernoteContent content={notificationdata && notificationdata[0]?.desp} />
                        <div className="table-responsive mt-4">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">Sr</th>
                                <th scope="col">Title</th>
                                <th scope="col">Docs</th>
                              </tr>
                            </thead>
                            <tbody>
                              {notificationdata && [...notificationdata].reverse().map((item, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{item.title}</td>
                                  <td>
                                    <Link to={item.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                      View Document
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
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

export default Notification