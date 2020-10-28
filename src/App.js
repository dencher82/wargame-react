import React, {Component} from 'react';
import './App.css'
import {startPage} from "./utils/Constants";
import Main from "./components/Main";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: startPage,
            name: 'YOU',
            cardDeck: this.getCards(),
            wins: 0,
            loses: 0
        }
    }

    fillDeck = (cards) => {
        for (let i = 0; i < cards.length; i++) {
            cards[i] = i;
        }
        return cards;
    }

    shuffleDeck = (cards) => {
        for (let i = 0; i < cards.length; i++) {
            const rnd = Math.random() * i | 0;
            const temp = cards[i];
            cards[i] = cards[rnd];
            cards[rnd] = temp;
        }
        return cards;
    }

    getCards = () => {
        let cards = new Array(52);
        let res = new Array(52);
        cards = this.fillDeck(cards);
        cards = this.shuffleDeck(cards);
        for (let i = 0; i < cards.length; i++) {
            const rank = cards[i] % 13;
            const value = rank + 1;
            const suit = cards[i] / 13 | 0;
            res[i] = {rank, value, suit};
        }
        return res;
    }

    changeActivePage = (page, name, wins, loses) => {
        if (name) {
            this.setState({
                activePage: page,
                name: name,
                wins: wins,
                loses: loses,
            });
        } else {
            this.setState({
                activePage: page,
                wins: wins,
                loses: loses
            });
        }
        if (page === startPage) {
            this.setState({cardDeck: this.getCards()});
        }
    }

    render() {
        return (
            <div className='container'>
                <Main
                    page={this.state.activePage}
                    changePage={this.changeActivePage}
                    name={this.state.name}
                    wins={this.state.wins}
                    loses={this.state.loses}
                    cards={this.state.cardDeck}
                />
            </div>
        );
    }
}

export default App;