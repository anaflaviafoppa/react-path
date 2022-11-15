import React, {Component} from 'react';
import {CardProps} from '../../../models/props/CardProps';
import Form from '../../components/form/Form';
import CardList from '../../components/widgets/card-list/CardList';


interface HomeState {
    list: CardProps[];
}

class Home extends Component<any, HomeState> {
    constructor(props: any) {
        super(props);
        const listDefault: CardProps[] = [
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
        this.state = {list: listDefault};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(value:CardProps) {
        this.setState({list: [...this.state.list,value]});
    }
    render() {
        return (
            <div>
                <h1>The GitHub Cards App</h1>
                <Form handleSubmit={this.handleSubmit}></Form>
                <CardList list={this.state.list}/>
            </div>
        );
    }
}


export default Home;
