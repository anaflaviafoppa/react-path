import React from 'react';
import '../utils/Box.css';

function BoxStar(props: any) {
    const buildBoxStar = () => {
        let content = [];
        for(let number = 1; number < 10; number++) {
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

export default BoxStar;
