import React from 'react';
import '../utils/Box.css';
import PropTypes from 'prop-types';
import BoxStar from '../box-star/BoxStar';

function BoxNumber(props:any) {

    const buildBoxNumber = () => {
        let content = [];
        for(let number = 1; number < props.maxNumber; number++) {
            content.push(<div key={number} className="box-item">
                <p>{number}</p>
            </div>)
        }

        return content;
    }

    return (
        <div className="box">
            {buildBoxNumber()}
        </div>
    );
}

BoxStar.prototype = {
    maxNumber: PropTypes.number
}

export default BoxNumber;
