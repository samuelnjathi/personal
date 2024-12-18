import React from "react";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";


export default function Contact() {
    return (
        <>
            <Heading />
            <Title name="Contact Me" />
            <div className="grid-container">
                <div className="grid-item form">
                    <h2>Get in Touch</h2>
                    <form action="">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <br/>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <br/>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="7" required />
                        <br/>
                        <Button name="Submit" />
                    </form>
                </div>
                <div className="grid-item contact">
                    <div className="contactIcon">
                        <XIcon className="icon" style={{ fontSize: 30 }} />
                        <Link>sammy_tush_ </Link >
                    </div>
                    <div className="contactIcon">
                        <InstagramIcon className="icon"  style={{ fontSize: 30}} />
                        <Link>sammy_tush_ </Link >
                    </div>
                    <div className="contactIcon">
                        <FacebookIcon  className="icon"  style={{ fontSize: 30 }} />
                        <Link>Samuel Njathi</Link >
                    </div>
                    <div className="contactIcon">
                        <LinkedInIcon className="icon"  style={{ fontSize: 30 }} />
                        <Link>Samuel Njathi</Link >
                    </div>
                    <div className="contactIcon">
                        <GitHubIcon className="icon"  style={{ fontSize: 30 }} />
                        <Link>samuelnjathi</Link >
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}