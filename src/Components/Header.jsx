import React, { Component } from 'react'
import '../Styles/Header.css'

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-container">
                    <div className="Header-left">
                        <h1 className="heading">Be a better Communicator, Collaborator and Thinker.</h1>
                        <h3 className="sub-heading">Mauka's cohorts teach soft skills in the most practical and personalized way.</h3>
                        <div className="Header-buttons">
                            <button className="Header-button-inactive"><h3>Join Cohort One</h3></button>
                            <button className="Header-button"><h3>Talk to us</h3></button>
                        </div>
                    </div>
                    <div className="Header-right">
                        <img className="Header-img" src="Images/hero_thumbnail.png" alt="hero-thumbnail" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
