import React from 'react';
import Nav from './Nav';
// import lukas from '../assets/lukas.jpg'
function MainHeader(props) {
    //var lukas = (
    //    <img
    //        src={lukas} alt "lukas"
    //    />
    //);
    return (
        <header className="main-header">
            <Nav />
            <br />
            <br />
            <h1>{props.title}</h1>
        </header>
    );
}
export default MainHeader;