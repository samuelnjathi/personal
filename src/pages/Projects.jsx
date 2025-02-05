import React from "react";
import Title from "../components/Title";
import Card from "../components/BookCard";
import Button from "../components/Button/Button";

export default function Projects() {
    return (
        <>
            <Title name="My Projects" />
            <div className="container">
                <div className="row">
                    <Card 
                        img="../../public/images/github.jpg"
                        alt="Project Image"
                        title="Motorsports"
                        desc="A car buying and selling web application in Bootstrap, Node js with Express js and Postgres"
                        button={ <Button name="Live Preview"/>}
                        button2={ <Button name="Github"/>}
                    />
                </div>
            </div> 
        </>
    );
}