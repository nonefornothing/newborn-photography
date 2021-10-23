/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Whatsapp = ({ userName }) => (
  <CircleIcon href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FBHYRKLJCSOG5D1&e=ATMM0PWiaXjcEkKtua92-Dz0K7GD1WKiLHDoKjob-HbrzLd68IEXooO1aJ8g4iaLxhnd-QHu6VlxbqwWzff8hw&s=1" iconName="WhatsappIcon" />
);

Whatsapp.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Whatsapp;
