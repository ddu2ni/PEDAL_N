import React from 'react';
import './navbar.css'
import { PiMessengerLogoLight } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import Home from './../home/Home';


const Navbar = () => {
    return (
        <div className="navbar">

          <div className="logo-container">
            <a href='/'>
              <img src='/image/pedal-n.png' alt=''/>
            </a>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Home
                <LiaHomeSolid style={{marginLeft:'12px',fontSize:'32px'}}/>
              </a>
            </li>

            <li className="navbar-item">
              <a href="/node/login" className="navbar-link">
                Write
                <FaPencilAlt style={{marginLeft:'15px',fontSize:'28px'}}/>
              </a>
            </li>

          <li className="navbar-item">
            <a href="/chat" className="navbar-link">
              Chat<PiMessengerLogoLight style={{marginLeft:'15px',fontSize:'38px'}} />
            </a>
          </li>
        </ul>

        <div className="nav-footer">
            
            <li>
              <a href='/'>
                PEDAL [HOME]<img src='/image/pedal_home.png' alt=''/>
              </a>
            </li>
            <li>
              
<ul className="example-2">
  <li className="icon-content">
    <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
      <div className="filled" />
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" xmlSpace="preserve">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor" />
      </svg>
    </a>
    <div className="tooltip">GitHub</div>
  </li>
  <li className="icon-content">
    <a href='/'>
      <div className="filled" />
      <img src='/image/pedal_home.png' alt=''/>
    </a>
    <div className="tooltip">GitHub</div>
  </li>
</ul>




            </li>


          </div>


      </div>

    );
};

export default Navbar;