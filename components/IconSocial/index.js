import { React } from 'react';

import Behance from '../../public/images/SocialIcons/behance.svg';
import Email from '../../public/images/SocialIcons/email.svg';
import Instagram from '../../public/images/SocialIcons/instagram.svg';
import LinkedIn from '../../public/images/SocialIcons/linkedin.svg';

import classNames from 'classnames';

const IconSocial = ({ className, social, onClick }) => {
  switch (social) {
    case 'behance':
      return <Behance className={classNames(className)} onClick={onClick ? () => onClick() : null} />;
    case 'email':
      return <Email className={classNames(className)} onClick={onClick ? () => onClick() : null} />;
    case 'instagram':
      return <Instagram className={classNames(className)} onClick={onClick ? () => onClick() : null} />;
    case 'linkedin':
      return <LinkedIn className={classNames(className)} onClick={onClick ? () => onClick() : null} />;
    default:
      return null;
  }
};

export default IconSocial;
