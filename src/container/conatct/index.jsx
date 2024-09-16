import React, { useRef, useEffect, useState } from "react";
import './style.scss';
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [inView, setInView] = useState(false);

    // IntersectionObserver to detect when the Contact section is in view
    useEffect(() => {
        const section = document.getElementById("contact");
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s8s0zej', 'template_n2jmnuf', form.current, 'DLPSCKTfoDOs3uoII')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again later.");
            });
    };

    return (
        <div>
            <section id="contact" className="contact">
                <PageHeaderContent
                    headerText='Contact Me'
                    icon={<BsInfoCircleFill size={40} />} />
                <div className="contact_content">
                    <Animate
                        play={inView} // Only play animation when the section is in view
                        duration={1}
                        delay={0}
                        start={{
                            transform: "translateX(-200px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}>
                        <h3 className="contact_content_header-text">Let's talk</h3>
                    </Animate>
                    <Animate
                        play={inView} // Only play animation when the section is in view
                        duration={1}
                        delay={0}
                        start={{
                            transform: "translateX(200px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}>
                        <div className="contact_content_form">
                            <form ref={form} onSubmit={sendEmail} className="contact_content_form_controlasWrapper">
                                <div>
                                    <input required name="name" className="inputName" type="text" />
                                    <label htmlFor="name" className="namelabel">Name</label>
                                </div>
                                <div>
                                    <input required name="email" className="inputEmail" type="email" />
                                    <label htmlFor="email" className="emaillabel">Email</label>
                                </div>
                                <div>
                                    <textarea required name="message" className="inputDescription" rows="5" />
                                    <label htmlFor="message" className="Descriptionlabel">Description</label>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </Animate>
                </div>
            </section>
        </div>
    );
}

export default Contact;
