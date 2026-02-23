import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getdata, getHighlightdata } from '../../Redux/UserSlice';
import HighlightSingleSlider from '../../Components/HighlightSingleSlider/HighlightSingleSlider';

const removeHtmlTags = (htmlString, numOfStr) => {
  return htmlString?.replace(/<\/?[^>]+(>|$)/g, "")?.slice(0, numOfStr) || "";
};

const Highlight = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [highlightdata, setHighlightdata] = useState(null);
  const [homedata, setHomedata] = useState([]);

  useEffect(() => {
    const fetchHighlightData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getHighlightdata(slug)).unwrap();
        setHighlightdata(result);
      } catch (error) {
        console.error('Error fetching highlight data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlightData();
  }, [slug, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dispatch(getdata()).unwrap();
        if (result?.highlights) {
          setHomedata(result.highlights);
        }
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div className="text-center py-5"><p>Loading...</p></div>;
  }

  if (!highlightdata?.highlightpage?.length) {
    return <div className="text-center py-5"><p>No data found</p></div>;
  }

  return (
    <>
      <main className="main">
        <div 
          className="site-breadcrumb"
          style={{ 
            background: `url(${highlightdata?.highlightpage[0]?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{highlightdata?.highlightpage[0]?.title}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link to="/" style={{color: 'yellow'}}>Home</Link>
              </li>
              <li className="active" style={{color: 'yellow'}}>
                {highlightdata?.highlightpage[0]?.title}
              </li>
            </ul>
          </div>
        </div>

        <div className="department-single-area py-120">
          <div className="container">
            <div className="department-single-wrapper">
              <div className="row">
                <div className="col-xl-4 col-lg-4">
                  <div className="department-sidebar">
                    <div className="widget category">
                      <h4 className="widget-title">All Highlights</h4>
                      <ul className="category-list">
                        {homedata?.length > 0 ? (
                          homedata.map((item) => (
                            <li key={item.id}>
                              <Link 
                                className="dropdown-item"
                                to={`/highlight/${item.slug}`}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <li>No Data Available</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8 col-lg-8">
                  <div className="department-details">
                    <div className="department-details-img mb-30">
                      <img 
                        src={highlightdata?.highlightpage[0]?.image} 
                        alt={highlightdata?.highlightpage[0]?.title}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="department-details">
                    <h3 className="mb-20">{highlightdata?.highlightpage[0]?.title}</h3>
                    <p className="mb-20">
                      {removeHtmlTags(highlightdata?.highlightpage[0]?.desp)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  {highlightdata?.highlightgallery?.length > 0 && (
                    <HighlightSingleSlider 
                      highlightpagedata={highlightdata.highlightgallery} 
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Highlight;