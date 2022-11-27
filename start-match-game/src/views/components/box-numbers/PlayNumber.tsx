import React from 'react';
import '../utils/Box.css';
import PropTypes from 'prop-types';
import Star from '../box-star/Star';
import {Colors, StatusOfNumber} from '../../../utils/constants';

function PlayNumber(props:any) {
    const colors = {
        [StatusOfNumber.AVAILABLE]: Colors.LIGHTGRAY,
        [StatusOfNumber.USED]: Colors.LIGHTGREEN,
        [StatusOfNumber.WRONG]: Colors.LIGHTCORAL,
        [StatusOfNumber.CANDIDATE]: Colors.DEEPSKYBLUE,
    }

    const backgroundColor = (status: string) : string => {
       return colors[status];
    }
    return (
        <div className="box-item"
             onClick={() => props.onClick(props.playNumber, props.status)}
             style={{backgroundColor: backgroundColor(props.status)}}>
            <p>{props.playNumber}</p>
        </div>
    );
}

Star.prototype = {
    playNumber: PropTypes.number,
    status: PropTypes.string,
    onClick: PropTypes.func
}

export default PlayNumber;
