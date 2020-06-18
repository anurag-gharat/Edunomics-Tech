import React from 'react'
import Avatar from '../Images/careeravatar.jpg'


export default function CareerCard() {
    return (
        <div className="col l4 s6">
            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator circle" src={Avatar} alt="Avatar of Career"  height="200px"/>
            </div>
            <div className="card-content center">
            <span className="card-title activator grey-text text-darken-4">Front End Developer</span>
            <a className="btn center blue " href="/">Apply Now</a>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4" >Front End Developer<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            
            </div>
        </div>
        </div>
    )
}
