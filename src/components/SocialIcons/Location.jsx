/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Location = ({ userName }) => (
  <CircleIcon href={`https://facebook.com/${userName}`} iconName="LocationIcon" />
);

Location.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Location;
