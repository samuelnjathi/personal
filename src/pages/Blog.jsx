import React from "react";
import Title from "../components/Title";
import BlogCard from "../components/BlogCard";

export default function Blog() {
    return (
        <>
            <Title name="My Blogs" />
            <div className="container">
                <div className="row">
                    <BlogCard />
                </div>
            </div>
        </>
    )
}