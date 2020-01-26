import React, {Suspense, ErrorBoundary} from 'react';
import Nav from './Nav';
import Footer from './Footer'
import BrainImg from '../assets/brain-min.PNG';



function HomeHeader(props) {
    return (
        <header className="home-header">
            <Nav />
            <img className="brain-img" src={BrainImg} />
            <div className="intro-heading">
              <h1>Queen's University<br /> Neurotechnology</h1>
              <p>We are a student organization run out of Queen's University
                  which develop, teach, and innovate using Neurotechnology! </p>
            </div>
        </header>
    );
}
export default HomeHeader;
