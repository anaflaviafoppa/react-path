import React, {Component} from 'react';
import './App.css';
import CardList from './views/components/widgets/card-list/CardList';
import {CardProps} from './models/props/CardProps';

export default class MyComponent extends Component {
    render() {
        const list: CardProps[] = [
            {
                name: 'name',
                company: 'company',
                image: 'image'
            },
            {
                name: 'name2',
                company: 'company2',
                image: 'image'
            }
        ];
        return (
            <div className="App">
                <h1>The GitHub Cards App</h1>
                <CardList list={list}/>
            </div>
        );
    }
}

