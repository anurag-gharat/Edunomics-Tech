import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    const styles="card-panel center "
    return (
        <div className={styles+props.mystyle}>
            {props.children}
            {props.title ? <h6>{props.title}</h6>:null   }            
            {props.text ? <p>{props.text}</p>:null   }
            {props.button ? <Link to={props.button.path} className="btn deep-purple white-text" >{props.button.text}</Link>:null   }            


        </div>
    )
}
