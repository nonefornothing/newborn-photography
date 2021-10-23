/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Email = ({ userName }) => (
  <CircleIcon href={`mailto:${userName}@gmail.com`}  iconName="EmailIcon" />
);
Email.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Email;
