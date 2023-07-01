import React from 'react'
import { FaSearchPlus } from 'react-icons/fa';
import './Styles.css'

const Gallery = () => {
    return (
        <React.Fragment>
            <div className="gallery-title">
                <h3>OUR GALLERY</h3>
                <img src="images/underline.png" alt="underline" />
            </div>

            <div className="gallery">
                <div className="container">
                    <div className="gallery-main">
                        <div className="gallery-section">
                            <div className="gallery-overlay">
                                <img src="images/gallery-men1.jpg" alt="gallery" />
                                <div className="gallery-overlay-icon">
                                    <a data-lightbox="images-1" data-title="Sabbir Ahmad Moudud" href="images/gallery-men1.jpg">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                            <div className="gallery-overlay">
                                <img src="images/gallery-menOne.jpg" alt="gallery" />
                                <div className="gallery-overlay-icon">
                                    <a className="venobox" data-gall="myGallery" href="images/gallery-menOne.jpg">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-section">
                            <div className="gallery-overlay">
                                <img src="images/gallery-menOne.jpg" alt="gallery" />
                                <div className="gallery-overlay-icon">
                                    <a className="venobox" data-gall="myGallery" href="images/gallery-menOne.jpg">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                            <div className="gallery-overlay">
                                <img src="images/gallery-men2.jpg" alt="gallery" />
                                <div className="gallery-overlay-icon">
                                    <a data-lightbox="images-1" data-title="Sabbir Ahmad Moudud" href="images/gallery-men2.jpg">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-section">
                            <div className="gallery-overlay">
                                <img src="images/gallery-men3.jpg" alt="gallery" />
                                <div className="gallery-overlay-icon">
                                    <a data-lightbox="images-1" data-title="Sabbir Ahmad Moudud" href="images/gallery-men3.jpg">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                            <div className="gallery-overlay">
                                <img src="images/gallery-menOne.jpg" alt="gallery" />
                                <div className="gallery-overlay-icon">
                                    <a className="venobox" data-gall="myGallery" href="images/gallery-menOne.jpg">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Gallery;