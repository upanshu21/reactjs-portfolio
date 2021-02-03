import React from 'react'
import './Nav.css'


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
                </div>
            </div>
        </div>
    )
}

export default Nav
