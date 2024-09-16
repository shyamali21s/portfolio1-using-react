import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import './styles.scss';

const data = [
    {
        label: 'Home',
        to: '#home' // Anchor link to the "home" section
    },
    {
        label: 'About Me',
        to: '#about' // Anchor link to the "about" section
    },
    {
        label: 'Skills',
        to: '#skills' // Anchor link to the "skills" section
    },
    {
        label: 'Portfolio',
        to: '#portfolio' // Anchor link to the "portfolio" section
    },
    {
        label: 'Resume',
        to: '#resume' // Anchor link to the "resume" section
    },
    {
        label: 'Contact me',
        to: '#contact' // Anchor link to the "contact" section
    },
];

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleLinkClick = () => {
        setToggleIcon(false); // Close the menu when a link is clicked
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <a href="#home" className="navbar_container_logo">
                        <FaReact size={30} />
                    </a>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar_container_menu_item">
                            <a
                                className="navbar_container_menu_item_links"
                                href={item.to} // Use anchor link for scrolling
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="nav_icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
