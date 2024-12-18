import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Card from "../components/Card";
import Button from "../components/Button/Button";

export default function Projects() {
    return (
        <>
            <Heading />
            <Title name="My Projects" />
            <Card 
                img="../../public/images/github.jpg"
                alt="Project Image"
                title="Motorsports"
                desc="A car buying and selling web application in Bootstrap, Node js with Express js and Postgres"
                button={ <Button name="Live Preview"/>}
                button2={ <Button name="Github"/>}
            />
            <Footer />
        </>
    );
}