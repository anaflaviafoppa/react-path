import React, { useState} from 'react';
import Star from '../components/box-star/Star';
import PlayNumber from '../components/box-numbers/PlayNumber';
import './Home.css';
import Timer from '../components/timer/Timer';
import {random, range} from '../../utils/functions';

function Home() {
    const [numberOfStars, setNumberOfStars] = useState(random(9, 1));
    const buildBoxNumber = ()  => {
        let content: any[] = []
       range(1,9).map((index: number) => {
            content.push(<PlayNumber playNumber={index} key={index}/>)
        })

        return content;
    };

    return (
        <div>
            <h1>Pick 1 or more numbers that sum to the number of stars:</h1>
            <div className="home">
                <div className="home-item">
                    <Star></Star>
                </div>
                <div className="home-item">
                    {buildBoxNumber()}
                </div>
            </div>
            <Timer maxNumber={10}></Timer>
        </div>
    );

}

// Home.propTypes = {};

export default Home;
