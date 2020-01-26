import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../assets/textandlogo.svg';
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand" href="#"><img className="logo" src={Logo} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/team">Team</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/initiatives">Initiatives</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                </ul>
            </div>
        </nav>

    )
}
export default Nav;
