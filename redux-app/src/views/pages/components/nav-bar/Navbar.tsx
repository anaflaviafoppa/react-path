import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
    let activeStyle = {
        fontWeight: 'bold'
    };


    return (
        <nav className="d-flex justify-content-center py-3">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link px-2 link-dark"  style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link px-2 link-dark" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }  >About</NavLink>
                </li>
                {/*<li className="nav-item"><a href="#" className="nav-link">Features</a></li>*/}
            </ul>
        </nav>
    );
}

export default Navbar;
