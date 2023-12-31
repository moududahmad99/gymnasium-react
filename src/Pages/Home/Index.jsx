import React from 'react';
import Navbar from '../../Components/Navbar/Index';
import Banner from '../../Components/Banner/Index';
import About from '../../Components/About/Index';
import Gallery from '../../Components/Gallery/Index';
import Team from '../../Components/Team/Index';
import Testimonial from '../../Components/Testimonial/Index';
import Membership from '../../Components/Membership/Index';
import Countdown from '../../Components/Countdown/Index';
import Classes from '../../Components/Classes/Index';
import Brand from '../../Components/Brand/Index';
import Footer from '../../Components/Footer/Index';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <About />
            <Gallery />
            <Team />
            <Testimonial />
            <Membership />
            <Countdown />
            <Classes />
            <Brand />
            <Footer />
        </React.Fragment>
    )
}

export default Home;