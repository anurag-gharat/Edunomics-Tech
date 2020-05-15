import React from 'react'

export default function HalfBlock(props) {
    return (
        <div className="col l6 s12 m12">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}
