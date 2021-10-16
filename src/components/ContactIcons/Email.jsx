/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Email = ({ userName }) => (
  <CircleIcon  href={`https://facebook.com/${userName}`}  iconName="EmailIcon" />
);
// href="mailto:{username}@example.com"
Email.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Email;
