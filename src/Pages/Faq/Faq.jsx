import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFaqData } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';

const removeHtmlTags = (htmlString) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
};

const Faq = () => {

  const dispatch = useDispatch();
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFaqData = async () => {
    try {
      const res = await dispatch(getFaqData()).unwrap();
      setFaqData(res);
      console.log("FAQ Data", res);
    } catch (error) {
      console.error("FAQ Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  const SummernoteContent = ({ content }) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ fontFamily: "Open Sans, Helvetica, Arial, sans-serif" }}
      />
    );
  };

  if (loading) return <p>Loading...</p>;
  if (!faqData.length) return <p>No FAQs Found</p>;

  return (
    <main className="main">

      {/* breadcrumb */}
      <div
        className="site-breadcrumb"
        style={{ background: `url('bg.jpg')` }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">FAQs</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link to="/" style={{ color: 'yellow' }}>Home</Link>
            </li>
            <li className="active" style={{ color: 'yellow' }}>FAQs</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="department-single-area py-120">
        <div className="container">
          <div className="department-single-wrapper">
            <div className="row">
              <div className="col-xl-12">

                <div className="department-details">
                  <h3 className="mb-30">Frequently Asked Questions</h3>

                  <div className="faq-wrapper">

                    {faqData.map((item, index) => (
                      <div key={index} className="faq-item mb-4">

                        <h5 style={{ fontWeight: "600" }}>
                          {index + 1}. {item.title}
                        </h5>
                        <SummernoteContent content={item.desp} />
                      </div>
                    ))}

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Faq;