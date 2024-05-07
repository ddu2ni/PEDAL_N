import React from 'react';
import BoardItem from './BoardItem';

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
    </div>
    );
};

export default Home;