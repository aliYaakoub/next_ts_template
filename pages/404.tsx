import React from 'react';
import NotFountIcon from 'public/assets/404_icon.svg';

const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-white'>
      <div className='w-full max-w-[600px] p-10 flex flex-col items-center'>
        <NotFountIcon />
        <p className='text-black text-2xl mt-20 font-sans'>Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
