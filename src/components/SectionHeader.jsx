import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Col } from "react-bootstrap";
import "./SectionHeader.scss";

const SectionHeader = ({ header, subheader, certificate, className, ...restProps }) => {
  const subheaderPart = subheader ? (
    <h3 className="section-subheading text-muted">{subheader}</h3>
  ) : null;

  const certificatePart = certificate ? (
    <h3 className="section-subheading text-muted">{certificate}</h3>
  ) : null;

  return (
    <Col lg={12} className={clsx("section-header", "text-center", className)} {...restProps}>
      <h2 className="section-heading text-uppercase">{header}</h2>
      {subheaderPart}
      {certificatePart}
    </Col>
  );
};

SectionHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  certificate: PropTypes.string,
  className: PropTypes.string
};

SectionHeader.defaultProps = {
  header: "",
  subheader: "",
  certificate: "",
  className: null
};

export default SectionHeader;
