import React from 'react';
import Nav from './Nav';

function Footer(props) {

    return (
        <footer className="normal-footer">
            <div class="row">
            <nav class="navbar navbar-default footer">
                <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"></button>
                    <a class="navbar-brand" href="#">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                    <li class="foot-stylee">
                        <a href="#">Apps</a>
                    </li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right nav-r">
                    </ul>
                </div>
                </div>
            </nav>
            </div>
            
            <h1>{props.title}</h1>
        
        </footer> 
    );
}
export default Footer;