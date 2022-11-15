import React from 'react';
import Card from '../../card/Card';
import {CardProps} from '../../../../models/props/CardProps';

export default function CardList() {
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

    const cardList = list.map((card, index) =>
        <Card key={index.toString()}  {...card} />
    );

    return (
        <div>
            {cardList}
        </div>
    );
}
