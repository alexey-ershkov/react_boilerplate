import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from 'besthack_exchange_api_typings_and_utils';

interface UserState {
    user: UserInfo | null;
}

const initialState: UserState = {
    user: null,
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // setUserState: (userState: UserInfo, { payload }: PayloadAction<UserInfo>) => payload,
    },
});

// export const { setUserState } = slice.actions;
export const userReducer = slice.reducer;
