import React from 'react';

import Socials from '../Socials';
import data from '../../data/portfolio.json';
import classNames from 'classnames';

const Footer = ({}) => {
  return (
    <>
      <div className="p-7 text-colored bg-accent  dark:bg-accent-dark">
        <div className="mt-5 md:mt-10 flex flex-col sm:flex-row justify-between content-end">
          <div>
            <h1 className="font-grotezk text-3xl md:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              DON&apos;T BE SHY,
            </h1>
            <h1 className="font-grotezk text-3xl md:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              SAY HI :)
            </h1>
          </div>
          <div className="h-fit mt-5 md:mt-auto mb-0 text-black dark:text-white justify-self-end text-end">
            <Socials iconClass="w-10 h-10 mx-1 text-colored motion-safe:hover:-mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
