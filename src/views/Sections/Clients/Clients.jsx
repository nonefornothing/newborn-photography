/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";
import "./Clients.scss";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Clients = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    clients
  } = frontmatter;

  return (
    <PageSection className="carousel-wrapper" id={anchor} >
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        <Carousel infiniteLoop useKeyboardArrows autoPlay  >
          {clients.map(({ clientStatement, clientName  }) => (
            <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              color: "gray",
            }}
            >
            <p>{clientStatement}</p>
            <p style={{ fontStyle: "italic",fontWeight: 500, color: "green" , paddingBottom: 50}}>
              {clientName}</p>
            </div>
          ))}
        </Carousel>
    </PageSection>
  );
};

Clients.propTypes = {
  frontmatter: PropTypes.object
};

Clients.defaultProps = {
  frontmatter: null,
};

export default Clients;
