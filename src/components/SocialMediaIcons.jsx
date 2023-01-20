import React from "react";
import {FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa"
import useMediaQuery from "../hooks/useMediaQuery";


function SocialMediaIcons(){

    const isAboveSM = useMediaQuery("(min-width:768px)");
    const size = isAboveSM ? 42 : 21;
    return(
        <div className="flex my-10 ">
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer">
            <FaLinkedin size={size}/>
        </a>
        <a
        className="hover:opacity-50 mx-5 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer">
            <FaInstagram size={size}/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer">
            <FaFacebookSquare size={size}/>
        </a>
        <a
        className="hover:opacity-50 mx-5 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer">
            <FaTwitterSquare size={size}/>
        </a>

        </div>
    )
}

export default SocialMediaIcons;