import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBdpsdata } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';

const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

const Bdps = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await dispatch(getBdpsdata()).unwrap();
      console.log('Fetched BDPS DISPATCH DATA:', result);
      setSelectedData(result?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!selectedData) return <p>No data found</p>;

  return (
    <>
      {selectedData ? (
        <main className="main">
          {/* Breadcrumb Section */}
          {/* <div
            className="site-breadcrumb"
            style={{ background: `url(${selectedData?.bdpsgallery?.[0]?.image || ''})` }}
          >
            <div className="container">
              <h2 className="breadcrumb-title">{selectedData?.bdps?.[0]?.title || 'BDPS'}</h2>
              <ul className="breadcrumb-menu">
                <li>
                  <Link to="/" style={{ color: 'yellow' }}>Home</Link>
                </li>
                <li className="active" style={{ color: 'yellow' }}>
                  {selectedData?.bdps?.[0]?.title || 'BDPS'}
                </li>
              </ul>
            </div>
          </div> */}
          {/* End Breadcrumb Section */}

          {/* Department Details */}


            {/* Custom Design */}
          <div className="bdps bdps-first">
            <div className="bdps-box">
                <div className="bdps-content">
                  <p>{removeHtmlTags(selectedData?.bdps?.[0]?.desp)}</p>
                </div>
                <div className="bdps-img">
                  <div className="img-box">
                    <img src={selectedData?.bdpsgallery?.[0]?.image || ''} alt="thumb" />
                  </div>
                </div>
            </div>
            <div className="bdps-box2" >
              <div className="bdps-title" >
                <h1 >

                  {selectedData?.bdps?.[0]?.title || 'BDPS'}
                </h1>
              </div>
            </div>
          </div>

          {/* Gallery section */}
          <div className="bdps bdps-second" >
            <div className="bdps-gallery">
                {selectedData?.bdpsgallery?.length > 0 ? (
                    selectedData.bdpsgallery.map((item, index) => (
                      <div key={index} className="bdps-gallery-item">
                        <img  src={item.image} alt="" />
                      </div>
                    ))
                  ):(
                    <p>No Data Available</p>
                  )
                }
            </div>
          </div>

          {/* custom design end */}


          {/* <div className="department-single-area py-120">

            <div className="container">
              <div className="department-single-wrapper">
                <div className="row">
                 
                  <div className="col-xl-9 col-lg-4">
                    <div className="department-details">
                      <div className="department-details-img mb-30" style={{ border: '1px solid', background: '#F06EAC', padding: '3px 8px', color: 'white' }}>
                        <p className="mb-20">
                          {removeHtmlTags(selectedData?.bdps?.[0]?.desp)}
                        </p>
                      </div>
                      <div className="department-details-img ">
                        <img src={selectedData?.bdpsgallery?.[0]?.image || ''} alt="thumb" />
                      </div>
                    </div>
                  </div>

           
                  <div className="col-xl-3 col-lg-8" style={{ border: '1px solid',display:'flex',alignItems:'center',justifyContent:'flex-start',position:'relative',margin:'0',padding:'0' }}>
                    <div className="department-details" style={{ transform: 'rotate(270deg)',width:'130%',position:'absolute',left:'0' }}>
                      <h3 className="mb-10" style={{fontSize:'4vw'}}>
                        {selectedData?.bdps?.[0]?.title || 'BDPS'}
                      </h3>

                    </div>
                  </div>
                </div>
                <h3 className='mb-3 mt-3'>Other Images</h3>
         
                <div className="row">
                  {selectedData?.bdpsgallery?.length > 0 ? (
                    selectedData.bdpsgallery.map((item, index) => (
                      <div key={index} className="col-xl-4 col-lg-4">
                        <div className="department-details">
                          <div className="department-details-img mb-30">
                            <img src={item.image} alt="thumb" style={{ borderRadius: '1px' }} />
                          </div>
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
          </div> */}
       
        </main>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
};

export default Bdps;
