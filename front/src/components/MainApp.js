import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navibar/Navbar';



import NavTest from './removeAfterTest/NavTest';
import RemoveAfterTest from './removeAfterTest/RemoveAfterTest';
import Home from './home/Home';



const MainApp = () => {
    return (
        <div>
           <Router>
                {/* <Navbar/> */}
                <NavTest/>
                <Routes>
                    <Route path="/test" Component={RemoveAfterTest}/>
                    <Route path="/" Component={Home}/>


                </Routes>
           </Router>
        </div>
    );
};

export default MainApp;