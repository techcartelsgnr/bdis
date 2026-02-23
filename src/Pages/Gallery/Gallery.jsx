
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGallerydata } from '../../Redux/UserSlice';
import { Link } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { IoMdClose } from 'react-icons/io';


const Gallery = () => {
     const dispatch = useDispatch();
     const [gallerydata, setGallerydata] = useState([]);
     const [loading, setLoading] = useState(false);
     const [isOpen, setIsOpen] = useState(false);
     const [selectedImages, setSelectedImages] = useState([]);
     const [startIndex, setStartIndex] = useState(0);


     const openGallery = (index) => {
          // Convert single image into an array format for ImageGallery
          const imagesArray = gallerydata.map((item) => ({
               original: item.image, // Main image
               thumbnail: item.image, // Thumbnail
          }));

          setSelectedImages(imagesArray);
          setStartIndex(index);
          setIsOpen(true);
     };

     const fetchinggallerydata = async () => {
          const res = await dispatch(getGallerydata()).unwrap()
          setGallerydata(res.gallery);
          console.log("GALLERY", res.gallery);
     }
     useEffect(() => {
          fetchinggallerydata()
     }, [])



     return (
          <main className="main">
               {/* breadcrumb */}
               <div
                    className="site-breadcrumb"
                    style={{ background: `url(${gallerydata.length > 0 && gallerydata[0].image})` }}
               >
                    <div className="container">
                         <h2 className="breadcrumb-title">Gallery</h2>
                         <ul className="breadcrumb-menu">
                              <li>
                                   <Link to="/" style={{color: 'yellow'}}>Home</Link>
                              </li>
                              <li className="active" style={{color: 'yellow'}}>Gallery</li>
                         </ul>
                    </div>
               </div>
               {/* breadcrumb end */}
               {/* gallery-area */}
               <div className="gallery-area py-120">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6 mx-auto">
                                   <div className="site-heading text-center">
                                        <span className="site-title-tagline">
                                             <i className="far fa-book-open-reader" /> Gallery
                                        </span>
                                        <h2 className="site-title">
                                             Our Photo <span>Gallery</span>
                                        </h2>
                                        <p>
                                             It is a long established fact that a reader will be distracted by
                                             the readable content of a page when looking at its layout.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         {/* <div className="row popup-gallery">
                              {
                                   gallerydata && gallerydata?.length > 0 && (
                                        gallerydata.map((item) => (
                                             <div className="col-md-4 wow fadeInUp" data-wow-delay=".25s" key={item.id}>
                                                  <div className="gallery-item">
                                                       <div className="gallery-img">
                                                            <img src={item.image} alt="" />
                                                       </div>
                                                       <div className="gallery-content">
                                                            <Link
                                                                 className="popup-img gallery-link"
                                                                 to={''}
                                                            >
                                                                 <i className="fal fa-plus" />
                                                            </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))
                                   )
                              }

                              {getGallerydata && Array.isArray(getGallerydata) && getGallerydata.length > 0 ? (
                                   <ImageGallery items={getGallerydata} />
                              ) : null}
                         </div> */}
                         <div className="row popup-gallery">
                              {gallerydata &&
                                   gallerydata.length > 0 &&
                                   gallerydata.map((item, index) => (
                                        <div
                                             className="col-md-4 wow fadeInUp"
                                             data-wow-delay=".25s"
                                             key={item.id}>
                                             <div className="gallery-item">
                                                  <div className="gallery-img">
                                                       <img
                                                            src={item.image}
                                                            alt=""
                                                            onClick={() => openGallery(index)}
                                                            style={{ cursor: "pointer" }} // Indicate it's clickable
                                                       />
                                                  </div>
                                                  <div className="gallery-content">
                                                       <button
                                                            className="popup-img gallery-link"
                                                            onClick={(e) => {
                                                                 e.preventDefault();
                                                                 openGallery(index);
                                                            }}
                                                       >
                                                            <i className="fal fa-plus" />
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}

                              {/* Show Image Gallery when Open */}
                              {isOpen && selectedImages.length > 0 && (
                                   <div style={{position:'fixed',top:'0',left:'0',zIndex:99999,background:'rgba(0,0,0,0.8)'}}>
                                        <IoMdClose  style={{
                                             position:'absolute',
                                             right:20,
                                             top:20,
                                             color:'white',
                                             fontSize:40,
                                             zIndex:9999999,
                                             cursor:'pointer'
                                        }}
                                        onClick={()=>setIsOpen(false)}
                                        
                                        />
                                        <ImageGallery
                                             items={selectedImages}
                                             showThumbnails={true}
                                             showFullscreenButton={true}
                                             showPlayButton={false}
                                             startIndex={startIndex} // Open from clicked image index
                                             onClose={() => setIsOpen(false)} // Close gallery when needed
                                        />
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
               {/* gallery-area end */}
          </main>

     )
}

export default Gallery