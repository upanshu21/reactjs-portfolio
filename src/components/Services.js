import React from 'react'
import {FaGithub, FaAws } from "react-icons/fa"
import {GrReactjs} from "react-icons/gr"
import {SiJava} from "react-icons/si"
import {RiTerminalBoxLine} from "react-icons/ri"
import {IoMdCube} from "react-icons/io"



const Services = () => {

    const [header] = React.useState({
        heading: "SERVICES",
        mainHeader: "My Services",
        mainContent: "I am a Software Consultant and Developer. Proficient in JAVA at the backend\
        side and ReactJs for front end. Worked with best in industry and implement all the best practices in my work.\
        I provide Architectural solutions and design consultancies for our clients and help them not only in building \
        a good product but also make them future ready."
    })

    const [cardJava] = React.useState({
        header: "FS Java development",
        content: "Full stack Java SpringBoot developer proficient\
        'in collections',\
        \n validations, APIs, data structures, messaging queues. Database: mongoDB."
    })

    const [cardWeb] = React.useState({
        header: "Web Development",
        content: "Started the software journey as a web developer.\
         Proficient in HTML/CSS. Building proficieny in ReactJs. I think this portfolio will speak for itself."

    })

    const [cardAws] = React.useState({
        header: "Aws Solutions",
        content: "Levraging Aws services like Kinesis data streams, Kinesis firehose, DynamoDB, cloudwatch, pinpoint, sns\
        for microservice architecture. I am on the road to become AWS solutions Architect. But let's see! "

    })

    const [cardAutomation] = React.useState({
        header: "Automation",
        content: "I am Always eger to automate builds. Who likes to manually test things? right?\
        I user docker, bashscripts for automation and familiar with quark pipelines. Working on travisCI for fun."

    })

    const [cardConsultancy] = React.useState({
        header: "Consultancy",
        content: "I don't consider myself full stack. I like to call it all stack. Ofcourse I can't learn everything\
        but I try to. In the process I can help others as well. Feel free to contact for any consultancy services."

    })

    const [cardOpenSource] = React.useState({
        header: "OpenSource Contribution",
        content: "Official 'localstack/java-util' contributer. \
        localstack is AWS implementation on local machine."
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

                        <div className="col-4">
                            <div className="service-box">
                                <FaGithub className="commonIcons"/>
                                <div className="service__box-header">{cardAutomation.header}</div>
                                <div className="service__box-p">{cardAutomation.content}</div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="service-box">
                                <RiTerminalBoxLine className="commonIcons"/>
                                <div className="service__box-header">{cardConsultancy.header}</div>
                                <div className="service__box-p">{cardConsultancy.content}</div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="service-box">
                                <IoMdCube className="commonIcons"/>
                                <div className="service__box-header">{cardOpenSource.header}</div>
                                <div className="service__box-p">{cardOpenSource.content}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services
