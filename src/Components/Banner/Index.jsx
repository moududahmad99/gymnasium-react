import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles.css';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <React.Fragment>
            <Slider {...settings}>
                <div id='banner-slide'>
                    <div className="container">
                        <div className="banner-main">
                            <div className="banner-text">
                                <h3 className="jquery">TIME TO START</h3>
                                <h1>GYMNASIUM</h1>
                                <p>
                                    Lorem Ipsum is simply text of the printing and typesetting industry.
                                    Lorem <br /> has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                            <div className="banner-btn">
                                <a href="##">JOIN NOW</a>
                                <a href="##">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='banner-slide'>
                    <div className="container">
                        <div className="banner-main">
                            <div className="banner-text">
                                <h3 className="jquery">TIME TO START</h3>
                                <h1>GYMNASIUM</h1>
                                <p>
                                    Lorem Ipsum is simply text of the printing and typesetting industry.
                                    Lorem <br /> has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                            <div className="banner-btn">
                                <a href="##">JOIN NOW</a>
                                <a href="##">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='banner-slide'>
                    <div className="container">
                        <div className="banner-main">
                            <div className="banner-text">
                                <h3 className="jquery">TIME TO START</h3>
                                <h1>GYMNASIUM</h1>
                                <p>
                                    Lorem Ipsum is simply text of the printing and typesetting industry.
                                    Lorem <br /> has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                            <div className="banner-btn">
                                <a href="##">JOIN NOW</a>
                                <a href="##">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </React.Fragment>
    );
};

export default Banner;
