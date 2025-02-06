import React from 'react';

import data from '../../data/portfolio.json';
import IconShape from '../IconShape';
import IconSocial from '../IconSocial';
import classNames from 'classnames';

const SocialsShape = ({ className }) => {
  return (
    <div
      className={classNames(
        className,
        'grid grid-cols-2 gap-4 xl:gap-16 lg:flex lg:flex-wrap justify-center justify-items-center sm:py-10 md:py-15 mx-auto cursor-pointer'
      )}
    >
      {data.socials.map((social, index) => (
        <div
          className="relative h-40 w-40 lg:w-60 lg:h-60 2xl:w-70 2xl:h-70 motion-safe:hover:-mt-10 transition-all ease-in-out duration-300"
          key={index}
        >
          <IconShape key={index} fixed shape={social.shape} className="h-full w-full absolute inset-0 text-colored" />
          <IconSocial
            social={social.title}
            className="absolute inset-0 m-auto w-full h-full p-15 lg:p-20 2xl:p-25 text-colored-inverted"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialsShape;
