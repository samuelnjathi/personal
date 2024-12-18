import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../components/Button/Button";

export default function Books() {
    return ( 
        <>
            <Heading />
            <Title name="Books" />
            <Card 
                img="../../public/images/atomic habits.jpg"
                alt="Book image"
                button={ <Button name="Get Book" /> }
                button2={ <Button name="See Notes" /> }
            />
            <Footer />
        </>
    );
}