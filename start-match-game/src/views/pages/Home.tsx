import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BoxStar from '../components/box-star/BoxStar';
import BoxNumber from '../components/box-numbers/BoxNumber';

class Home extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <BoxStar></BoxStar>
                <BoxNumber></BoxNumber>
            </div>
        );
    }
}

// Home.propTypes = {};

export default Home;
