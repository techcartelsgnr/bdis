import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTcData } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';
const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

const TcDownload = () => {

  const dispatch = useDispatch();
  const [ tcData, setTcData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredTcData, setFilteredTcData] = useState([]);


  const fetchTcData = async () => {
            const res = await dispatch(getTcData()).unwrap()
            setTcData(res.tc);
            console.log("Tc Data", res.tc);
       }
       useEffect(() => {
            fetchTcData()
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
  if (!tcData) return <p>No data found</p>;
  
    
  
  
  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
        ) : tcData ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{ background: `url('bg.jpg')` }}>
              
                
              <div className="container">
                <h2 className="breadcrumb-title">Tc Download</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>Tc Download</li>
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
                        <h3 className="mb-20">Tc Download</h3>

                        <div className="search-bar mb-4 d-flex">
                          <input 
                            type="text"
                            className="form-control me-2"
                            placeholder="Enter Admission Number to Search..."
                            onChange={(e) => {
                              const searchValue = e.target.value.toLowerCase();
                              setFilteredTcData([]); // Clear results on input change
                            }}
                          />
                          <button 
                            className="btn btn-primary"
                            onClick={() => {
                              const searchValue = document.querySelector('input').value.toLowerCase();
                              const filteredData = tcData.filter(student => 
                                student.admissionno.toLowerCase().includes(searchValue)
                              );
                              setFilteredTcData(filteredData);
                            }}
                          >
                            Search
                          </button>
                        </div>
                        <SummernoteContent content={tcData && tcData[0]?.desp} />
                        <div className="table-responsive mt-4">
                          {filteredTcData.length > 0 ? (
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Sr</th>
                                  <th scope="col">Admission No.</th>
                                  <th scope="col">Class</th>
                                  <th scope="col">Student Name</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filteredTcData.map((item, index) => (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.admissionno}</td>
                                    <td>{item.class}</td>
                                    <td>{item.name}</td>
                                    <td>
                                      <Link to={item.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                        View Document
                                      </Link>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <div className="text-center">
                              <p>No data found</p>
                            </div>
                          )}
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
export default TcDownload