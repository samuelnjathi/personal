import React from "react";
import Card from "../components/BookCard";
import Title from "../components/Title";
import Button from "../components/Button/Button";

export default function Books() {
    return ( 
        <>
            
            <Title name="Books" />
            <div className="container">
                <div className="row">
                    <Card 
                        img="../../public/images/atomic habits.jpg"
                        alt="Book image"
                        button={ <Button name="Get Book" /> }
                        button2={ <Button name="See Notes" /> }
                    />
                </div>
            </div>
            
           
        </>
    );
}