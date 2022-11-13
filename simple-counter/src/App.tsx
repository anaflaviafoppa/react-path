import React from 'react';
import './App.css';
import SimpleCounter from './views/components/simple-counter/SimpleCounter';
import DoubleCounter from './views/components/double-counter/DoubleCounter';

function App() {
    return (
        <div className="App">
            <h1>1- Simple Counter:</h1>
            <SimpleCounter></SimpleCounter>
            <h1>2- Double The Value:</h1>
            <DoubleCounter></DoubleCounter>
        </div>
    );
}

export default App;
