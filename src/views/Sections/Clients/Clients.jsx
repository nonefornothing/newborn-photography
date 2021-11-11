/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";
import "./Clients.scss";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const Clients = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    clients,
    questions,
    headerFaq,
    subheaderFaq
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

        <SectionHeader header={headerFaq} subheader={subheaderFaq} />
        <Collapse accordion>
          {questions.map(({ question, answer, key  }) => (
              <Panel header={question} key={key} style={{
                fontSize: "2vw",
                }}>
                <p>{answer}</p>
              </Panel>
              ))}
        </Collapse>
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
