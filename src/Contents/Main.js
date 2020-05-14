import React from 'react'
import Landing from '../Images/landing4.svg'

export default function Main() {
    return (
        <div className="row">
           <div className="">
           <div className="col l6 s12 p-t-200">
            <h4>Edunomics Tech Solutions is a custom software development company</h4>
            <p className="grey-text darken-4">Edunomics provides turn-key software development services that add value to your business.</p>
            <p>Contact us today and transform your ideas into solutions!</p>
            <buton className="btn deep-purple darken-4 ">Start</buton>
            </div>
            <div className="col l6 s12">
                <img src={Landing} alt="Landing Page" height="100%" width="100%"/>
            </div>
           </div>
        
        
        </div>
    )
}
