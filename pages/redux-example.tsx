import LottieAnimation from 'components/LottieAnimation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCartSlice } from 'slices/ExampleSlice';
import { selectExample } from 'slices/ExampleSlice/selectors';
import * as animationData from 'public/assets/animations/loading.json';

const Test: React.FC = () => {
  const dispatch = useDispatch();
  const { number, post, isFetching } = useSelector(selectExample);
  const { actions } = useCartSlice();

  const handleIncrease = () => {
    dispatch(actions.increase());
  };

  const handleDecrease = () => {
    dispatch(actions.decrease());
  };

  const handleFetchPost = () => {
    dispatch(actions.fetchData());
  };

  const handleClear = () => {
    dispatch(actions.setData(null));
  };

  return (
    <main className='h-screen flex-center flex-col'>
      <p className='text-xl'>Simple Counter Example:</p>
      <div className='flex gap-5 py-5'>
        <button onClick={handleDecrease}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 12h-15'
            />
          </svg>
        </button>
        <div className='w-20'>
          <p className='text-xl text-center'>{number}</p>
        </div>
        <button onClick={handleIncrease}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </button>
      </div>
      <div className='flex-center flex-col mt-5 gap-5'>
        <p className='text-xl'>Saga Example:</p>
        <div className='flex gap-5'>
          <button
            onClick={handleFetchPost}
            className='bg-[#6C63FF] text-white p-2 rounded hover:opacity-80 transition-opacity duration-200'
          >
            Fetch Random Data
          </button>
          {post && (
            <button
              onClick={handleClear}
              className='border border-[#6C63FF] text-[#6C63FF] p-2 rounded hover:opacity-80 transition-opacity duration-200 font-medium'
            >
              clear Data
            </button>
          )}
        </div>
        {isFetching ? (
          <div className='w-24 h-24'>
            <LottieAnimation animationData={animationData} />
          </div>
        ) : (
          post && (
            <div className='shadow p-5 bg-[#e6e6e6] rounded max-w-[500px] w-full'>
              <h2 className='text-xl font-medium text-center mb-5'>
                {post.title}
              </h2>
              <p className='text-justify'>{post.body}</p>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default Test;
