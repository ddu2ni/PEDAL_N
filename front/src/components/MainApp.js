import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navibar/Navbar';


import Chat from './chat/Chat';



const MainApp = () => {
    return (
        <div>
           <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" Component={Chat}/>
                </Routes>
           </Router>
        </div>
    );
};

export default MainApp;