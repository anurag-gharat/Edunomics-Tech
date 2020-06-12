import React, { useState, useEffect } from 'react'
import Heading from '../Components/Heading'
import BlockQuote from '../Components/BlockQuote'
import Card from '../Components/Card'
import DiscussForm from '../Components/DiscussForm'
import {getAllServices} from '../API/AllData'
import Loading from '../Components/Loading'

export default function Services() {

    const [loading,setLoading] =useState(true)
    const [data,setData]=useState([])

    useEffect(()=>{
        getAllServices()
        .then(res=>setData(res.data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])

    return (
        <>
         <section>
            <Heading title="Development Services"></Heading>
            <div className="container">
            <BlockQuote title="Our Services,Packed or Seperate" />
            <div className="row">
                    {loading ?  
                    (<Loading />) 
                    : 
                    (data.map((item)=>(
                    <div className="col l4 s6 m6">
                    <Card key={item._id}  mystyle="card-height" title={item.projectName} text={item.brief} >
                    <div className="card-image">
                    <img src="https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="responsive-img" />
                    {/* <img src={`https://edunomics.herokuapp.com/api/tech/getpic/${item.solutionImgUrl}`}  alt="Image" /> */}
                    </div>
                    </Card>
                    </div>
                    ))) 
                    }
              </div>                
            </div>
         </section> 
         <DiscussForm />  
        </>
    )
}
