import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";

import "./TeamMember.scss";

const TeamMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  subheaderCertificate,
  social: { twitter, facebook,instagram}
}) => {
  const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  const facebookPart = facebook ? <SocialIcons.Facebook userName={facebook} /> : null;
  const instagramPart = instagram ? <SocialIcons.Instagram userName={instagram} /> : null;

  return (
    <div className="team-member">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || header || subheader || subheaderCertificate}
      />
      <h4>{header}</h4>
      <p className="text-muted">{subheaderCertificate}</p>
      <p className="text-muted">{subheader}</p>
      <div>
        {/* {twitterPart}
        {facebookPart} */}
        {instagramPart}
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  subheaderCertificate : PropTypes.string,
  social: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    instagram : PropTypes.string,
  }),
};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  subheaderCertificate: "",
  social: {
    twitter: null,
    facebook: null,
    instagram: null,
  },
};

export default TeamMember;
