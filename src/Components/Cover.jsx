import React from 'react'
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
                        <img className="img" src="/Images/Warning.png" alt="img" />
                    </div>
                    <div className="Cover-right">
                        <h1 className="Row-heading">Storytelling</h1>
                        <p>
                            Learn how to tell your stories and make an impact.
                        </p>
                    </div>
                </div>
                <div className="Row">
                    <div className="Cover-left">
                        <h1 className="Row-heading">Cracking Interviews</h1>
                        <p>
                            Learn how to put your best foot forward and bag that job.
                        </p>
                    </div>
                    <div className="Cover-img">
                        <img className="img" src="/Images/Lock-open.png" alt="img" />
                    </div>
                    <div className="Cover-right">

                    </div>
                </div>
                <div className="Row">
                    <div className="Cover-left">

                    </div>
                    <div className="Cover-img">
                        <img className="img" src="/Images/Gear.png" alt="img" />
                    </div>
                    <div className="Cover-right">
                        <h1 className="Row-heading">Leading a Team</h1>
                        <p>
                            Learn inclusive leadership and get the best results from your team.
                        </p>
                    </div>
                </div>
                <div className="Row">
                    <div className="Cover-left">
                        <h1 className="Row-heading">Design Thinking</h1>
                        <p>
                            Learn the IBM design thinking model to come up with creative solutions.
                        </p>
                    </div>
                    <div className="Cover-img">
                        <img className="img" src="Images/Computer.png" alt="img" />
                    </div>
                    <div className="Cover-right">

                    </div>
                </div>
                <div className="Row">
                    <div className="Cover-left">

                    </div>
                    <div className="Cover-img">
                        <img className="img" src="Images/Empty-BOX.png" alt="img" />
                    </div>
                    <div className="Cover-right">
                        <h1 className="Row-heading">Fuel your Creativity</h1>
                        <p>
                            Learn how to use your abilities to make your ideas work.
                        </p>
                    </div>
                </div>
                <div>
                    <button className="Cover-button"><h3>Know More</h3></button>
                </div>
            </div>
        </div>
    )
}
