import React from 'react'
import Heading from '../Components/Heading'
import {AiOutlineApartment} from 'react-icons/ai'
import {FaFileInvoice,FaCheckCircle,FaDesktop,FaCity} from 'react-icons/fa'
import {MdSmartphone} from 'react-icons/md'
import {RiShipLine} from 'react-icons/ri'
import Card from '../Components/Card'
import DiscussForm from '../Components/DiscussForm'

export default function Solutions() {
    return (
        <>
        <section>
          <Heading title="Building Innovative Software Solutions for Business" />
          <div className="row">
              <div className="container mt-5">
                  
            <blockquote><h4>Software Solutions that we Built</h4></blockquote>
            <p>We create high-performance, interactive, user-friendly applications helping companies bring their business to a whole new level.
Software focuses on the delivery of the apps designed to enhance the clients' business.</p>
                <div className="row">
                    <div className="col s6 l4 m6">
                        <Card title="Distribution Management System" text="Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system" mystyle="white lighten-4 z-depth-1">
                            <FaDesktop className="display-2 deep-purple-text" />
                        </Card>
                    </div>
                    <div className="col s6 l4 m6">
                        <Card title="Service Management System" text="Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system" mystyle="white lighten-4 z-depth-1">
                            <AiOutlineApartment  className="display-2 deep-purple-text"/>
                        </Card>
                    </div>
                    <div className="col s6 l4 m6">
                        <Card title="Invoice/Procurement Management System" text="Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system" mystyle="white lighten-4 z-depth-1">
                            <FaFileInvoice className="display-2 deep-purple-text" />
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 l4 m6">
                        <Card title="Fleet Managent System" text="Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system" mystyle="white lighten-4 z-depth-1">
                            <RiShipLine  className="display-2 deep-purple-text"/>
                        </Card>
                    </div>
                    <div className="col s6 l4 m6">
                        <Card title="Quality Management System" text="Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system" mystyle="white lighten-4 z-depth-1">
                            <FaCheckCircle  className="display-2 deep-purple-text" />
                        </Card>
                    </div>
                    <div className="col s6 l4 m6">
                        <Card title="Interactive Marekting Apps" text="Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system" mystyle="white lighten-4 z-depth-1">
                            <MdSmartphone  className="display-2 deep-purple-text" />
                        </Card>
                    </div>
                </div>
              </div>
          </div>
          </section>
          <DiscussForm />
          
                    <div className="mt-5">
                <div className="row">
                <div className="container left-align">
            <blockquote><h4>Latest Tech we apply!</h4></blockquote>
            </div>
                    <div className="col l4 s6 m6 offset-l4">
                        <Card title="Enterprise Application" mystyle="white lighten-4 z-depth-1">
                            <FaCity  className="display-2 deep-purple-text" />
                        </Card>
                    </div>
                </div>
            </div>  
        </>
    )
}
