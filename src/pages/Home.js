import React from 'react';
import MainHeader from '../components/MainHeader';
import HomeHeader from '../components/HomeHeader';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import { Canvas, useFrame } from 'react-three-fiber';
import Logo from '../assets/Logo.svg';
import F1 from '../assets/glyphs.png';
import F2 from '../assets/f2.png';
import Stock1 from '../assets/stock1.jpg';
import Monetization from '../assets/monetization.svg';
import Running from '../assets/running.svg';
import SmartWatch from '../assets/smart-watch.jpg';
import Cns from '../assets/logos/cns.png';
import Interaxon from '../assets/logos/interaxon.png';
import Ntx from '../assets/logos/ntx.png';
import Openbci from '../assets/logos/openbci.png';
import Education from '../assets/education.png';
import Projects from '../assets/projects.png';
import School from '../assets/school.svg';
import Group from '../assets/group.svg';


function Home() {
    return (
        <div style={{overflow: 'scroll'}}>
            <HomeHeader />
            <section className="partner-logos">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3">
                    <a href="http://neuroscience.queensu.ca/">
                      <img className="partner-logo" src={Cns} />
                    </a>
                  </div>
                  <div className="col-sm-3">
                    <a href="https://choosemuse.com/">
                      <img className="partner-logo" src={Interaxon} />
                    </a>
                  </div>
                  <div className="col-sm-3">
                    <a href="https://neurotechx.com/">
                      <img className="partner-logo" src={Ntx} />
                    </a>
                  </div>
                  <div className="col-sm-3">
                    <a href="https://openbci.com/">
                      <img className="partner-logo" src={Openbci} />
                    </a>
                  </div>
                </div>
              </div>
            </section>
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
            </section>
            <section className="features">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2>Other applications of emerging neuroscience we are excited about</h2>
                  <p>The data that can be gathered from a human brain will allow for innovation in every industry. Just by interacting with things companies can gather instant feedback on the response your brain generates.</p>
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
                  <div className="col-lg-6 my-auto text-center">
                    <img className="section-img" src={SmartWatch} />
                  </div>
                </div>
              </div>
            </section>
            <section className='directives off-white'>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 text-center ">
                  <div className="directive-container mx-auto">
                    <img src={Education} />
                    <h3>Education</h3>
                    <p>We are currently teaching a course on the
                    fundamental concepts of Neurotechnology so that all members
                    on our development team are one the same page an receive the
                    same training.</p>
                    </div>
                  </div>
                  <div className="col-sm-6 text-center ">
                  <div className="directive-container mx-auto">
                    <img src={Projects} />
                    <h3>Projects</h3>
                    <p>Through personal experience, we know we learn best
                    by doing. The team has two large projects planned for this
                    year; the first is a device that will aim to provide neurofeedback
                    regarding a user’s fatigue, attentiveness, caffeination, and
                    dehydration levels. Each required Artificial Intelligence (AI)
                    classifier will be separately developed for each metric, with
                    the resulting productivity scale summarizing the combined results
                    from each input.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="platform">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Open source platform</h2>
                  <p>Currently, there is no open-source code that programmers can use
                  to stream and apply filters to live brain signal data. Our two
                  API’s, BLE2LSL (Bluetooth Low Energy to Lab Streaming Layer) and
                  Wizard Hat, do just that. We are enhancing our APIs to increase
                  functionality and accessibility. This will serve as a long-term
                  modular solution so that anyone, anywhere can build projects using
                  our platform. Furthermore, this is a unique learning opportunity
                  for the development team to create a fully modular system, across
                  multiple platforms, through various design iterations and development
                  cycles. This is our most extensive and largest planned project to date.</p>
                    <div className="row">
                      <div className="col-sm-1">
                        <img src={Group} />
                      </div>
                      <div className="col-sm-5">
                        <h3>Collaboration</h3>
                        <p>We are enabling third parties access to our open-source platform
                        to create their version of “the best idea.”</p>
                      </div>
                      <div className="col-sm-1">
                        <img src={School} />
                      </div>
                      <div className="col-sm-5">
                        <h3>University supported</h3>
                        <p>We are powered by broad intellectual diversity and have the support of our school.</p>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6 text-center my-auto">
                  <img className="platform-img" src={Logo} />

                </div>
              </div>
            </div>
            </section>
            <section className="summary off-white">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="narrow-text">
                      <p>In summary, Merlin in laying the foundation at Queen’s to connect
                      computers with the brain. As Eric Kandel, Nobel Prize recipient in
                      2000 said, “The biology of the brain will be to the 21st century what
                      the biology of the genome was to the 20th century”. This industry is
                      taking off now. We know we can not do this by ourselves, and we would
                      appreciate any expertise and mentorship in this manner.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          <Footer />

            </div>
    )
}
export default Home;
