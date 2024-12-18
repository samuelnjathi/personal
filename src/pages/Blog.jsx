import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Card from "../components/Card";
import Button from "../components/Button/Button";

export default function Blog() {
    return (
        <>
            <Heading />
            <Title name="My Blogs" />
            <Card 
                img="../../public/images/blog 1.jpg"
                alt="blog 1"
                title="Blog 1"
                desc="This is the first blog"
                button={ <Button name="Read More" /> }
            />
            <Footer />
        </>
    )
}