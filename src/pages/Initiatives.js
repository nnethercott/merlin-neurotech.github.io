import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import edu from '../assets/edu.jpg';
//import img_fluid from "../styles/bootstrap/_images.scss";
import F1 from '../assets/glyphs.png';
import F2 from '../assets/f2.png';
import Stock1 from '../assets/stock1.jpg';
import yannick from '../assets/yannick.jpg';
import booth2 from '../assets/booth2.jpg';
import hack from '../assets/hackprinceton.jpeg';


function Initiatives() {
    return (
        <div>
            <Header title="Our Current Initiatives" alternateLink={true} />
            <section className="features">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 my-auto text-center">
                    <h2> Offered Course</h2>
                    <p>This past term we ran an educational program developed originally by 
                      University of Toronto's NeurotechX student club and updated internally 
                      to teach the basics of neurotechnology. The conducted course included
                      a weekly tutorial session of in-person workshops. 
                      This course was presented over the course of a term to interested 
                      students. This course will become a regular part of Merlin Neurotech's 
                      contribution to Queen's life to continue teaching more 
                      students about neurotechnology and to ensure organizational longevity.
                      
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 my-auto text-center">
                    <img className="section-img" src={edu} />
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="feature-container">
                          <img className="feature-icon" src={F1} />
                            <h3>Graduates</h3>
                            <p>The graduates joined the Merlin project development team to 
                              help with the NeurotechX project submission. 
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="feature-container">
                            <img className="feature-icon" src={F2} />
                            <h3>Future Courses</h3>
                            <p>
                            After the success of this first year this course will continue 
                            to run for the first term of every year.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="features off-white">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 my-auto text-center">
                    <h2>Educational workshops</h2>
                      <p>In addition to running the introduction course this year, Merlin
                        representatives also presented at multiple conferences and 
                        other Queen's events. Our past workshops have included coding tutorials, 
                        walkthroughs of our developed packages and overviews of potential 
                        applications of neuroscience. We have also hosted professionals 
                        from InterAxon and Queen's Center for Neuroscience who 
                        graciously gave presentations on Biological Signal Processing and 
                        Neuroscience. </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="feature-container">
                            <img className="feature-icon" src={F1} />
                              <h3>Coding Introduction</h3>
                              <p> Brain implants to directly link human minds to
                              computers. These are devices that allow people to control
                              software and devices using only their brain activity in real-time.</p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="feature-container">
                              <img className="feature-icon" src={F2} />
                              <h3>BCI Introduction</h3>
                              <p>An overview of neurotechnology for student populations to give them insight and intuition
                                on neuroscience software development and how the field may develop. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 my-auto text-center">
                        <img className="section-img" src={edu} />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="features">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 my-auto text-center">
                        <img className="section-img" src={booth2} />
                      </div>
                      <div className="col-lg-6 my-auto text-center">
                        <h2>Demonstration Booth</h2>
                        <p>The main way that Merlin interacts with the Queen's and 
                          greater Kingston communities is through demonstration booths.
                          Merlin runs approximately 15 booths a year at club openhouse events,
                          conferences, and hackathons. Additionally Merlin operates spontaneous
                          demonstration booths on campus to recruit new members during hiring and
                          to celebrate completed projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="features off-white">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 my-auto text-center">
                            <h2>Conference Attendances</h2>
                            <p>Merlin has made it a priority to enable members of the 
                              group to attend relevant conferences by subsidizing their
                              travel, accomodations, and developing relationships with
                              the conferences to get decreased ticket costs. We have had 
                              members attend the Neurogeneration conference at Queen's 
                              and the Expo Entrepreneur in Montreal. </p>
                      </div>
                      <div className="col-lg-6 my-auto text-center">
                        <img className="section-img" src={yannick} />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="features">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 my-auto text-center">
                      <h2>HackaThon Attendances</h2>
                      <p>Merlin has made it a priority to enable members of the 
                        group to attend HackaThons to encourage team bonding, to 
                        help the members develop their software development skills, 
                        and to help Merlin members produce interesting projects.
                        Merlin has encourage students by subsidizing their
                        travel and accomodations. This past year we sent two groups of 
                        students to HackaThons.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 my-auto text-center">
                      <img className="section-img" src={hack} />
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="feature-container">
                            <img className="feature-icon" src={F1} />
                              <h3>PrincetonHacks</h3>
                              <p>The PrincetonHacks team this year developed a 
                                Flutter App which stored and verified an electronic
                                identification for an electronic wallet. 
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="feature-container">
                              <img className="feature-icon" src={F2} />
                              <h3>BrickHacks</h3>
                              <p>The BrickHacks team sent to Rochester Institute of 
                                Technology this year won the Constellation Branding Award. 
                                The developed project was an environmental rewards program
                                for Constellation Brand's Corona product.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="upcoming-events">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="narrow-text">
                          <h3>Get involved</h3>
                          <h2>Upcoming Events</h2>
                          <p>We offer a series of events throughout the semester which are a great intro to the neurotech space!</p>
                          <a href="https://www.facebook.com/merlinneurotech/">More details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <Footer />

            </div>
    )
}
export default Initiatives;
