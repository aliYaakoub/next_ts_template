import React from 'react';
import Lottie, { Options, LottieProps } from 'react-lottie';

interface Props<T> {
  animationData: T;
  options?: LottieProps;
}

function LottieAnimation<T>({ animationData, options }: Props<T>) {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='w-full h-full'>
      <Lottie {...options} options={defaultOptions} />
    </div>
  );
}

export default LottieAnimation;
