import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Heading from '../../Components/Heading'
import Car1 from '../../Images/car1.png'
import Car2 from '../../Images/car2.png'
import Car3 from '../../Images/car3.png'
import Car4 from '../../Images/car4.png'
import Car5 from '../../Images/goldrat.png'
import Car6 from '../../Images/car6.png'
import Card from '../../Components/Card';



export default function WhatWeCreated() {
    
    
    useEffect(()=>{

        


    },[])
    
    
    return (
        <section id="whatwecreated" className="section scrollspy"> 
                <Heading title="What We Created?" />   
            <div className="container">
            <div className="row">
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car1} alt="Brands" width="100%" height="100px"/>
                        </Card>
                    </div>
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car2} alt="Brands" width="100%"  height="100px"/>
                        </Card>
                    </div>
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car3} alt="Brands" width="100%" height="100px" />
                        </Card>
                    </div>
                </div>         
                <div className="row">
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car4} alt="Brands" width="100%" height="100px"/>
                        </Card>
                    </div>
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car5} alt="Brands" width="100%"  height="100px"/>
                        </Card>
                    </div>
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car6} alt="Brands" width="100%" height="100px" />
                        </Card>
                    </div>
                </div>  
            
            </div>
            <div className="row center">
                {/* the initial idea is to make a seperate page here! Searching for some other idea */}
                <Link to="/works" className="white-text btn btn-large deep-purple hoverable">Know More</Link>
            </div>
        
        </section>
    )
}
