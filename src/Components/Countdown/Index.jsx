import React from 'react';
import CountUp  from 'react-countup';
import './Styles.css'

const Countdown = () => {
    return (
        <div className="countdown">
            <div className="container">
                <div className="countdown-main">
                    <div className="countdown-inner">
                        <CountUp start={0} end={224} duration={2} className='counter'/>
                        <p>Cup of Tea</p>
                    </div>
                    <div className="countdown-inner">
                        <CountUp start={0} end={468} duration={2} className="counter" />
                        <p>Award & Wins</p>
                    </div>
                    <div className="countdown-inner">
                        <CountUp start={0} end={452} duration={2} className="counter" />
                        <p>Happy Clients</p>
                    </div>
                    <div className="countdown-inner">
                        <CountUp start={0} end={121} duration={2} className="counter" />
                        <p>Cause Complete</p>
                    </div>
                    <div className="countdown-inner">
                        <CountUp start={0} end={222} duration={2} className="counter" />
                        <p>Partner Gym</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
