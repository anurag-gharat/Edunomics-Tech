import React from 'react'
import Heading from '../Components/Heading'
import BlogCard from '../Components/BlogCard'

export default function Blog() {
    return (
        <>
          <div className="container-fluid">
            <Heading title="Blog" />
            <div className="row">
                <div className="col s12 l4 m6">
                <BlogCard />
                </div>
                <div className="col s12 l4 m6">
                <BlogCard />
                </div>
                <div className="col s12 l4 m6">
                <BlogCard />
                </div>
            </div>
            </div>  
        </>
    )
}
