import React from 'react';
import '../utils/Box.css';

function BoxNumber(props:any) {

    const buildBoxNumber = () => {
        let content = [];
        for(let number = 1; number < 10; number++) {
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

export default BoxNumber;
