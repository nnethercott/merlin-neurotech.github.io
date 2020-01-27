import React from 'react';
import MainHeader from '../components/MainHeader';
import HomeHeader from '../components/HomeHeader';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import { Canvas, useFrame } from 'react-three-fiber'
import F1 from '../assets/glyphs.png';
import F2 from '../assets/f2.png';
import Stock1 from '../assets/stock1.jpg';
import Monetization from '../assets/monetization.svg';
import Running from '../assets/running.svg';
import SmartWatch from '../assets/smart-watch.jpg';
function Home() {
    return (
        <div style={{overflow: 'scroll'}}>
            <HomeHeader />
            <section className="intro-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="narrow-text">
                    <h3>Our mission</h3>
                    <h2>Increase neurotechnology awareness and adoption</h2>
                      <p>We, at Merlin Neurotechnology, see the opportunity to leverage
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
                  </div>
                </div>
              </div>
            </section>
            <section className="features off-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 my-auto text-center">
                  <img className="section-img" src={Stock1} />
                </div>
                <div className="col-lg-6">
                  <h2>We are a student organization which develops, teaches, and innovates using Neurotechnology</h2>
                  <p>Imagine living in a world where any of these are used in your everyday life.</p>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="feature-container">
                          <img className="feature-icon" src={F1} />
                            <h3>Brain Implants</h3>
                            <p>Brain implants to directly link human minds to
                            computers. These are devices that allow people to control
                            software and devices using only their brain activity in real-time.</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="feature-container">
                            <img className="feature-icon" src={F2} />
                            <h3>Vehicle neuroconfigurators</h3>
                            <p>Prevent accidents and improve the effeciency of transportation by anticipating drivers’ actions in real time.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="features">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2>Other applications of emerging neuroscience we are excited about</h2>
                  <p>The data that can be gathered from a human brain will allow for innovation in every industry. Just by interacting with things companies can gather instant feedback on the response your brain generates.</p>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="feature-container">
                          <img className="feature-icon" src={Running} />
                            <h3>Sports</h3>
                            <p>A device that sends weak electrical pulses into the
                            user’s brain with the intent of enhancing the efficiency
                            of physical training</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="feature-container">
                            <img className="feature-icon" src={Monetization} />
                            <h3>Neuromarketing</h3>
                            <p>AI-driven neuromarketing, which aims to provide insights
                            into the subconscious motivations of consumers.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 my-auto text-center">
                    <img className="section-img" src={SmartWatch} />
                  </div>
                </div>
              </div>
            </section>

          <Footer />

            </div>
    )
}
export default Home;
