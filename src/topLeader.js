// TopLeader.js

import React from 'react';

const TopLeader = ({ name, ratio,position }) => {
  console.log(name, ratio);

  return (
    <div className='top-div flex flex-row justify-center items-center p-6 gap-10 '>
        <div class="legend head-text">{position}</div>
        <div class="w-full flex items-center gap-10">
      <h4 className='text-xl sm:h1 font-semibold text-gray-800'>{name}</h4>
      <h2 className='text-2xl font-semibold text-gray-600 color-blue'>{ratio}</h2>
      </div>
    </div>
  );
}

export default TopLeader;
