import React from "react";
import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName,slogan} = frontmatter;

  return (
    <div>
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      slogan={slogan}
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
