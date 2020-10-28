import React from 'react';
import {startPage} from "../utils/Constants";

const GameOverPage = props => {
    return (
        <div>
            <h1 className='title'>WINS/LOSES</h1>
            <h1 className='title'>{props.wins}-{props.loses}</h1>
            <button onClick={() => props.changePage(startPage, '')} className='btn btn-primary'>AGAIN?</button>
        </div>
    );
};

export default GameOverPage;