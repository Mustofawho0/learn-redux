'use client';
import { RootState } from '@/utils/store/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlices = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increments: (state) => {
      state.value += 1;
    },
    decrements: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const incrementAsync =
  (amount: number) =>
  (
    dispatch: (arg0: {
      payload: number;
      type: 'counter/incrementByAmount';
    }) => void
  ) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 3000);
  };

export const { increments, decrements, incrementByAmount } =
  counterSlices.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlices.reducer;
