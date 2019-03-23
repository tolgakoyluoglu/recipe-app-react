import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal darken3">
            <div className="container">
                <a href="/" className="brand-logo left">Tastay</a>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/myrecipes">My Recipes</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;