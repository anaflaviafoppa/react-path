import React from 'react';
import {maxNumber} from '../../../models/props';
import PropTypes from 'prop-types';

function Timer({maxNumber}: maxNumber) {
    let time = maxNumber;

    const counter = () => {
        while (time < 0) {
            time -= 1;
        }
    }

    function componentWillUnmount() {
        counter();
    }


    return (
        <>
            Time Remaining: {time}s
        </>
    );
}

Timer.prototype = {
    maxNumber: PropTypes.number
};

export default Timer;
