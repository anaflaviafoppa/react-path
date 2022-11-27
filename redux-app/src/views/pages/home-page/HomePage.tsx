import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Pluralsight Administration</h1>
            <p>React, Redux and React Router.</p>
            <Link to="about" className="btn btn-primary btn-lg">
                Learn More
            </Link>
        </div>
    );
}

export default HomePage;
