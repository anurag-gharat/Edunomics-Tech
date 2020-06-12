import React from 'react'
import BlockQuote from '../Components/BlockQuote'

export default function SingleBlog(props) {
    
    
    const {title,subtitle,blog_content,image_url,uploadDate}=props.location.blog
    const d = new Date(uploadDate)
    return (
        <div className="container-fluid">
            <section className="section">
            <BlockQuote title={title} />
            <div className="container">
            <img src="https://s3-ap-south-1.amazonaws.com/redlof/think201.com/uploads/2019/02/website-vs-web-app-1024x384.png" className="responsive-img" />
            </div>
            <p>Posted on{d.toDateString()}</p>
            <h4>{subtitle}</h4>
            <p>
                {blog_content}
            </p>   
            </section>
                   
        </div>
    )
}
