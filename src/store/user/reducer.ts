import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from 'besthack_exchange_api_typings_and_utils';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;
import { api } from '../../utils/api';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default;

interface UserState {
    user: UserInfo | null;
}

const initialState: UserState = {
    user: null,
};

export const fetchUserData = createAsyncThunk('getUserData', () => {
    return axios.get('http://localhost:5000/').then((res) => {
        console.log(res);
        if (res.status === 200) {
            return res.data;
        }
        throw Error(res.data);
    });
});

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // setUserState: (userState: UserInfo, { payload }: PayloadAction<UserInfo>) => payload,
        // [api.reducerPath]: api.reducer,
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserData.fulfilled, (userState: UserState, action) => {
            userState.user = action.payload;
        });
    },
});

// export const { setUserState } = slice.actions;
export const userReducer = slice.reducer;
