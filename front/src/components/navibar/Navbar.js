import React from 'react';
import './navbar.css'
import { PiMessengerLogoLight } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <a href="/">
                    <img src="/image/pedal-n.png" alt="" />
                </a>
            </div>

            <ul className="navbar-list">

            <li className="navbar-item">
                    <a href="/chat" className="navbar-link">
                        CHAT
                        <PiMessengerLogoLight style={{ marginLeft: '15px', fontSize: '38px' }} />
                    </a>
                </li>
          
                <li className="navbar-item">
                    <a href="http://localhost:3000" className="navbar-link">
                        PEDAL
                        <LiaHomeSolid style={{ marginLeft: '12px', fontSize: '32px' }} />
                    </a>
                </li>

            </ul>

        </div>
    );
};

export default Navbar;