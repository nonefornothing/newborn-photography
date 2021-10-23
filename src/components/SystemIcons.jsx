import makeFAIcon from "utils/makeFAIcon";

import {
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faTimes,
  faGlobe,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const PhoneIcon = makeFAIcon(faPhone);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);

export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebook);
export const InstagramIcon = makeFAIcon(faInstagram);

export const WhatsappIcon = makeFAIcon(faWhatsapp);
export const LocationIcon = makeFAIcon(faMapMarkedAlt);
export const EmailIcon = makeFAIcon(faEnvelope);

export * from "config/CustomIcons";
