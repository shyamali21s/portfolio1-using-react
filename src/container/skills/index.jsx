import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { AnimateKeyframes, Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import './style.scss';

const SKills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText='Skills'
                icon={<BsInfoCircleFill size={40} />} />
            <div className="skills_content-wrapper">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills_content-wrapper_inner-content">
                            {/* Outer animation for each skill category */}
                            <Animate
                                play={true} // Animation should be played
                                duration={1} // Animation duration
                                delay={0.3} // Delay before animation starts
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
                                                play={true}
                                                duration={1} // Animation duration
                                                keyframes={["opacity: 0", "opacity: 1", "transform: translateX(0px)"]}
                                                iterationCount="1"
                                            >
                                                <div className="progressbar_wrapper" key={j}>
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
