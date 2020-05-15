import React from 'react'
import Heading from '../Components/Heading'
import Panel from '../Components/Panel'
import Img from '../Images/member1.jpg'


export default function Team() {
    return (
        <>
          <Heading title="Meet Our Team"/>
            <div className="row">
                <div className="container center">
                    <h4 className="deep-purple-text">An Organisation is made by its team.</h4>
                    <p>Meet our rockstars. Working across various parts of group-who have truly made it one of the most exciting place to work and create a differnce!</p>
                </div>
                <div className="container">
                <div className="row ">
                    <div className="col l3 s6 m4 ">
                        <Panel title="Member 1" alignment="center">
                            <img 
                            alt="member"
                            className="responsive-img circle hoverable"
                            src={Img}
                            width="80%" />
                        </Panel>
                    </div>
                    <div className="col l3 s6 m4">
                        <Panel title="Member 1" alignment="center">
                            <img 
                            alt="member"
                            className="responsive-img circle hoverable"
                            src={Img}
                            width="80%"  />
                        </Panel>
                    </div>
                    <div className="col l3 s6 m4">
                        <Panel title="Member 1" alignment="center">
                            <img 
                            alt="member"
                            className="responsive-img circle hoverable"
                            src={Img} width="80%" />
                        </Panel>
                    </div>                   
                     <div className="col l3 s6 m4">
                        <Panel title="Member 1" alignment="center">
                            <img 
                            alt="member"
                            className="responsive-img circle hoverable"
                            src={Img} width="80%" />
                        </Panel>
                    </div>
                </div>
                <div className="row">
                    <div className="col l3 s6 m4">
                        <Panel title="Member 1" alignment="center">
                            <img 
                            alt="member"
                            className="responsive-img circle hoverable"
                            src={Img} width="80%"  />
                        </Panel>
                    </div>
                    <div className="col l3 s6 m4">
                        <Panel title="Member 1" alignment="center">
                            <img 
                            alt="member"
                            className="responsive-img circle hoverable"
                            src={Img} width="80%"  />
                        </Panel>
                    </div>
                    <div className="col l3 s6 m4">
                        <Panel title="Member 1" alignment="center">
                            <img 
                            alt="member"
                            className="responsive-img circle hoverable"
                            src={Img} width="80%" />
                        </Panel>
                    </div>                   
                     <div className="col l3 s6 m4">
                        <Panel title="Member 1" alignment="center">
                            <img 
                            alt="member"
                            className="responsive-img circle hoverable"
                            src={Img} width="80%" />
                        </Panel>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
