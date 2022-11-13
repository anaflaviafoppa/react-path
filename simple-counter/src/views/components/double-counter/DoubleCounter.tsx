import React, {useState} from 'react';

function DoubleCounter() {
    const [counter, setCounter] = useState(5)

    function decreaseCounter() {
        setCounter(counter / 2);
    }

    function increaseCounter() {
        setCounter(counter * 2);
    }

    return (
        <>
            <button onClick={() => decreaseCounter()}>-</button>
            <p>{counter}</p>
            <button onClick={() => increaseCounter()}>+</button>
        </>
    );
}

export default DoubleCounter;
