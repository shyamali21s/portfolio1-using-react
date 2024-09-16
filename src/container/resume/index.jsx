import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { data } from "./utils";
import './style.scss';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { useState,useEffect } from "react";
const Resume=()=>{
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const section = document.getElementById("resume");
        console.log(section); // Check if section is correctly selected
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log(entry.isIntersecting); // Check if the section is intersecting
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
    
    return(
        <section id="resume" className="resume">
        <PageHeaderContent
        headerText='Resume'
        icon={<BsInfoCircleFill size={40}/>}/>
         <div className="timeline">
            <div className="timeline_experience">
                <h3 className="timeline_education_header_text">
                    Experience
                </h3>
                <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)">
                        {
                          
                          data.experience.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timeline_experience_vertical_timeline-element"
                                contentStyle={{
                                    background : 'none',
                                    color : 'var(--yellow-theme-sub-text-color)',
                                    border : '1.5px solid var(--yellow-theme-main-color)'
                                }}
                                date="2020-present"
                                icon={<MdWork/>}
                                iconStyle={{
                                    background: '#181818',
                                    color : 'var(--yellow-theme-main-color)',
                                }}
                                >
                                  
                                    <div className="vertical-timeline-element-title-wrapper">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <h4>
                                        {item.subTitle}
                                    </h4>
                                    

                                    </div>
                                    <p>{item.description}</p>
                                </VerticalTimelineElement>
                            )
                            )
                        }
                </VerticalTimeline>
                </div>
                <div className="timeline_education"> 
                    <h3 className="timeline_education_header_text"> 
                        education

                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)">
                        {
                          
                          data.education.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timeline-experience_vertical_timeline-element"
                                contentStyle={{
                                    background : 'none',
                                    color : 'var(--yellow-theme-sub-text-color)',
                                    border : '1.5px solid var(--yellow-theme-main-color)'
                                }}>
                                {/* date="2020-present"
                                icon={<MdWork/>}
                                iconStyle={{
                                    background: '#181818',
                                    color : 'var(--yellow-theme-main-color)',
                                }} */}
                                    
                                    <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                        {item.title}
                                    </h3>
                                    <h4 className="vertical-timeline-element-subTitle">
                                        {item.subTitle}
                                    </h4>
                                   
                                    </div>
                                    <p>{item.description}</p>
                                </VerticalTimelineElement>
                            )
                            )
                        }
                </VerticalTimeline>
                </div>
            </div>
        
       </section>
    )
}
export default Resume;