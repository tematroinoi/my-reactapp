import React from 'react'
import './card.css'

const Card = props => (
    <div className='Card'>
        <img src={props.image}></img>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>

)

export default Card