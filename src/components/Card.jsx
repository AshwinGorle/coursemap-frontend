import React from 'react';

const Card = ({ title }) => {
  return (
    <div className=' h-28 w-fit text-gray-400 bg-[#10172a] rounded-lg flex items-center justify-center px-10 py-6 text-2xl'>
    {title}
  </div>
  );
};

export default Card;
