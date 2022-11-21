import React, {useState} from 'react';
import '../utils/Box.css';
import PropTypes from 'prop-types';
import {range} from '../../../utils/functions';

function Star(props: any) {

    const buildBoxStar = () => {
        let content: any[] = [];

        range(1,props.numberOfStars).map((index: number) => {
            content.push(<div key={index} className="box-item">
                <p>*</p>
            </div>)
        })

        return content;
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
