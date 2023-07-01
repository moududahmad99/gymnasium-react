import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Styles.css';

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about-main">
                    <div className="about-img wow slideInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                        <a className="venobox" data-maxwidth="900px" data-vbtype="video" href="https://www.youtube.com/">
                            <div className="about-overlay">
                                <img src="images/about.jpg" alt="about-img" />
                                <div className="about-overlay-icon">
                                    <i><FaPlay /></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="about-text wow slideInRight" data-wow-duration="1s" data-wow-delay=".5s">
                        <div className="about-title">
                            <h3>ABOUT US</h3>
                            <img src="images/underline.png" alt="underline" />
                        </div>
                        <div className="about-desc">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                            </p>
                            <p>
                                Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software my name
                                is of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;