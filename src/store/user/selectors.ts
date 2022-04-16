import { RootState } from '../index';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getUserId = (state: RootState) => state.user.id;
