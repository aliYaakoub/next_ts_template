/**
 *
 *
 *      EmptyPage
 *
 *
 */

import React from 'react';
import EmptyIcon from 'public/assets/empty_icon.svg';
import { useRouter } from 'next/router';

const EmptyPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className='h-full w-full bg-[#fff] flex-center p-10'>
      <div className='max-w-[500px] w-full flex-col-center'>
        <EmptyIcon />
        <div className='flex flex-col sm:flex-row items-center justify-between w-full mt-10'>
          <p className='text-black text-2xl font-sans'>Wow Such Empty</p>
          <button
            onClick={() => router.back()}
            className='bg-[#6C63FF] w-24 h-10 rounded font-sans mt-5 sm:mt-0 text-[#fff]'
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyPage;
