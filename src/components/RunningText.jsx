import React from "react";
import PropTypes from "prop-types";

import "./RunningText.css";

const RunningText = ({ inputText }) => {
  if (!inputText) {
    return null;
  }

  return (
  <svg viewBox="0 0 1760 300">
	  <symbol id="s-text">
		  <text textAnchor="middle" x="50%" y="80%">{inputText}</text>
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
  inputText: PropTypes.string,
};

RunningText.defaultProps = {
  inputText: null,
};

export default RunningText;
