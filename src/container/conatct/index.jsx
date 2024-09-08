import React from "react";
import './style.scss';
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
const Contact = () => {
    return (
        <div>
            <section id="contact" className="contact">
                <PageHeaderContent
                    headerText='Contact Me'
                    icon={<BsInfoCircleFill size={40} />} />
                <div className="contact_content">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: "translateX(-200px)"
                        }}
                        end={
                            {
                                transform: "translateX(0px)"
                            }
                        }
                    >
                        <h3 className="contact_content_header-text">Let's talk </h3>

                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: "translateX(200px)"
                        }}
                        end={
                            {
                                transform: "translateX(0px)"
                            }
                        }
                    >
                        <div className="contact_content_form">
                            <div className="contact_content_form_controlasWrapper">
                                <div >
                                    <input required name="ame" className="inputName" type={"text"} />
                                    <label htmlFor="name" className="namelabel">Name</label>
                                </div>
                                <div>
                                    <input required name="email" className="inputEmail" type={"text"} />
                                    <label htmlFor="email" className="emaillabel">Email</label>
                                </div>
                                <div >
                                    <textarea required name="Description" className="inputDescription" type={"text"} rows="5" />
                                    <label htmlFor="Description" className="Descriptionlabel">Description</label>
                                </div>
                                
                            </div>
                            <button>Submit</button>
                        </div>

                    </Animate>
                </div>

            </section>
        </div>
    )
}
export default Contact;