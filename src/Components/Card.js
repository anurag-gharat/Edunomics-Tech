import React from 'react'

export default function Card(props) {
    const styles="card-panel center "
    return (
        <div className={styles+props.mystyle}>
            {props.children}
            {props.title ? <h6>{props.title}</h6>:null   }            
            {props.text ? <p>{props.text}</p>:null   }            

        </div>
    )
}
