import React, {useEffect, useState} from 'react';
import Star from '../components/box-star/Star';
import './Home.css';
import Timer from '../components/timer/Timer';
import {random, randomSumIm, range, sum} from '../../utils/functions';
import PlayNumber from '../components/box-numbers/PlayNumber';
import {StatusOfNumber} from '../../utils/constants';
import PlayAgain from '../components/play-again/PlayAgain';

function Home(props:any) {
    const [numberOfStars, setNumberOfStars] = useState<number>(random(9, 1));
    const [availableNums, setAvailableNums] = useState<number[]>(range(9,1));
    const [candidateNums, setCandidateNums] = useState<number[]>([]);
    const [secondsLeft, setSecondsLeft] = useState<number>(10);
    const isCandidatesAreWrong = sum(candidateNums) > numberOfStars;
    const isTheGameWasDone = secondsLeft <= 0 || availableNums.length === 0;

    useEffect(() => {
        if(isTheGameWasDone) {
            return;
        }

       const timerId = decreaseTimer();
        return () => clearTimeout(timerId);
    })

    const decreaseTimer = () => {
        return setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);
    }


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
        if(status === StatusOfNumber.USED || isTheGameWasDone) {
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

    const starSession = () => {
        const isWinnerGame = availableNums.length === 0 && secondsLeft > 0;
        if(availableNums.length === 0 || secondsLeft <= 0) {
            return <PlayAgain onClick={() => props.reStartTheGame()} isWinnerGame={isWinnerGame}></PlayAgain>
        }


        return <Star numberOfStars={numberOfStars}></Star>
    }

    return (
        <div>
            <h1>Pick 1 or more numbers that sum to the number of stars:</h1>
            <div className="home">
                <div className="home-item">
                    {starSession()}
                </div>
                <div className="home-item">
                    {buildBoxNumber()}
                </div>
            </div>
            <Timer maxNumber={secondsLeft}></Timer>
        </div>
    );

}


export default Home;
