import React from 'react'
import Heading from '../Components/Heading'
import BlockQuote from '../Components/BlockQuote'
import Card from '../Components/Card'
import {FcServices} from 'react-icons/fc'
import DiscussForm from '../Components/DiscussForm'


export default function Services() {
    return (
        <>
         <section>
            <Heading title="Development Services"></Heading>
            <div className="container">
            <BlockQuote title="Our Services,Packed or Seperate" />
            <div className="row">
                <div className="col l4 s6 m6">
                    <Card  mystyle="card-height" title="Custom Software Development" text="Our Young team is equally passionate to develop a software as per the specific needs of your business rapidly" button={{text:"Know More",path:"knowmore"}}>
                        <FcServices className="display-2" />
                    </Card>
                </div>
                <div className="col l4 s6 m6">
                    <Card  mystyle="card-height" title="Dedicated Development Teams" text="Each Edunomics client works with a handpicked team of our experts. From idea to implementation, we can leverage your existing resources or become your new IT crew." button={{text:"Know More",path:"\knowmore"}}>
                        <FcServices className="display-2" />
                    </Card>
                </div>     
                <div className="col l4 s6 m6">
                    <Card mystyle="card-height" title="Legacy Software Migration" text="Implementing the best Business Analysis practices to ensure the project success." button={{text:"Know More",path:"\knowmore"}}>
                        <FcServices className="display-2" />
                    </Card>
                </div>

                <div className="col l4 s6 m6">
                    <Card mystyle="card-height" title="Computer Vision"  button={{text:"Know More",path:"\knowmore"}}>
                        <FcServices className="display-2" />
                    </Card>
                </div>
                <div className="col l4 s6 m6">
                    <Card mystyle="card-height" title="Natural Language Processing" button={{text:"Know More",path:"\knowmore"}}>
                        <FcServices className="display-2" />
                    </Card>
                </div>     
                <div className="col l4 s6 m6">
                    <Card mystyle="card-height" title="Data Analytics & Visualisation" button={{text:"Know More",path:"\knowmore"}}>
                        <FcServices className="display-2" />
                    </Card>
                </div>
            </div>
            </div>
         </section> 
         <DiscussForm />  
        </>
    )
}
