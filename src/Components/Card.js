import React from 'react'

export default function Card(props) {
    return (
        <div className="card-panel center grey lighten-4 z-depth-1">
            {props.children}
        </div>
    )
}
