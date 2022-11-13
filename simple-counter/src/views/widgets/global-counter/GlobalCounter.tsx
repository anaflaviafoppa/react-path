import React, {useState} from 'react';
import Counter from '../../components/counter/Counter';

function GlobalCounter() {
    const [counter, setCounter] = useState(0);
    function incrementCounter(value: number) {
        setCounter(counter + value);
    }

    return (
        <>
        <div style={{display:'flex', justifyContent: 'center'}}>
            <Counter incrementFunction={incrementCounter}  increment={1}></Counter>
            <Counter incrementFunction={incrementCounter} increment={5}></Counter>
            <Counter incrementFunction={incrementCounter} increment={10}></Counter>
            <Counter incrementFunction={incrementCounter} increment={20}></Counter>
        </div>
            <p>{counter}</p>
        </>
    );
}

export default GlobalCounter;
