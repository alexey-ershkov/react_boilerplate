import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: ({ value }: CounterState, { payload }: PayloadAction<number>) => ({
      value: value + payload,
    }),
    decrease: ({ value }: CounterState, { payload }: PayloadAction<number>) => ({
      value: value - payload,
    }),
  },
});

export const { increase, decrease } = slice.actions;
export const counterReducer = slice.reducer;
