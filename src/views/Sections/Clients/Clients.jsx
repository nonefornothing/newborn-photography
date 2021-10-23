/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import "./Clients.scss";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Client from "components/Client";
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
    <PageSection className="carousel-wrapper" id={anchor}>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
        {clients.map(({ clientName, ...tmProps  }) => (
            <Client clientName={clientName} {...tmProps} />
        ))}
        </Carousel>
    </PageSection>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object
};

Clients.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clients;
