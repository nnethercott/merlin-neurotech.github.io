import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

function Contact() {
    return (
        <div>
            <Header title="Get Involved" />
            <div className="container">
                <SubHeader title="Contact Us!" />
                <div className="row">
                <div className="col-sm-3"></div>

                    <div className="col-sm-6">
                        <p> <br /> 
                            Interested in getting involved, learning more, or sponsoring us? 
                            <br />
                            Reach out here and we will do our best to get back to you in a timely manner!
                        </p>

                    </div>

                    <div className="col-sm-3"></div>

                </div>
            </div>
        </div> 
    )
}
export default Contact;