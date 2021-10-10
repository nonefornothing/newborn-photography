import React from "react";
import PropTypes from "prop-types";

import "./RunningText.scss";

const RunningText = ({ slogan }) => {
  if (!slogan) {
    return null;
  }

  return (
  <svg >
	  <symbol id="s-text">
		  <text textAnchor="middle" x="50%" y="80%">{slogan}</text>
	  </symbol>

	  <g className = "g-ants">
		  <use xlinkHref="#s-text" className="text-copy" />
		  <use xlinkHref="#s-text" className="text-copy" />
		  <use xlinkHref="#s-text" className="text-copy" />
		  <use xlinkHref="#s-text" className="text-copy" />
		  <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
		  <use xlinkHref="#s-text" className="text-copy" />
		  <use xlinkHref="#s-text" className="text-copy" />
	  </g>
  </svg>
  );
};

RunningText.propTypes = {
  slogan: PropTypes.string,
};

RunningText.defaultProps = {
  slogan: null,
};

export default RunningText;
