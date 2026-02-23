import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getActivityAlldata } from '../../Redux/UserSlice';

const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

const ActivityAll = () => {
  const { category } = useParams(); // Get the title from URL params
  const formattedCategory = category.replace(/-/g, ' ');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    const fetchActivityData = async () => {
      if (!formattedCategory) return;

      try {
        setLoading(true);
        const result = await dispatch(getActivityAlldata(formattedCategory)).unwrap();
        setActivityData(result);
        console.log('AC-DATA', result)
        console.log('AK========================= 26', result?.activitycategory[0]?.category)
      } catch (error) {
        console.error('Error fetching Activity data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityData();
  }, [formattedCategory, dispatch]);

  // console.log('Activity-AKSHAY_DATA', activityData)
  // console.log('AK=========================', activityData?.activity-category[0]?.category)

  // return

  if (loading) return <p>Loading...</p>;
  if (!activityData) return <p>No activityData found</p>;




  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
        ) : activityData ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{background:"url('/bds.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}}>

              <div className="container">
                <h2 className="breadcrumb-title">{activityData?.activitycategory[0].category}</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>{activityData?.activitycategory[0].category}</li>
                </ul>
              </div>
            </div>

            {/* breadcrumb end */}
            {/* department-Multiple */}

            <div className="facility-area py-120">
              <div className="container">
                <div class="row">
                  <div class="col-lg-6 mx-auto">
                      <div class="site-heading text-center">
                          <span class="site-title-tagline"><i class="far fa-book-open-reader"></i> Activities</span>
                          <h2 class="site-title">Let's Check Our <span>Activities</span></h2>
                          <p>It is a long established fact that a reader will be distracted by the readable content of
                              a page when looking at its layout.</p>
                      </div>
                  </div>
                </div>
                <div className="row">
                  {activityData?.activitycategory?.length > 0 ? (
                    activityData.activitycategory.map((item) => (
                      <div className="col-md-6 col-lg-4" key={item.id}>
                        <div className="facility-item wow fadeInDown" data-wow-delay=".25s">
                          <div className="facility-img">
                            <img src={item.front_image} alt={item.title} />
                          </div>
                          <div className="facility-content">
                            <h3 className="facility-title">
                              <Link to={`/activities/${item.slug}`}>{item.title}</Link>
                            </h3>
                            <p className="facility-text">
                              {item.description}
                            </p>
                            <div className="facility-arrow">
                              <Link to={`/activities/${item.slug}`} className="theme-btn">
                                Read More
                                <i className="fas fa-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No data available</p>
                  )}
                </div>
              </div>
            </div>


            {/* department-Multiple end*/}

          </main >
        ) : (
          <p>No data found</p>
        )}




    </>
  );
};

export default ActivityAll