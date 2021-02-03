import React from 'react'
import {IoIosArrowDropleft} from "react-icons/io"
import slide from './slide'


const Nav = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_container">
                <ul className="navbar__left">
                    <div className="navbar__left-logo">
                        <img src="/logo.jpg" alt="" />
                    </div>
                </ul>
                <ul className="navbar__right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <IoIosArrowDropleft className="drop" />
                </div>
            </div>
            <script async= "true"src="/slide.js" type="text/javascript" />
        </div>
    )
}

export default Nav
