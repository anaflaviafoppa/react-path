import React from 'react';
import {CounterProps} from '../../../models/CounterProps';

function Counter(props: any) {
    const incrementCounter = ({increment, incrementFunction}: CounterProps) => {
        incrementFunction(increment);
    }
    return (
        <button onClick={() => incrementCounter(props)}>+{props.increment}</button>
    );
}

export default Counter;
