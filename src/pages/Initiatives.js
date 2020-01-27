import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import edu from '../assets/edu.jpg';
//import img_fluid from "../styles/bootstrap/_images.scss";
import F1 from '../assets/glyphs.png';
import F2 from '../assets/f2.png';
import Stock1 from '../assets/stock1.jpg';
function Initiatives() {
    return (
        <div>
            <Header title="Our Current Initiatives" alternateLink={true} />
            <section className="features">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 my-auto text-center">
                    <img className="section-img" src={Stock1} />
                  </div>
                  <div className="col-lg-6">
                    <h2>Offered course</h2>
                    <p>This past term we ran an educational program to teach the basics of neurotechnology.</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="feature-container">
                          <img className="feature-icon" src={F1} />
                            <h3>Write something</h3>
                            <p>Brain implants to directly link human minds to
                            computers. These are devices that allow people to control
                            software and devices using only their brain activity in real-time.</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="feature-container">
                            <img className="feature-icon" src={F2} />
                            <h3>Write more</h3>
                            <p>Prevent accidents and improve the effeciency of transportation by anticipating drivers’ actions in real time.</p>
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
                    <div className="col-lg-6">
                      <h2>Educational workshops</h2>
                      <p>Our past workshops have included... Our upcoming workshops include...</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="feature-container">
                            <img className="feature-icon" src={F1} />
                              <h3>Write something</h3>
                              <p>Brain implants to directly link human minds to
                              computers. These are devices that allow people to control
                              software and devices using only their brain activity in real-time.</p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="feature-container">
                              <img className="feature-icon" src={F2} />
                              <h3>Write more</h3>
                              <p>Prevent accidents and improve the effeciency of transportation by anticipating drivers’ actions in real time.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 my-auto text-center">
                        <img className="section-img" src={Stock1} />
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
                          <p>We offer a series of events throughout the semester which are a great intro to the neuro space!</p>
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
