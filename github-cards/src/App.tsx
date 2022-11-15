import React, {Component} from 'react';
import './App.css';
import Home from './views/pages/home/Home';

export default class MyComponent extends Component {
    render() {
        return (
            <div className="App">
               <Home></Home>
            </div>
        );
    }
}

