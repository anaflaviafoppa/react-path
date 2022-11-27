import React, { useState} from 'react';
import Star from '../components/box-star/Star';
import './Home.css';
import Timer from '../components/timer/Timer';
import {random, randomSumIm, range, sum} from '../../utils/functions';
import PlayNumber from '../components/box-numbers/PlayNumber';
import {StatusOfNumber} from '../../utils/constants';
import * as util from 'util';

function Home() {
    const [numberOfStars, setNumberOfStars] = useState<number>(random(9, 1));
    const [availableNums, setAvailableNums] = useState<number[]>(range(9,1));
    const [candidateNums, setCandidateNums] = useState<number[]>([]);
    const isCandidatesAreWrong = sum(candidateNums) > numberOfStars;

    const numberStatus = (playNumber: number): string => {
        if (!availableNums.includes(playNumber)) {
            return StatusOfNumber.USED;
        }

        if (candidateNums.includes(playNumber)) {
            return isCandidatesAreWrong ? StatusOfNumber.WRONG : StatusOfNumber.CANDIDATE;
        }

        return StatusOfNumber.AVAILABLE;
    }

    const numberOnClick = (playNumber: number, status: string) => {
        if(status === StatusOfNumber.USED) {
            return;
        }

        verifySumOfStars(playNumber, status);
    }

    const verifySumOfStars = (playNumber: number, status: string) => {
        const newCandidatesNums = status === StatusOfNumber.AVAILABLE ?
            candidateNums.concat(playNumber) : candidateNums.filter(cn => cn !== playNumber);

        if (sum(newCandidatesNums) !== numberOfStars) {
            setCandidateNums(newCandidatesNums);
        } else {
            const newAvailableNums: Array<number> = availableNums.filter((n) => !newCandidatesNums.includes(n));
            setNumberOfStars(randomSumIm(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    const buildBoxNumber = ()  => {
           return range(9,1).map((playNumber: number) => {
                return <PlayNumber playNumber={playNumber}
                                   key={playNumber}
                                   onClick={numberOnClick}
                                   status={numberStatus(playNumber)}/>
           })
    };

    return (
        <div>
            <h1>Pick 1 or more numbers that sum to the number of stars:</h1>
            <div className="home">
                <div className="home-item">
                    <Star numberOfStars={numberOfStars}></Star>
                </div>
                <div className="home-item">
                    {buildBoxNumber()}
                </div>
            </div>
            <Timer maxNumber={10}></Timer>
        </div>
    );

}


export default Home;
