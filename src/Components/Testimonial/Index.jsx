import React from 'react';
import './Styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="testimonial">
            <div className="container">
                <Slider {...settings}>
                    <div className="testimonial-inner mt-5 wow slideInLeft">
                        <div className="testimonial-part">
                            <div className="testimonial-img">
                                <img src="images/footer-gallery1.jpg" alt="testimonial" />
                            </div>
                            <div className="testimonial-profile">
                                <h3>Mridul Chakrabarty</h3>
                                <h4>Cheif Trainer</h4>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStarHalf /></a>
                            </div>
                        </div>
                        <div className="testimonial-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook a galley of type and scrambled it to make a type 5 centuries are not possible.</p>
                        </div>
                    </div>
                    <div className="testimonial-inner wow slideInRight">
                        <div className="testimonial-part">
                            <div className="testimonial-img">
                                <img src="images/footer-gallery2.jpg" alt="testimonial" />
                            </div>
                            <div className="testimonial-profile">
                                <h3>Mridul Chakrabarty</h3>
                                <h4>Cheif Trainer</h4>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStarHalf /></a>
                            </div>
                        </div>
                        <div className="testimonial-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook a galley of type and scrambled it to make a type 5 centuries are not possible.</p>
                        </div>
                    </div>
                    <div className="testimonial-inner">
                        <div className="testimonial-part">
                            <div className="testimonial-img">
                                <img src="images/footer-gallery3.jpg" alt="testimonial" />
                            </div>
                            <div className="testimonial-profile">
                                <h3>Mridul Chakrabarty</h3>
                                <h4>Cheif Trainer</h4>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStarHalf /></a>
                            </div>
                        </div>
                        <div className="testimonial-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook a galley of type and scrambled it to make a type 5 centuries are not possible.</p>
                        </div>
                    </div>
                    <div className="testimonial-inner">
                        <div className="testimonial-part">
                            <div className="testimonial-img">
                                <img src="images/footer-gallery4.jpg" alt="testimonial" />
                            </div>
                            <div className="testimonial-profile">
                                <h3>Mridul Chakrabarty</h3>
                                <h4>Cheif Trainer</h4>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStar /></a>
                                <a href="##"><FaStarHalf /></a>
                            </div>
                        </div>
                        <div className="testimonial-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printertook a galley of type and scrambled it to make a type 5 centuries are not possible.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
