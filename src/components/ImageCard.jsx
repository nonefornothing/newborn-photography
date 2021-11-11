import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";
import RunningText from "components/RunningText";


const ImageCard = ({ className, imageFileName, imageAlt, header, subheader, slogan }) => {
  return (
    <Card className={clsx("image-card text-white text-center", className)}>
      <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-lead-in">
              {subheader}
            </div>
          </div>
          <RunningText className="running-text" slogan={slogan} />
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  slogan: PropTypes.string,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  slogan: "",
};

export default ImageCard;
