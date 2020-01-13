import React from 'react';
import Nav from './Nav';

function Header(props) {

    return (
        <header className="normal-header">
            <Nav />
            <br />
            <br />
            <h1>{props.title}</h1>
        </header>
    );
}
export default Header;