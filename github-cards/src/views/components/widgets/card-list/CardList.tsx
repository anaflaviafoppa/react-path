import React from 'react';
import Card from '../../card/Card';
import {CardProps} from '../../../../models/props/CardProps';

export default function CardList(props: { list: CardProps[]; }) {
    const cardList = props.list.map((card: CardProps, index: number) =>
        <Card key={index}  {...card} />
    );

    return (
        <div>
            {cardList}
        </div>
    );
}

CardList.prototype = {
    list: Array<CardProps>
};
