'use client';
import {
  increments,
  decrements,
  incrementByAmount,
} from '@/features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/hook';
import { selectCount } from '@/features/counter/counterSlice';
import { useState } from 'react';

export default function Home() {
  const count = useSelector(selectCount);
  const dispatch = useAppDispatch();
  const [setAmount, getAmount] = useState<string>('5');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col gap-5'>
        <button
          type='button'
          aria-label='Increment type'
          onClick={() => dispatch(increments())}
        >
          Click to Increment
        </button>
        <span className='border text-center'>{count}</span>
        <button
          type='button'
          aria-label='Decrement type'
          onClick={() => dispatch(decrements())}
        >
          Click to Decrement
        </button>
        <input
          type='text'
          aria-label='Increment by Amount'
          value={setAmount}
          onChange={(e) => getAmount(e.target.value)}
          className='border text-center'
        />
        <button
          type='button'
          onClick={() => dispatch(incrementByAmount(Number(setAmount) || 0))}
        >
          Click to Increment by Amount
        </button>
      </div>
    </main>
  );
}
