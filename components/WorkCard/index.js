import React from 'react';

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div className="overflow-hidden p-2 first:ml-0 link cursor-pointer" onClick={onClick}>
      <div
        className="relative border-black border-solid overflow-hidden transition-all ease-out duration-500 h-[300px] md:h-[600px]"
        style={{ borderRadius: generateRandomRadius() }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:grayscale-0 hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>

      <h1 className="mt-8 text-3xl font-medium">{name ? name : 'Project Name'}</h1>
      <h2 className="font-grotezk-brukt text-xl opacity-50">{description ? description : 'Description'}</h2>
    </div>
  );
};

export const generateRandomRadius = function (x) {
  //Generate random number in a range 1, 200
  const tl = Math.floor(Math.random() * 450) + 1;
  const tr = Math.floor(Math.random() * 450) + 1;
  const br = Math.floor(Math.random() * 450) + 1;
  const bl = Math.floor(Math.random() * 450) + 1;

  return `${tl}px ${tr}px ${br}px ${bl}px`;
};

export default WorkCard;
