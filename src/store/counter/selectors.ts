import { RootState } from '../index';

export const getCounter = (state: RootState) => state.counter.value;
