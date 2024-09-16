import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './style.scss';
import {useState,useEffect} from "react"

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactPage = () => {
        navigate('/contact');
    };
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
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1> Hello, I'm Shymali
                    <br />
                    Front-end Developer
                </h1>
            </div>
            {/* Correct usage of Animate component */}
            <Animate
                play={true} // Animation should be played
                duration={1.5} // Animation duration
                delay={.5} // Delay before animation starts
                start={{
                    transform: 'translateY(550px)',
                }}
                end={{
                    transform: 'translateY(0px)',
                }}
            >
                <div className="home_contact-me">
                    <button onClick={handleNavigateToContactPage}>Hire me</button>
                </div>
            </Animate>
        </section>
    );
};

export default Home;
