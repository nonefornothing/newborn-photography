import React from "react";
import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";
import RunningText from "components/RunningText";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName,inputText} = frontmatter;

  return (
    <div>
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      // extraInfo={extraInfoPart}
    />
    <RunningText 
      inputText={inputText}
    />
    </div>
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
