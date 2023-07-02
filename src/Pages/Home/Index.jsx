import React from 'react'
import Navbar from '../../Components/Navbar/Index'
import Banner from '../../Components/Banner/Index'
import About from '../../Components/About/Index'
import Gallery from '../../Components/Gallery/Index'
import Team from '../../Components/Team/Index'
import Testimonial from '../../Components/Testimonial/Index'

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <About />
            <Gallery />
            <Team />
            <Testimonial />
        </React.Fragment>
    )
}

export default Home;