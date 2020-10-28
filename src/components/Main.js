import React from 'react';
import StartPage from "./StartPage";
import {gameOverPage, gamePage} from "../utils/Constants";
import GamePage from "./GamePage";
import GameOverPage from "./GameOverPage";

const Main = props => {
    switch (props.page) {
        case gamePage:
            return <GamePage changePage={props.changePage} name={props.name} cards={props.cards}/>;
        case gameOverPage:
            return <GameOverPage changePage={props.changePage} wins={props.wins} loses={props.loses}/>;
        default:
            return <StartPage changePage={props.changePage}/>;
    }
};

export default Main;