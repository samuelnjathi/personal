import React from "react";
import "../styles/BookCard.css";

export default function BookCard(props) {
    return (
                <div className="card">
                    <div className="card-img">
                        <img src={props.img} alt={props.alt} />
                    </div>
                    <div className="card-text">
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>
                        {props.button}
                        {props.button2}
                    </div>
                </div>
    );
}