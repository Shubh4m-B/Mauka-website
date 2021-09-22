import React from 'react'
import '../Styles/Cohort.css'

export default function Cohort(props) {
    const { open } = props;
    const opacity = open ? "1" : "0";
    return (
        <div style={{ opacity: opacity }} className="Cohort">
            <div className="Cohort-zero">
                <h1 className="Cohort-title">Cohort Zero</h1>
                <div className="Cohort-links">
                    <p><a href="#">Alumini</a></p>
                </div>
            </div>
            <div className="Cohort-one">
                <h1 className="Cohort-title">Cohort One</h1>
                <div className="Cohort-links">
                    <p><a href="#">Overview</a></p>
                    <p><a href="#">Details</a></p>
                    <p><a href="#">Modules</a></p>
                    <button className="Cohort-button"><h3>Know More</h3></button>
                </div>
            </div>
        </div>
    )
}
