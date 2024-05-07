import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navibar/Navbar';



import RemoveAfterTest from './removeAfterTest/RemoveAfterTest';
import Home from './home/Home';
import Login from './login/Login';
import Join from './login/Join';
import Chat from './chat/Chat';



const MainApp = () => {
    return (
        <div>
           <Router>
                <Navbar/>
                <Routes>
                    <Route path="/test" Component={RemoveAfterTest}/>
                    <Route path="/" Component={Home}/>
                    <Route path="/node/login" Component={Login}/>
                    <Route path="/node/join" Component={Join}/>
                    <Route path="/chat" Component={Chat}/>
                </Routes>
           </Router>
        </div>
    );
};

export default MainApp;