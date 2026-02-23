import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleActivityAlldata } from '../../Redux/UserSlice';
import ActivitySingleSlider from '../../Components/ActivitySingleSlider/ActivitySingleSlider';

const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

const Activity = () => {
  const { slug } = useParams(); 
  // const formattedCategory = category.replace(/-/g, ' ');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [singleactivityData, setSingleActivityData] = useState(null);

  useEffect(() => {
    const fetchActivityData = async () => {
      // if (!formattedCategory) return;

      try {
        setLoading(true);
        const result = await dispatch(getSingleActivityAlldata(slug)).unwrap();
        setSingleActivityData(result);
        console.log('SINGLE-ACTIVITY-DATA', result)
      } catch (error) {
        console.error('Error fetching Activity data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityData();
  }, [slug, dispatch]);



  // return

  if (loading) return <p>Loading...</p>;
  if (!singleactivityData) return <p>No singleactivityData found</p>;




  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
        ) : singleactivityData ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{background: `url(${singleactivityData?.activity[0].front_image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

              <div className="container">
                <h2 className="breadcrumb-title">{singleactivityData?.activity[0].title}</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>{singleactivityData?.activity[0].title}</li>
                </ul>
              </div>
            </div>

            {/* breadcrumb end */}
            {/* department-single */}
            <div className="department-single-area py-120">
              <div className="container">
                <div className="department-single-wrapper">

                  <div className="row">
                  <div className="col-xl-4 col-lg-4">
                      <div className="department-details">
                        <div className="department-details-img mb-30">
                          <img src={singleactivityData?.activity[0].front_image} alt="thumb" />
                        </div>

                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="department-sidebar">
                        <div className="widget category">
                          <h4 className="widget-title">{singleactivityData?.activity[0].title}</h4>
                          <p className="mb-20">
                          {removeHtmlTags(singleactivityData?.activity[0].desp)}
                        </p>
                         
                        </div>

                      </div>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="department-details">
                        {/* <h3 className="mb-20">{singleactivityData?.activity[0].title}</h3> */}

                        


                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12 col-lg-12">

                      {/* Other Images */}
                      {singleactivityData && singleactivityData.activitygallery.length > 0 && (
                        <ActivitySingleSlider activitysingleslider={singleactivityData.activitygallery} />
                      )}

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

export default Activity