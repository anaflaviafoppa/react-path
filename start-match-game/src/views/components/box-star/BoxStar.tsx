import React, {useState} from 'react';
import '../utils/Box.css';
import PropTypes from 'prop-types';
import {random} from '../../../utils/functions';

function BoxStar(props: any) {
    const [numberOfStars, setNumberOfStars] = useState(random(9,1));

    const buildBoxStar = () => {
        let content = [];
        for(let number = 1; number <= numberOfStars; number++) {
            content.push(<div key={number} className="box-item">
                <p>*</p>
            </div>)
        }

        return content;
    }

    return (
        <div className="box">
            {buildBoxStar()}
        </div>
    );
}

BoxStar.prototype = {
    maxNumber: PropTypes.number
}

export default BoxStar;
