import React, {Component} from 'react';
import './App.css';
import CardList from './views/components/widgets/card-list/CardList';

export default class MyComponent extends Component {
    render() {
        return (
            <div className="App">
                <h1>The GitHub Cards App</h1>
                <CardList/>
            </div>
        );
    }
}

