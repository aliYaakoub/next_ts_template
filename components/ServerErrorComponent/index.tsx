/**
 *
 *
 *      ServerErrorComponent
 *
 *
 */

import React from 'react';
import ServerErrorIcon from 'public/assets/500_icon.svg';

interface Props {
  title: string;
  onPress: () => void;
}

const ServerErrorComponent: React.FC<Props> = ({ title, onPress }) => {
  return (
    <div className='h-full w-full bg-[#fff] flex-center p-10'>
      <div className='max-w-[500px] w-full flex-col-center'>
        <ServerErrorIcon />
        <div className='flex flex-col items-center justify-between w-full mt-10'>
          <p className='text-black text-2xl font-sans text-center py-5'>
            Oops, we encountered an error, please try again.
          </p>
          <button
            onClick={onPress}
            className='bg-[#6C63FF] py-2 px-4 rounded font-sans mt-5 sm:mt-0 text-[#fff]'
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerErrorComponent;
