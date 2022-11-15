import {Component} from 'react';
import './Card.css';
import React from 'react';

export default class Card extends Component<any, any> {
    render() {
        const {name, company, image} = this.props;
        return (
            <>
                <div className="github-profile">
                    <div className="image-profile"></div>
                    <div className="info">
                        <div className="name">
                            {name}
                        </div>
                        <div className="company">
                            {company}
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

/*export default function Card({name, company, image}: CardProps) {
    return (
        <>
            <div className="github-profile">
                <div className="image-profile"></div>
                <div className="info">
                    <div className="name">
                        {name}
                    </div>
                    <div className="company">
                        {company}
                    </div>

                </div>
            </div>
        </>
    );
}*/
