import React from 'react';

import data from '../../data/portfolio.json';
import IconSocial from '../IconSocial';
import classNames from 'classnames';

const Socials = ({ className, iconClass }) => {
  return (
    <div className={classNames(className, 'gap-8 flex flex-wrap text-center')}>
      {data.socials.map((social, index) => (
        <IconSocial
          key={index}
          social={social.title}
          className={classNames(iconClass, 'transition-all ease-in-out duration-300')}
        />
      ))}
    </div>
  );
};

export default Socials;
