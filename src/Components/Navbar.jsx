import React from 'react'

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <img className="Navbar-img" src="Images/mauka-blue.png" alt="Logo" />
                <h1 className="Navbar-title">Navbar</h1>
            </div>
            <div className="Navbar-links">
                <li>Bootcamp</li>
                <li>Demo</li>
                <li>Blog</li>
                <li>Cohorts</li>
                <li>Talk to us</li>
                <li>Login</li>
                <button className="Navbar-button">
                    Enroll Now
                </button>
            </div>
        </div>
    )
}
