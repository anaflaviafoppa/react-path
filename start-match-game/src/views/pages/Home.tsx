import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BoxStar from '../components/box-star/BoxStar';
import BoxNumber from '../components/box-numbers/BoxNumber';
import './Home.css';
import Timer from '../components/timer/Timer';

class Home extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Pick 1 or more numbers that sum to the number of stars:</h1>
                <div  className="home">
                    <div className="home-item">
                        <BoxStar></BoxStar>
                    </div>
                    <div className="home-item">
                        <BoxNumber maxNumber={10}></BoxNumber>
                    </div>
                </div>
                <Timer maxNumber={10}></Timer>
            </div>
        );
    }
}

// Home.propTypes = {};

export default Home;
