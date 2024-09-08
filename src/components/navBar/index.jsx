import React from "react";
import { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi";
import './styles.scss';

const data = [
    {
        label: 'Home',
        to: '/Home'
    },
    {
        label: 'About Me',
        to: '/About'
    },
    {
        label: 'Skills',
        to: '/Skills'
    },
    {
        label: 'Portfolio',
        to: '/Portfolio'
    },
    {
        label: 'Resume',
        to: '/Resume'
    },
    {
        label: 'Contact me',
        to: '/Contact'
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
                    <Link to={'/'} className="navbar_container_logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar_container_menu_item">
                            <Link 
                                className="navbar_container_menu_item_links" 
                                to={item.to} 
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </Link>
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
