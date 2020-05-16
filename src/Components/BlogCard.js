import React from 'react'

export default function BlogCard() {
    return (
        <div className="card">
        <div className="card-image">
          <img src="https://s3-ap-south-1.amazonaws.com/redlof/think201.com/uploads/2019/02/website-vs-web-app-1024x384.png" />
        </div>
        <div className="card-content">
            <h5 className="deep-purple-text">How to develop a webApp for Business Operations</h5>
          <p>The outcome of business operations is the harvesting of value from assets owned by a business. Assets can be either physical or intangible. An example of value derived from a physical asset, like a building, is rent.</p>
        </div>
        <div className="card-action deep-purple-text">
          <a href="#" className="deep-purple-text">Read this article</a>
        </div>
      </div> 
    )
}
