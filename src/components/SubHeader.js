import React from 'react';
import Nav from './Nav';
import lukas from '../assets/lukas.jpg'

function SubHeader(props) {
    return (
        <header className="sub-header">
            <h1>{props.title}</h1>
        </header>
    );
}
export default SubHeader;