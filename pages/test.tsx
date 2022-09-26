import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCartSlice } from 'Slices/TestSlice';
import { selectNumber } from 'Slices/TestSlice/selectors';

const Test: React.FC = () => {
  const dispatch = useDispatch();
  const number = useSelector(selectNumber);
  const { actions } = useCartSlice();

  return (
    <main className='h-screen flex-center flex-col'>
      <div className='flex'>
        <button onClick={() => dispatch(actions.decrease())}>-</button>
        <p className='p-5'>{number}</p>
        <button onClick={() => dispatch(actions.increase())}>+</button>
      </div>
      <Link href='/testcopy'>
        <a>testcopy</a>
      </Link>
    </main>
  );
};

export default Test;
