import { RootState } from '../index';

export const checkUserState = (state: RootState) => Boolean(state.user.user.id);
export const getUserState = (state: RootState) => state.user.user;
export const getUserId = (state: RootState) => state.user.user.id;
