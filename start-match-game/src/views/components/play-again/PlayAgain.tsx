import React from 'react';
import PropTypes from 'prop-types';

function PlayAgain(props: any) {
    return (
        <div>
            <h3 style={{color: props.isWinnerGame ? 'green' : 'red'}}>{props.isWinnerGame ? 'You win the game!' : 'Game Over!'}</h3>
            <button onClick={() => props.onClick()}>Play Again</button>
        </div>
    );
}

PlayAgain.prototype = {
    onClick: PropTypes.func,
    isWinnerGame: PropTypes.bool
}

export default PlayAgain;
