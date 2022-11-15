import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BoxStar from '../components/box-star/BoxStar';
import BoxNumber from '../components/box-numbers/BoxNumber';
import './Home.css';

class Home extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div className="home-item">
                    <BoxStar></BoxStar>
                </div>
                <div className="home-item">
                    <BoxNumber></BoxNumber>
                </div>

            </div>
        );
    }
}

// Home.propTypes = {};

export default Home;
