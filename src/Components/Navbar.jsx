import React from 'react'
import "../Styles/Navbar.css"

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <img className="Navbar-img" src="Images/mauka-blue.png" alt="Logo" />
                <h1 className="Navbar-title">Mauka</h1>
            </div>
            <div className="Navbar-links">
                <li><h3>Bootcamp</h3></li>
                <li><h3>Demo</h3></li>
                <li><h3>Blog</h3></li>
                <li><h3>Cohorts</h3></li>
                <li><h3>Talk to us</h3></li>
                <li><h3>Login</h3></li>
                <button className="Navbar-button">
                    <h3>Enroll Now</h3>
                </button>
            </div>
        </div>
    )
}
