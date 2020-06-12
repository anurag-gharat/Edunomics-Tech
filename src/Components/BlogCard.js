import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({item}) {
    return (
        <div className="card hoverable">
        <div className="card-image">
          <img src={item.image_url} alt="BLog Image" />
        </div>
        <div className="card-content">
        <h5 className="deep-purple-text">{item.title}</h5>
        <p>{item.blog_content.substring(0,200)}...</p>
        </div>
        <div className="card-action deep-purple-text">
          <Link className="deep-purple-text" to={{pathname:`/blog/${item.title}`,blog:item}} >Read this article</Link>
        </div>
      </div> 
    )
}
// https://s3-ap-south-1.amazonaws.com/redlof/think201.com/uploads/2019/02/website-vs-web-app-1024x384.png