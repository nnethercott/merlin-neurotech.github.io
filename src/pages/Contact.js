import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

function Contact() {
    return (
        <div>
            <Header title="Get Involved" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <SubHeader title="Contact Us" />
                        <p>Imagine living in a world where any of these are used in 
                            your everyday life. <br />
                            a) A device that sends weak electrical pulses into the 
                            user’s brain with the intent of enhancing the efficiency 
                            of physical training, <br />
                            b) Brain implants to directly link human minds to 
                            computers. These are devices that allow people to control 
                            software and devices using only their brain activity in real-time. <br />
                            c) Vehicle neuroconfigurators to anticipate drivers’ actions. <br />
                            d) AI-driven neuromarketing, which aims to provide insights 
                            into the subconscious motivations of consumers.  <br />
                        </p>

                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Contact;