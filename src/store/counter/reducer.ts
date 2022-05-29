import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from '../index';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const asyncIncrease = createAsyncThunk('asyncIncrease', (): Promise<number> => {
  return new Promise((res) => {
    setTimeout(() => res(100), 1000);
  });
});

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
  extraReducers: (builder) => {
    builder.addCase(asyncIncrease.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { increase, decrease } = slice.actions;
export const counterReducer = slice.reducer;
