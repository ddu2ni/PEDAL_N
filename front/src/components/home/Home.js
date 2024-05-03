import React from 'react';
import BoardItem from './BoardItem';
import Friends from './Friends';

import './home.css'

const Home = () => {
    return (
    <div className="home-container"> 
        <div className="board-items-container"> 
            <BoardItem />
            <BoardItem />
            <BoardItem />
            <BoardItem />
            <BoardItem />
        </div>
        <Friends className="side-box"/>
    </div>
    );
};

export default Home;