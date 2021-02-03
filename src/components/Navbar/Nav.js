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
                    <li><a href="https://github.com/upanshu21/reactjs-portfolio">Home</a></li>
                    <li><a href="https://github.com/upanshu21/reactjs-portfolio">About</a></li>
                    <li><a href="https://github.com/upanshu21/reactjs-portfolio">Skills</a></li>
                    <li><a href="https://github.com/upanshu21/reactjs-portfolio">Portfolio</a></li>
                    <li><a href="https://github.com/upanshu21/reactjs-portfolio">Blog</a></li>
                    <li><a href="https://github.com/upanshu21/reactjs-portfolio">Contact</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
