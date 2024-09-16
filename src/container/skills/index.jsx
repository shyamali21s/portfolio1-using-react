import React, { useState, useEffect } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { AnimateKeyframes, Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import './style.scss';

const SKills = () => {
    const [inView, setInView] = useState(false); 

    useEffect(() => {
        const section = document.getElementById("skills");
        console.log("Section:", section); // Debug log
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log("Intersection:", entry.isIntersecting); // Debug log
                    if (entry.isIntersecting) {
                        setInView(true);
                    } else {
                        setInView(false);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (section) {
            observer.observe(section);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText='Skills'
                icon={<BsInfoCircleFill size={40} />} />
            <div className="skills_content-wrapper">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills_content-wrapper_inner-content">
                            <Animate
                                play={inView} // Trigger animation based on visibility
                                duration={1}
                                delay={0.3}
                                start={{
                                    opacity: 0,
                                    transform: 'translateX(-200px)',
                                }}
                                end={{
                                    opacity: 1,
                                    transform: 'translateX(0px)',
                                }}
                            >
                                <h3 className="skills_content-wrapper_inner-content_category-data">{item.label}</h3>
                                <div className="skills_content-wrapper_inner-content_progressBar-container">
                                    {
                                        item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                key={j}
                                                play={inView} // Trigger animation based on visibility
                                                duration={1}
                                                keyframes={["opacity: 0", "opacity: 1", "transform: translateX(0px)"]}
                                                iterationCount="1"
                                            >
                                                <div className="progressbar_wrapper">
                                                    <p>{skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.percentage}
                                                        strokeWidth="4"
                                                        trailWidth={"2"}
                                                        strokeColor="var(--yellow-theme-main-color)"
                                                        strokeLinecap="square"
                                                    />
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default SKills;
