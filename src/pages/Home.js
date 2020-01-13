import React from 'react';
import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';

function Home() {
    return (
        <div style={{overflow: 'scroll'}}> 
            <MainHeader />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <SubHeader title="Welcome to Merlin Neurotech" />
                        <p>We are a student organization run out of Queen's University 
                            which develop, teach, and innovate using Neurotechnology! </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div> 
    )
}
export default Home;