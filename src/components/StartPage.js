import React from 'react';
import {gamePage} from "../utils/Constants";

const StartPage = props => {

    const handleStartGame = event => {
        const name = event.currentTarget.name.value;
        props.changePage(gamePage, name);
    }

    return (
        <div>
            <h1 className='title'>Ready for WAR</h1>
            <form onSubmit={handleStartGame}>
                <input className='nameInput form-control' type='text' name='name' placeholder='Enter your name'/>
                <button className='col-4 btn bg-primary'>START</button>
            </form>


        </div>
    );
};

export default StartPage;