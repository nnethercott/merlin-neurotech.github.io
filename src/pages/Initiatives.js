import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import lukas from '../assets/lukas.jpg';
//import img_fluid from "../styles/bootstrap/_images.scss";

function Initiatives() {
    return (
        <div>
            <Header title="Our Current Initiatives" />
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <SubHeader title="Upcoming Events" />
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

                            The reality is, all of this technology exists and a startup 
                            somewhere is pursuing every one of the innovations mentioned. 
                            This is why we are here. </p>
                    </div>
                    <div className="col-sm"> 
                        <SubHeader title="Offered Course" />
                        <p>
                            This past term we ran an educational program to teach the basics 
                            of neurotechnology. This course provided an overview of 
                        </p>
                        <SubHeader title="Educational Workshops" />
                        <p>
                            Our past workshops have included...
                            Our upcoming workshops include...
                        </p>
                        <img src={lukas} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Initiatives;