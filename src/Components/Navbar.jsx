import React from 'react'
import Cohort from './Cohort';
import "../Styles/Navbar.css"

export default function Navbar() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <img className="Navbar-img" src="Images/mauka-blue.png" alt="Logo" />
                <h1 className="Navbar-title">Mauka</h1>
            </div>
            <div className="Navbar-links">
                <li><h3><a href="#">Bootcamp</a></h3></li>
                <li><h3><a href="#">Demo</a></h3></li>
                <li><h3><a href="#">Blog</a></h3></li>
                <li className="Cohort-li">
                    <h3><a href="#" onClick={handleClick}>Cohorts <i class="fa fa-chevron-down" aria-hidden="true"></i></a></h3>
                    <Cohort open={open} />
                </li>
                <li><h3><a href="#">Talk to us</a></h3></li>
                <li><h3><a href="#">Login</a></h3></li>
                <button className="Navbar-button">
                    <h3>Enroll Now</h3>
                </button>
            </div>
        </div>
    )
}
