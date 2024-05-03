import React from 'react';


const NavTest = () => {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                    <li className="navbar-item"><a href="/test" className="navbar-link">테스트해봐</a></li>
                    <li className="navbar-item"><a href="http://localhost:3000/pedal/home" className="navbar-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavTest;