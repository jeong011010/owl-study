import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            
                <Link to ='/' className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink to='/movies' className="nav-link" activeclassname="active">
                        Movies
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/users' className="nav-link" activeclassname="active">
                        Users
                    </NavLink>
                    </li>
                </ul>
                </div>
        </nav>
    );
};

export default Navbar;