import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import {FaCity} from 'react-icons/fa'
import Card from '../Components/Card'
import DiscussForm from '../Components/DiscussForm'
import {getAllSolutions} from '../API/AllData'
import Loading from '../Components/Loading'


export default function Solutions() {
    
    const [loading,setLoading]= useState(true)
    const [data,setData]= useState([])
    

    useEffect(()=>{
        getAllSolutions()
        .then(response=>setData(response.data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])
    

    console.log(data,loading)

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
                {loading ? (<Loading></Loading>)
                :
                
                (data.map(((item)=>(
                    <div className="col s6 l4 m6" key={item._id}>
                <Card title={item.solutionName} text={item.brief} mystyle="white lighten-4 z-depth-1">
                    <div className="card-image">
                    <img src="https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="responsive-img" />
                    {/* <img src={`https://edunomics.herokuapp.com/api/tech/getpic/${item.solutionImgUrl}`}  alt="Image" /> */}
                    </div>
                </Card>
            </div>
                ))))}
                
                
                    
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
