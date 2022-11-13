import {Component} from 'react';
import './Card.css';
import {CardProps} from '../../../models/props/CardProps';
import React from 'react';

export default function Card({name, company, image}: CardProps) {
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
}
