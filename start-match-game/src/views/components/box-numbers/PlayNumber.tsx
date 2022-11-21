import React from 'react';
import '../utils/Box.css';
import PropTypes from 'prop-types';
import Star from '../box-star/Star';

function PlayNumber(props:any) {
    return (
        <div className="box-item">
            <p>{props.number}</p>
        </div>
    );
}

Star.prototype = {
    playNumber: PropTypes.number
}

export default PlayNumber;
