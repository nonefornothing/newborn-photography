/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

// import { Row, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

// import Icon from "components/Icon";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";

import "./Contact.scss";


const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  // const { anchor, header: rootHeader, subheader: rootSubHeader, telephone, email } = frontmatter;

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

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
                        <p className="text">
                            I am available for hire and open to any ideas of cooperation.
                            Feel free to contact me for any project or collaboration , just send me direct message or
                            contact me through
                            social sites listed below and I will respond as soon as possible.
                        </p>

                        <div className="info">
                            <div className="information">
                                <img src="./asses/location.png" className="icon" alt="location-icon" />
                                <p>Setia Budi, South Jakarta 12940</p>
                            </div>
                            <div className="information">
                                <img src="/asses/email.png" className="icon" alt="email-icon" />
                                <p>ambaritajohan10@gmail.com</p>
                            </div>
                            <div className="information">
                                <img src="./asses/phone.png" className="icon" alt="phone-icon" />
                                <p>62895601358111</p>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Our social media :</p>
                            {/* <div className="social-icons">

                            </div> */}
                        </div>
                    </div>

                    <div className="contact-form">
                        <form autoComplete="off" id="contactForm">
                            <div className="input-container">
                                <input type="text" name="name" className="input" id="name" required />
                                <label>Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" id="email" required />
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" id="phone" required />
                                <label>Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input" id="message" required />
                                <label>Message</label>
                                <span>Message</span>
                            </div>

                            <div className="button">
                                <button className="button btn" type="submit" data-hover="Let's Work Together"
                                    value="Send"><span>Submit</span></button>
                            </div>

                            <div className="alert">Your message has been sent</div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {
      /* <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>

        <Col lg={4} className="ml-auto text-center">
          <a href="https://wa.me/message/BHYRKLJCSOG5D1" target="_blank" rel="noreferrer">
            <Icon iconName="WhatsappIcon" size="3x" className="text-muted mb-3 green-icon" style={{color: 'red'}}/>
              <a className="d-block" >
                {telephone}
              </a>
          </a>
        </Col>
        <Col lg={4} className="mr-auto text-center">
          <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row> */ 
    }
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
