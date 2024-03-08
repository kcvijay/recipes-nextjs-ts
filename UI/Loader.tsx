import React from 'react';

function Loader() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <span className='h-20 w-20 border-8 border-gray-500 border-b-transparent rounded-full animate-spin'></span>
    </div>
  );
}

export default Loader;
