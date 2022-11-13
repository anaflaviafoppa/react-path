import {MouseEventHandler, useState} from 'react';

function SimpleCounter() {
    const [counter, setCounter] = useState(0)

    function decreaseCounter() {
        setCounter(counter - 1);
    }

    function increaseCounter() {
        setCounter(counter + 1);
    }

    return (
        <>
            <button onClick={() => decreaseCounter()}>-</button>
            <p>{counter}</p>
            <button onClick={() => increaseCounter()}>+</button>
        </>
    )
}

export default SimpleCounter;
