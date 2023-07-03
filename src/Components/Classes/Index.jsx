import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Styles.css'

const Classes = () => {
    return (
        <React.Fragment>
            <div className="classes">
                <div className="container">
                    <div className="classes-title">
                        <h3>OUR CLASSES</h3>
                        <img src="images/underline.png" alt="underline" />
                    </div>
                    <div className="classes-main">
                        <Tabs>
                            <TabList className="clasess-nav">
                                <Tab>
                                    <h3>MONDAY</h3>
                                </Tab>
                                <Tab>
                                    <h3>TUESDAY</h3>
                                </Tab>
                                <Tab>
                                    <h3>WEDNESDAY</h3>
                                </Tab>
                                <Tab>
                                    <h3>THURSDAY</h3>
                                </Tab>
                                <Tab>
                                    <h3>FRIDAY</h3>
                                </Tab>
                                <Tab>
                                    <h3>SATURDAY</h3>
                                </Tab>
                            </TabList>

                            <div className="classes-card">
                                <TabPanel>
                                    <div className="classes-card-inner">
                                        <h3>Yoga</h3>
                                        <img src="images/classes-yoga.png" alt="Yoga" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Chin Up</h3>
                                        <img src="images/classes-chin_up.png" alt="Chin Up" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Free Hand</h3>
                                        <img src="images/classes-free_hand.png" alt="Free Hand" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Yoga</h3>
                                        <img src="images/classes-yoga.png" alt="Yoga" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Chin Up</h3>
                                        <img src="images/classes-chin_up.png" alt="Chin Up" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="classes-card-inner">
                                        <h3>Skipping</h3>
                                        <img src="images/classes-skipping.png" alt="Skipping" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Weight Lifting</h3>
                                        <img src="images/classes-weight_lifting.png" alt="Weight Lifting" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Skipping</h3>
                                        <img src="images/classes-skipping.png" alt="Skipping" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Boxing</h3>
                                        <img src="images/classes-boxing.png" alt="Boxing" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Free Hand</h3>
                                        <img src="images/classes-free_hand.png" alt="Free Hand" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="classes-card-inner">
                                        <h3>Skipping</h3>
                                        <img src="images/classes-skipping.png" alt="Skipping" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Cycling</h3>
                                        <img src="images/classes-free_hand.png" alt="Cycling" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Weight Losing</h3>
                                        <img src="images/classes-weight_losing.png" alt="Weight Losing" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Skipping</h3>
                                        <img src="images/classes-skipping.png" alt="Skipping" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>

                                </TabPanel>

                                <TabPanel>
                                    <div className="classes-card-inner">
                                        <h3>Boxing</h3>
                                        <img src="images/classes-boxing.png" alt="Boxing" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Free Hand</h3>
                                        <img src="images/classes-free_hand.png" alt="Free Hand" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Boxing</h3>
                                        <img src="images/classes-boxing.png" alt="Boxing" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Free Hand</h3>
                                        <img src="images/classes-free_hand.png" alt="Free Hand" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="classes-card-inner">
                                        <h3>Back Releif</h3>
                                        <img src="images/classes-black_relief.png" alt="Back Releif" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Boxing</h3>
                                        <img src="images/classes-boxing.png" alt="Boxing" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Free Hand</h3>
                                        <img src="images/classes-free_hand.png" alt="Free Hand" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Dumbell</h3>
                                        <img src="images/classes-dumbell.png" alt="Dumbell" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="classes-card-inner">
                                        <h3>Free Hand</h3>
                                        <img src="images/classes-free_hand.png" alt="Free Hand" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Back Releif</h3>
                                        <img src="images/classes-black_relief.png" alt="Back Releif" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                    <div className="classes-card-inner">
                                        <h3>Dumbell</h3>
                                        <img src="images/classes-dumbell.png" alt="Dumbell" />
                                        <p>09:00 a.m - 11:00 a.m.</p>
                                    </div>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Classes;