import React from 'react';
import { FaSnapchat, FaTwitter, FaLinkedinIn, FaInstagram, FaBehance, FaArrowUp } from 'react-icons/fa';
import './Styles.css'

const Footer = () => {

    const handleClickToTop = () => {
        window.scrollTo({
          top: 0  
        })
    }

    return (
        <footer>
            <div className="footer-logo">
                <a href="##"><img src="images/logo.png" alt="footer-logo" /></a>
            </div>
            <div className="container">
                <div className="footer-main">

                    <div className="footer-inner">
                        <div className="footer-titles">
                            <h3>OPENING HOURS</h3>
                            <div className="footer-daysNtime">
                                <div className="footer-opening-days">
                                    <p>Monday</p>
                                    <p>Tuesday</p>
                                    <p>Wednesday</p>
                                    <p>Thursday</p>
                                    <p>Friday</p>
                                    <p>Saturday</p>
                                    <p>Sunday</p>
                                    <p>Holiday</p>
                                </div>
                                <div className="footer-opening-time">
                                    <p>05:00 A.M. - 11:00 P.M.</p>
                                    <p>05:00 A.M. - 11:00 P.M.</p>
                                    <p>05:00 A.M. - 11:00 P.M.</p>
                                    <p>05:00 A.M. - 11:00 P.M.</p>
                                    <p>05:00 A.M. - 11:00 P.M.</p>
                                    <p>07:00 A.M. - 09:00 P.M.</p>
                                    <p>Closed</p>
                                    <p>Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-inner">
                        <div className="footer-titles">
                            <h3>TWITER FEED</h3>
                            <div className="footer-feed">
                                <div className="footer-feed-icon">
                                    <a href="##"><FaTwitter /></a>
                                </div>
                                <div className="footer-feed-desc">
                                    <p>We want to introduce you to a new ess theme GYMNASIUM persue new press theme. This the new idea for theme, hope you will like.</p>
                                    <h5>24 July 2017</h5>
                                </div>
                            </div>
                            <div className="footer-feed">
                                <div className="footer-feed-icon">
                                    <a href="##"><FaTwitter /></a>
                                </div>
                                <div className="footer-feed-desc">
                                    <p>We want to introduce you to a new ess theme GYMNASIUM persue new press theme.</p>
                                    <h5>24 July 2012</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-inner">
                        <div className="footer-titles">
                            <h3>FLICKR PHOTOS</h3>
                        </div>
                        <div className="footer-photos">
                            <div className="footer-gallery">
                                <ul>
                                    <li><a href="##"><img src="images/footer-gallery1.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery3.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery2.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery1.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery3.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery2.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery2.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery5.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery4.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery3.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery2.jpg" alt="photos" /></a></li>
                                    <li><a href="##"><img src="images/footer-gallery1.jpg" alt="photos" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-inner">
                        <div className="footer-titles">
                            <h3>CONTACT</h3>
                            <div className="footer-contact">
                                <div className="footer-address">
                                    <div className="footer-address-icon">
                                        <ul>
                                            <li><a href="##"><i className="fa-solid fa-location-dot"></i></a></li>
                                            <li><a href="##"><i className="fa-solid fa-phone"></i></a></li>
                                            <li><a href="##"><i className="fa-solid fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-address-dsc">
                                        <p>1234 Park Street Avenue, NY City America.</p>
                                        <p>+88 017 386 96914, +88 017 419 69683</p>
                                        <p>info@admin.com, admin@info.com</p>
                                    </div>
                                </div>
                                <div className="footer-social">
                                    <h3>GET SOCIAL</h3>
                                    <div className="footer-social-icon">
                                        <a href="##"><FaSnapchat /></a>
                                        <a href="##"><FaTwitter /></a>
                                        <a href="##"><FaLinkedinIn /></a>
                                        <a href="##"><FaInstagram /></a>
                                        <a href="##"><FaBehance /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-mini">
                <a href="##">
                    <h3>Copyright © All rights reserved by <span>GYMNASIUM.</span></h3>
                </a>
            </div>
            <a class="backToTop" onClick={handleClickToTop} href="##"><FaArrowUp/> </a>
        </footer>
    );
};

export default Footer;
