import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

import Facebook from '../assets/facebook.png';
function Contact() {
    return (
        <div>
            <Header title="Get Involved" />
            <section className="contact-form-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="narrow-text">
                      <p>Interested in getting involved, learning more, or sponsoring us? Reach out to us on Facebook and we will do our best to get back to you in a timely manner!</p>
                      <a href="https://www.facebook.com/merlinneurotech/"><img src={Facebook} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
        </div>
    )
}
export default Contact;
