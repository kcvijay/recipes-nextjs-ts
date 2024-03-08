import React from 'react';

function SingleRecipeSkeleton() {
  return (
    <div>
      <div className='image w-full h-[25rem] bg-[#000] animate-pulse' />
      <div className='title h-16 bg-[#000] mt-4 md:mt-8 animate-pulse'></div>
    </div>
  );
}

export default SingleRecipeSkeleton;
