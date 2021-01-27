import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NavBar = () => (
    <nav className="navbar-container">
        <div >
            <Link to="/" className="home-link">
               <h4 className="navbar-text">Bootcamp DevSuperior</h4> 
            </Link>
        </div>
    </nav>
);

export default NavBar;