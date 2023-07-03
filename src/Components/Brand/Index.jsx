import React from 'react';
import Slider from 'react-slick';
import './Style.css'

const Brand = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="container">
            <div className="classes-brand">
                <Slider {...settings}>
                    <div className="classes-brand-inner">
                        <img src="images/partners-1.png" alt="partners-1" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-2.png" alt="partners-2" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-5.png" alt="partners-3" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-4.png" alt="partners-4" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-5.png" alt="partners-5" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-1.png" alt="partners-1" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-2.png" alt="partners-2" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-5.png" alt="partners-3" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-4.png" alt="partners-4" />
                    </div>
                    <div className="classes-brand-inner">
                        <img src="images/partners-5.png" alt="partners-5" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Brand;
