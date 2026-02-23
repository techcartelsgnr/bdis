import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutdata } from '../../Redux/UserSlice';
import { getHeaderdata } from '../../Redux/UserSlice';
import { Link, useLocation, useParams } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import AboutSlider from '../../Components/AboutSlider/AboutSlider';

const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").slice(0, numOfStr);
};

const About = () => {
  const { slug } = useParams();
  console.log('slug', slug);


  // const location = useLocation()
  // console.log("location print", location);
  // const { id } = location.state


  const dispatch = useDispatch();
  
  const [headerdata, setHeaderdata] = useState([]);
  const { Headerdata } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const { Aboutdata } = useSelector((state) => state.user);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await dispatch(getHeaderdata()).unwrap();
        console.log('Header All Data', result); // Debugging log
        setHeaderdata(result.about);

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
    if (Aboutdata && Aboutdata.length > 0) {
      // Find the corresponding ID from title
      const matchedItem = Aboutdata.find((item) => item.slug === slug);

      if (matchedItem) {
        fetchData(slug);
      } else {
        setSelectedData(null);
      }
    }
  }, [Aboutdata, slug]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await dispatch(getAboutdata(slug)).unwrap();

      console.log('Fetched DISPATCH DATA:', result);
      setSelectedData(result?.data);
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
              style={{ background: `url(${selectedData.about[0].front_image})` }}>
               {/* {
                console.log('selectedData.about[0].front_image', selectedData.about[0].front_image)
               } */}
                
              <div className="container">
                <h2 className="breadcrumb-title">{selectedData.about[0].title}</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/" style={{color: 'yellow'}}>Home</Link>
                  </li>
                  <li className="active" style={{color: 'yellow'}}>{selectedData.about[0].title}</li>
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
                          <h4 className="widget-title">{selectedData.about[0].title}</h4>
                          <div className="category-list">
                            {headerdata?.length > 0 ? (
                              headerdata?.map((item) => (

                                <li key={item.id}>
                                  <Link className="dropdown-item"
                                    state={{
                                      id: item.id
                                    }}
                                    to={`/about/${item.slug}`}>
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
                          <img src={selectedData.about[0].front_image} alt="thumb" />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="department-details">
                        <h3 className="mb-20">{selectedData.about[0].title}</h3>

                        <p className="mb-20">
                          {removeHtmlTags(selectedData.about[0].desp)}
                        </p>


                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        
                        {/* Other Images */}
                        {selectedData && selectedData.aboutgallery.length > 0 && (
                          <AboutSlider aboutslider={selectedData.aboutgallery} />
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

export default About