import React from 'react'
import '../Styles/Cards.css'

export default function Cards() {
    return (
        <div className="Cards">
            <div className="Cards-container">
                <h1 className="heading">The future of work depends on soft skills</h1>
                <h1>Here’s why:</h1>
                <div className="Cards-flex">
                    <div className="Card">
                        <div>
                            <img className="Card-img" alt="card-1" src="Images/Forbes-logo.png" />
                        </div>
                        <p>
                            “Creative workers are the ones who ask why. They question, they are curious, and in so doing, they develop new ideas and solutions.“
                        </p>
                        <a href="#">Read more</a>
                    </div>
                    <div className="Card">
                        <div>
                            <img className="Card-img" alt="card-2" src="Images/Harvard.png" />
                        </div>
                        <p>
                            “Soft skills are probably misnamed. They are the hardest to understand and systematize, and the skills that give humans an edge over robots.”
                        </p>
                        <a href="#">Read more</a>
                    </div>
                    <div className="Card">
                        <div>
                            <img className="Card-img" alt="card-3" src="Images/World_Economic_Forum.png" />
                        </div>
                        <p>
                            “Critical thinking and problem-solving top the list of skills employers believe will grow in prominence in the next five years.”
                        </p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
