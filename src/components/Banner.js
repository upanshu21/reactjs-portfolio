import React from 'react'
import {FaFacebookF, FaTwitter,FaPinterestP,FaInstagram} from "react-icons/fa"


const Banner = () => {

    const [state] = React.useState({
        title: "DStack Inc.",
        text: "Hi, my name is Upanshu and I am an All stack developer"
    })
    return <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header__content">
                        <div className="header__section">
                        <ul className="header__ul">
                            <li>
                                <FaFacebookF/>
                            </li>
                            <li>
                                <FaTwitter/>
                            </li>
                            <li>
                                <FaPinterestP/>
                            </li>
                            <li>
                                <FaInstagram/>
                            </li>
                        </ul>
                        <h1>{state.title}</h1>
                        <p>{state.text}</p>
                        <div className="header__buttons">
                            <a href="" className="btn btn-outline"> My Portfolio</a>
                    
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6"></div>
        </div>
    </header>;
};

export default Banner
