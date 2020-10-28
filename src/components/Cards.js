import React from 'react';
import {ranks, suits} from "../utils/Constants";

const Cards = (props) => {

    const printCard = (count) => {
        const rank = ranks[props.cards[count].rank];
        const suit = suits[props.cards[count].suit];
        return rank + ' ' + suit;
    }

    const getClassName = (count) => {
        if (props.cards[count].suit % 2 === 0) {
            return 'card black'
        } else {
            return 'card red'
        }
    }

    return (
        <div>
            <div className={getClassName(props.count * 2)}>
                {printCard(props.count * 2)}
            </div>
            <div className={getClassName((props.count * 2) + 1)}>
                {printCard((props.count * 2) + 1)}
            </div>
        </div>
    );
};

export default Cards;