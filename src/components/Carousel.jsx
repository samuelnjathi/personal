import React from 'react';

export default function Carousel() {
    return (
        <section className="carousel">
            <div className="img-container">
                <img src='../../public/images/header1.jpg' />
            </div>
            <div className="overlay-text">
                <h1>Welcome to my <span style={{display: "block"}}>My Website</span></h1>
            </div>
            <div className="overlay-sign">
                <h1>S.Njathi</h1>
            </div>
        </section>
    );
}