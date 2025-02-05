import React from "react";
import { Link } from "react-router-dom";
import "../styles/BlogCard.css"


export default function BlogCard() {
    return (
        <>
            <div className="blog-card">
                <div className="blog-card-image">
                    <img src="../../public/images/blog.jpg" alt="" />
                </div>
                <div className="blog-card-body">
                    <h2 className="blog-card-title">Blog Title</h2>
                    <p className="blog-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Duis faucibus lacus dolor, et condimentum turpis gravida nec. Nam vestibulum...</p>
                    
                </div>
                <Link><button>Read Post</button></Link>
            </div>
        </>
    )
}