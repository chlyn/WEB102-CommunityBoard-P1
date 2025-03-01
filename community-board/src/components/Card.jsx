import React from "react";
import '../Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.alt}/>
            <div className="card-container">
                <h4><b>{props.title}</b></h4>
                <p><b>{props.dateTitle}</b> {props.date}</p>
                <p><b>{props.locationTitle}</b> {props.location}</p>
                <p><b>Description:</b> {props.description}</p>
            </div>
            <button className="card-button" onClick={() => window.open(props.link, "_blank")}>{props.button}</button>
        </div>
    )
}

export default Card;