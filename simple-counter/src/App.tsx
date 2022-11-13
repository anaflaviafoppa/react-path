import React from 'react';
import './App.css';
import SimpleCounter from './views/components/simple-counter/SimpleCounter';
import DoubleCounter from './views/components/double-counter/DoubleCounter';
import GlobalCounter from './views/widgets/global-counter/GlobalCounter';

function App() {
    return (
        <div className="App">
            <h1>1- Simple Counter:</h1>
            <SimpleCounter></SimpleCounter>
            <h1>2- Double The Value:</h1>
            <DoubleCounter></DoubleCounter>
            <h1>3- Global Increment</h1>
            <GlobalCounter></GlobalCounter>
        </div>
    );
}

export default App;
