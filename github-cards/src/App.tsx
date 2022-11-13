import React, {Component} from 'react';
import Card from './views/components/card/Card';
import './App.css';

export default class MyComponent extends Component {
    render() {
        return (
            <div className="App">
                <h1>The GitHub Cards App</h1>
                <Card name={'name'} company={'company'} image={'image'}></Card>
            </div>
        );
    }
}

