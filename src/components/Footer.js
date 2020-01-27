import React from 'react';
import Nav from './Nav';
import Logo from '../assets/textandlogo.svg';
import {Link} from "react-router-dom";
import Facebook from '../assets/facebook.png';

function Footer(props) {

    return (
        <footer className="normal-footer off-white">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 footer-logo-container">
                  <img className="footer-logo" src={Logo} />
                </div>
                <div className="col-sm-6 my-auto">
                  <div className="footer-links">
                    <Link className="footer-link" to="/home">Home</Link>
                    <Link className="footer-link" to="/team">Team</Link>
                    <Link className="footer-link" to="/initiatives">Initiatives</Link>
                    <Link className="footer-link" to="/contact">Contact</Link>
                  </div>
                </div>
                <div className="col-sm-3 my-auto">
                  <div className="footer-social">
                    <a href="https://www.facebook.com/merlinneurotech/">
                      <img className="footer-social-icon" src={Facebook} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

        </footer>
    );
}
export default Footer;
