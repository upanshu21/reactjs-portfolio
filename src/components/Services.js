import React from 'react'
import {FaGithub, FaAws } from "react-icons/fa"
import {GrReactjs} from "react-icons/gr"
import {SiJava} from "react-icons/si"
import {RiTerminalBoxLine} from "react-icons/ri"



const Services = () => {

    const [header] = React.useState({
        heading: "SERVICES",
        mainHeader: "My Services",
        mainContent: "In publishing and graphic design, Lorem ipsum is a \
        placeholder text commonly used to demonstrate the visual form of \
        a document or a typeface without relying on meaningful content.\
        Lorem ipsum may be used as a placeholder before final copy is available."
    })

    const [cardJava] = React.useState({
        header: "FS Java development",
        content: "- Full stack Java SpringBoot developer proficient\
        in collections,\
        \n validations, APIs, data structures, messaging queues."
    })

    const [cardWeb] = React.useState({
        header: "Web Development",
        content: " In publishing and graphic design, Lorem ipsum is a \
        placeholder text commonly used to demonstrate the visual form of \
        a document or a typeface without relying on meaningful content.\
        Lorem ipsum may be used as a placeholder before final copy is available."

    })

    const [cardAws] = React.useState({
        header: "Aws Solutions",
        content: " In publishing and graphic design, Lorem ipsum is a \
        placeholder text commonly used to demonstrate the visual form of \
        a document or a typeface without relying on meaningful content.\
        Lorem ipsum may be used as a placeholder before final copy is available."

    })

    const [cardAutomation] = React.useState({
        header: "Automation",
        content: " In publishing and graphic design, Lorem ipsum is a \
        placeholder text commonly used to demonstrate the visual form of \
        a document or a typeface without relying on meaningful content.\
        Lorem ipsum may be used as a placeholder before final copy is available."

    })

    const [cardConsultancy] = React.useState({
        header: "Consultancy",
        content: " In publishing and graphic design, Lorem ipsum is a \
        placeholder text commonly used to demonstrate the visual form of \
        a document or a typeface without relying on meaningful content.\
        Lorem ipsum may be used as a placeholder before final copy is available."

    })
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">{header.title}</h3>
                        <h1 className="mainHeader">{header.mainHeader}</h1>
                        <p className="mainContent">{header.mainContent}</p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="service-box">
                                <SiJava className="commonIcons"/>
                                <div className="service__box-header">{cardJava.header}</div>
                                <div className="service__box-p">{cardJava.content}</div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="service-box">
                                <GrReactjs className="commonIcons"/>
                                <div className="service__box-header">{cardWeb.header}</div>
                                <div className="service__box-p">{cardWeb.content}</div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="service-box">
                                <FaAws className="commonIcons"/>
                                <div className="service__box-header">{cardAws.header}</div>
                                <div className="service__box-p">{cardAws.content}</div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="service-box">
                                <FaGithub className="commonIcons"/>
                                <div className="service__box-header">{cardAutomation.header}</div>
                                <div className="service__box-p">{cardAutomation.content}</div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="service-box">
                                <RiTerminalBoxLine className="commonIcons"/>
                                <div className="service__box-header">{cardConsultancy.header}</div>
                                <div className="service__box-p">{cardConsultancy.content}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services
