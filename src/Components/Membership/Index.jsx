import React from 'react';
import './Styles.css'

const Membership = () => {
    return (
        <div className="membership">
            <div className="container">
                <div className="membership-title">
                    <h3>MEMBERSHIP</h3>
                    <img src="images/underline.png" alt="underline" />
                </div>
                <div className="membership-main">
                    <div className="membership-inner">
                        <div className="membership-name">
                            <h3>REGULAR MEMBERSHIP</h3>
                        </div>
                        <div className="membership-pricing">
                            <h3>
                                <span>$ 10</span>/Month
                            </h3>
                        </div>
                        <div className="membership-provides">
                            <p>Free Tutorial</p>
                            <p>Aerobik Programmer</p>
                            <p>Trainer Support</p>
                            <p>X</p>
                            <p>X</p>
                        </div>
                        <div className="membership-button">
                            <h3>JOIN NOW</h3>
                        </div>
                    </div>

                    <div className="membership-inner">
                        <div className="membership-name">
                            <h3>PROFESSIONAL MEMBERSHIP</h3>
                        </div>
                        <div className="membership-pricing">
                            <h3>
                                <span>$ 15</span>/Month
                            </h3>
                        </div>
                        <div className="membership-provides">
                            <p>Free Tutorial</p>
                            <p>Aerobik Programmer</p>
                            <p>Trainer Support</p>
                            <p>Fitness Orientation</p>
                            <p>X</p>
                        </div>
                        <div className="membership-button">
                            <h3>JOIN NOW</h3>
                        </div>
                    </div>

                    <div className="membership-inner">
                        <div className="membership-name">
                            <h3>STANDARD MEMBERSHIP</h3>
                        </div>
                        <div className="membership-pricing">
                            <h3>
                                <span>$ 20</span>/Month
                            </h3>
                        </div>
                        <div className="membership-provides">
                            <p>Free Tutorial</p>
                            <p>Aerobik Programmer</p>
                            <p>Trainer Support</p>
                            <p>Fitness Orientation</p>
                            <p>Morning & Evening Batches</p>
                        </div>
                        <div className="membership-button">
                            <h3>JOIN NOW</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;
