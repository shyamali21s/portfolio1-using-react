import React from "react";
import './style.scss';
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Value } from "sass";
import { Animate } from "react-simple-animate";
const personalDetails = [
    {
        label: "Name",
        value: "Marziya Shyamali",
    },
    {
        label: "Age",
        value: "25",

    },
    {
        label: "Address",
        value: "Sylhet,Bangladesh",
    },
    {
        label: "Mail",
        value: "marjiya****@gmail.com",
    },

];
const jobSummary = `Hello! I am a passionate front-end web developer with a strong focus on creating engaging, 
user-friendly, and responsive websites. I specialize in HTML, CSS, 
JavaScript, and modern frameworks like React.js to build interactive 
and visually appealing interfaces. With a keen eye for design and a love for clean code, 
I strive to bring ideas to life in the browser, ensuring an excellent user experience across all devices.`;

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText='about me'
                icon={<BsInfoCircleFill size={40} />} />
            <div className="about_content">
                <div className="about_content_personalWrapper">
                    <Animate
                        play={true} // Animation should be played
                        duration={1.5} // Animation duration
                        delay={0.5} // Delay before animation starts
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >
                        <h3>Front-end Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                </div>

                <div className="about_content_personalWrapper">
                    <Animate
                        play={true} // Animation should be played
                        duration={1.5} // Animation duration
                        delay={0.5} // Delay before animation starts
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}
                    >
                        <h3 className="personal_information">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
           
            {/* <div className="about_content_servicesWrapper">
                <div className="about_content_servicesWrapper_innerContent">
                    <div>
                        <FaDev size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <DiApple size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                </div> */}
            {/* </div> */}
            </div>
        </section>
    )
}
export default About;