/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Whatsapp = ({ userName }) => (
  <CircleIcon href="https://wa.me/message/BHYRKLJCSOG5D1" iconName="WhatsappIcon" />
);

Whatsapp.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Whatsapp;
