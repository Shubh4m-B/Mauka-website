import React from 'react'
import { Fade, Zoom } from 'react-reveal';
import '../Styles/Cover.css'

export default function Cover() {
    return (
        <div className="Cover">
            <div className="Cover-container">
                <h1 className="heading">What we cover</h1>
                <div className="Row">
                    <div className="Cover-left">

                    </div>
                    <div className="Cover-img">
                        <Zoom>
                            <img className="img" src="/Images/Warning.png" alt="img" />
                        </Zoom>
                    </div>
                    <div className="Cover-right">
                        <Fade right>
                            <h1 className="Row-heading">Storytelling</h1>
                            <p>
                                Learn how to tell your stories and make an impact.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div className="Row">
                    <div className="Cover-left">
                        <Fade left>
                            <h1 className="Row-heading">Cracking Interviews</h1>
                            <p>
                                Learn how to put your best foot forward and bag that job.
                            </p>
                        </Fade>
                    </div>
                    <div className="Cover-img">
                        <Zoom>
                            <img className="img" src="/Images/Lock-open.png" alt="img" />
                        </Zoom>
                    </div>
                    <div className="Cover-right">

                    </div>
                </div>
                <div className="Row">
                    <div className="Cover-left">

                    </div>
                    <div className="Cover-img">
                        <Zoom>
                            <img className="img" src="/Images/Gear.png" alt="img" />
                        </Zoom>
                    </div>
                    <div className="Cover-right">
                        <Fade right>
                            <h1 className="Row-heading">Leading a Team</h1>
                            <p>
                                Learn inclusive leadership and get the best results from your team.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div className="Row">
                    <div className="Cover-left">
                        <Fade left>
                            <h1 className="Row-heading">Design Thinking</h1>
                            <p>
                                Learn the IBM design thinking model to come up with creative solutions.
                            </p>
                        </Fade>
                    </div>
                    <div className="Cover-img">
                        <Zoom>
                            <img className="img" src="Images/Computer.png" alt="img" />
                        </Zoom>
                    </div>
                    <div className="Cover-right">

                    </div>
                </div>
                <div className="Row">
                    <div className="Cover-left">

                    </div>
                    <div className="Cover-img">
                        <Zoom>
                            <img className="img" src="Images/Empty-BOX.png" alt="img" />
                        </Zoom>
                    </div>
                    <div className="Cover-right">
                        <Fade right>
                            <h1 className="Row-heading">Fuel your Creativity</h1>
                            <p>
                                Learn how to use your abilities to make your ideas work.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div>
                    <button className="Cover-button"><h3>Know More</h3></button>
                </div>
            </div>
        </div>
    )
}
