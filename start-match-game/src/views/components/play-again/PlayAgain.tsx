import React from 'react';
import PropTypes from 'prop-types';

function PlayAgain(props: any) {
    return (
        <div>
            <button onClick={() => props.onClick()}>Play Again</button>
        </div>
    );
}

PlayAgain.prototype = {
    onClick: PropTypes.func
}

export default PlayAgain;
