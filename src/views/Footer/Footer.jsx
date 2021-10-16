/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    copyrightStatement
  } = frontmatter;

  return (
    <footer className="footer text-center text-white fixed-bottom bg-dark">
      <Container>
      <div className="text-center p-3" >
        {copyright}
        <a className="text-red" target="_blank" rel="noopener noreferrer" href="https://johanambarita.tech/">Bot Inc</a>
        {copyrightStatement}
      </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
