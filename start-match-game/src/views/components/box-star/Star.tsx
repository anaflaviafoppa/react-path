import React, {useState} from 'react';
import '../utils/Box.css';
import PropTypes from 'prop-types';
import {range} from '../../../utils/functions';

function Star(props: any) {

    const buildBoxStar = () => {
        return range(props.numberOfStars,1).map((index: number) => {
            return <div key={index} className="box-item">
                <p>*</p>
            </div>;
        })
    }

    return (
        <div className="box">
            {buildBoxStar()}
        </div>
    );
}

Star.prototype = {
    numberOfStars: PropTypes.number
}

export default Star;
