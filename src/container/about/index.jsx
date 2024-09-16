import React, { useEffect, useState } from "react";
import './style.scss';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
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
and visually appealing interfaces.`;

const About = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const section = document.getElementById("about");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    } else {
                        setInView(false);
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about">
            <PageHeaderContent headerText='About Me' icon={<BsInfoCircleFill size={40} />} />
            <div className="about_content">
                <div className="about_content_personalWrapper">
                    <Animate
                        play={inView} // Animation only plays when the section is in view
                        duration={1.5}
                        delay={0.5}
                        start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3>Front-end Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                </div>

                <div className="about_content_personalWrapper">
                    <Animate
                        play={inView} // Animation only plays when the section is in view
                        duration={1.5}
                        delay={0.5}
                        start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translateX(0px)' }}
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
            </div>
        </section>
    );
}

export default About;
