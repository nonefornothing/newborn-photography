/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Location = ({ userName }) => (
  <CircleIcon href="https://www.google.com/maps/dir//Alam+Sutera,+Pakulonan,+Jl.+Raya+Serpong+No.Raya,+Pd.+Jagung,+Kec.+Serpong+Utara,+Kota+Tangerang+Selatan,+Banten+15325/@-6.2573296,106.6554136,17z/data=!4m16!1m6!3m5!1s0x2e69e4dd7ea90c7f:0x841fb079270ad8e0!2sAlam+Sutera!8m2!3d-6.2573349!4d106.6576023!4m8!1m0!1m5!1m1!1s0x2e69e4dd7ea90c7f:0x841fb079270ad8e0!2m2!1d106.6576023!2d-6.2573349!3e2" iconName="LocationIcon" />
);

Location.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Location;
