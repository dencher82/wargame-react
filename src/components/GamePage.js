import React, {Component} from 'react';
import Cards from "./Cards";
import {gameOverPage} from "../utils/Constants";

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            wins: 0,
            loses: 0
        }
    }

    winLoseCounter = (count) => {
        const index = count * 2;
        const computerCard = this.props.cards[index].value;
        const yourCard = this.props.cards[index + 1].value;
        if (yourCard > computerCard) {
            this.setState({wins: this.state.wins + 1});
        } else if (computerCard > yourCard) {
            this.setState({loses: this.state.loses + 1});
        }
    }

    handleClickNextBtn = () => {
        this.winLoseCounter(this.state.count);
        if (this.state.count < 25) {
            this.setState({count: this.state.count + 1});
        } else {
            this.props.changePage(gameOverPage, '', this.state.wins, this.state.loses);
        }
    }

    render() {
        return (
            <div>
                <h1 className='title'>COMPUTER</h1>
                <Cards count={this.state.count} cards={this.props.cards}/>
                <h1 className='title'>{this.props.name}</h1>
                <button onClick={this.handleClickNextBtn} className='btn btn-primary'>NEXT</button>
            </div>
        );
    }
}

export default GamePage;