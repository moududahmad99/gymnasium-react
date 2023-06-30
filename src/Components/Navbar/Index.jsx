import React from 'react'
import "./Styles.css"

const Navbar = () => {
    return (
        <React.Fragment>
            <div id="navbar">
                <div className="container ">
                    <div className="navbar-main">
                        <div className="nav-logo">
                            <a href="##"><img src="images/logo.png" alt="nav-logo" /></a>
                        </div>
                        <div className="nav-links">
                            <ul>
                                <li><a href="##">HOME</a></li>
                                <li><a href="##">ABOUT US</a></li>
                                <li><a href="##">PLANS</a></li>
                                <li>
                                    <a href="##">TEAM</a>
                                    <ul>
                                        <li><a href="##">Python</a></li>
                                        <li><a href="##">Java Language</a></li>
                                        <li><a href="##">Go Programmming</a></li>
                                        <li>
                                            <a href="##">C++ Programming</a>
                                            <ul>
                                                <li><a href="##">OOP BEGINNER</a></li>
                                                <li><a href="##">OOP INTERMEDIATE</a></li>
                                                <li><a href="##">OOP ADVANCED</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="##">GALLERY</a></li>
                                <li><a href="##">TESTIMONIAL</a></li>
                                <li><a href="##">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Navbar