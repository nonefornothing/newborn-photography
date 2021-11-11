/* eslint-disable vars-on-top */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";

 import { Row } from "react-bootstrap";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import * as SocialIcons from "components/SocialIcons";

import "./Contact.scss";

const Contact = ({ 
  className, 
  frontmatter,
 }) => {

  if (!frontmatter) {
    return null;
  }

  const { 
    anchor, 
    header: rootHeader, 
    subheader: rootSubHeader,
    content: description,
    social: { email, location, whatsapp, facebook, twitter, instagram },
  } = frontmatter;


  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById("from_name").value;
    const emailaddress = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const url = "https://wa.me/6281314529004?text=" 
    + "Name: " + name + "%0a"
    + "Email: " + emailaddress + "%0a"
    + "Phone Number: " + phone  + "%0a"
    + "Message: " + message; 

    window.open(url, '_blank').focus();
    e.target.reset()
  };


  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <section className="contact" id="contact">
        <div className="max-width">
            <div className="container">
                <div className="form">
                    <div className="contact-info">
                        <p className="text">{description}</p>
                        <div className="info">
                            <div className="information">
                              <p>{location ? <SocialIcons.Location userName={location} /> : null}<span>Alam Sutera, Tangerang Selatan</span></p>
                            </div>
                            <div className="information">
                              
                              <p>{email ? <SocialIcons.Email userName={email} /> : null}<span>cvmwartproduction@gmail.com</span></p>
                            </div>
                            <div className="information">
                              <p>{whatsapp ? <SocialIcons.Whatsapp userName={whatsapp} /> : null}<span>+62 813-1452-9004</span></p>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Our social media :</p>
                            <div className="social-icons">
                              {/* {twitter ? <SocialIcons.Twitter userName={twitter} /> : null}
                              {facebook ? <SocialIcons.Facebook userName={facebook} /> : null} */}
                              {instagram ? <SocialIcons.Instagram userName={instagram} /> : null}
                            </div>
                        </div>
                    </div>


                     <div className="contact-form">
                         <form autoComplete="off" id="contactForm" onSubmit={handleOnSubmit}>
                             <div className="input-container">
                                 <input type="text" name="from_name" className="input" placeholder="Name" id="from_name" required />
                             </div>
                             <div className="input-container">
                                 <input type="email" name="email" className="input" placeholder="Email" id="email" required />
                             </div>
                             <div className="input-container">
                                 <input type="tel" name="phone" className="input" placeholder="Phone Number" id="phone" required />
                             </div>
                             <div className="input-container textarea">
                                 <textarea name="message" className="input" placeholder="message" id="message" required />
                             </div>

                             <div className="button">
                                 <button className="button btn" type="submit" data-hover="Let's Work Together"
                                     value="Send" ><span>Submit</span></button>
                             </div>

                             <div className="alert">Your message has been sent</div>

                         </form>
                    </div>
                </div>
            </div>
        </div>

      </section>


    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
  social: PropTypes.object
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
  social: PropTypes.object
};

export default Contact;
