import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getFacilityAlldata, getHeaderdata } from '../../Redux/UserSlice';
import FacilitySlider from '../../Components/FacilitySlider/FacilitySlider';
import FacilitySingleSlider from '../../Components/FacilitySingleSlider/FacilitySingleSlider';

const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

const Facility = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [headerdata, setHeaderdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const { FacilityAlldata } = useSelector((state) => state.user);
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await dispatch(getHeaderdata()).unwrap();
        console.log('Header All Data', result); // Debugging log
        setHeaderdata(result.facility);
        console.log('HE-FC', result.facility);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    if (FacilityAlldata && FacilityAlldata.length > 0) {
      // Find the corresponding ID from title
      const matchedItem = FacilityAlldata.find((item) => item.slug === slug);

      if (matchedItem) {
        fetchData(slug);
      } else {
        setSelectedData(null);
      }
    }
  }, [FacilityAlldata, slug]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await dispatch(getFacilityAlldata(slug)).unwrap();

      console.log('Fetched DISPATCH DATA:', result);
      setSelectedData(result);
      // console.log('RESULT', result.data.about[0].front_image)

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData()
  }, [slug])

  if (loading) return <p>Loading...</p>;
  if (!selectedData) return <p>No data found</p>;




  return (
    <>

      {
        loading ? (
          <p>Loading...</p>
        ) : selectedData ? (
          <main className="main">
            {/* breadcrumb */}


            <div
              className="site-breadcrumb"
              style={{ background: `url(${selectedData?.facility[0].front_image})` }}>

              <div className="container">
                <h2 className="breadcrumb-title">{selectedData?.facility[0].title}</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>{selectedData?.facility[0].title}</li>
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
                      <div className="department-sidebar">
                        <div className="widget category">
                          <h4 className="widget-title">{selectedData?.facility[0].title}</h4>
                          <div className="category-list">
                            {headerdata?.length > 0 ? (
                              headerdata?.map((item) => (

                                <li key={item.id}>
                                  <Link className="dropdown-item"
                                    state={{
                                      slug: item.slug
                                    }}
                                    to={`/facility/${item.slug}`}>
                                    {item.title}  
                                  </Link>
                                </li>
                              ))
                            ) : (
                              <li>No Data Available</li>
                            )}

                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                      <div className="department-details">
                        <div className="department-details-img mb-30">
                          <img src={selectedData?.facility[0].front_image} alt="thumb" />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="department-details">
                        <h3 className="mb-20">{selectedData?.facility[0].title}</h3>

                        <p className="mb-20">
                          {removeHtmlTags(selectedData?.facility[0].desp)}
                        </p>


                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12 col-lg-12">

                      {/* Other Images */}
                      {selectedData && selectedData.facilitygallery.length > 0 && (
                        <FacilitySingleSlider facility={selectedData.facilitygallery} />
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

export default Facility