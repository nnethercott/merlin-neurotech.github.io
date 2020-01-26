import React from 'react';
import MainHeader from '../components/MainHeader';
import HomeHeader from '../components/HomeHeader';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import { Canvas, useFrame } from 'react-three-fiber'

function Home() {
    return (
        <div style={{overflow: 'scroll'}}>
            <MainHeader />
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>

                    <div className="col-sm-10">
                        <SubHeader title="Welcome to Merlin Neurotech" />
                        <p>We are a student organization run out of Queen's University
                            which develop, teach, and innovate using Neurotechnology! </p>
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

                            <p>
                            We, at Merlin Neurotechnology, see the opportunity to leverage
                            this niche market and establish Queen’s as a prominent new
                            centre for Neurotechnology. We see a future where Queen’s
                            graduates, armed with their classroom curriculum and the
                            skills they learn through the club, can be equipped with
                            the skills to create a real impact on society - and are
                            known for it. Merlin Neurotechnology is one of only eleven
                            Neurotechnology design teams in Canada affiliated with
                            NeurotechX. If we structure our growth correctly and
                            carefully, Queen’s will be poised to have graduates
                            knowledgeable about this industry. While we, as an
                            undergraduate design team, do not have the resources to
                            create or these technologies or come up with the latest
                            neuroscience breakthrough. We are able to find, train, and
                            foster an environment for some of the brightest and most
                            driven students on Queen’s Campus to get a step ahead and
                            learn skills that complement what they learn in the classroom
                            to directly have significant impacts on this industry upon
                            graduation.</p>
                    </div>
                    <div className="col-sm-1"></div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;
