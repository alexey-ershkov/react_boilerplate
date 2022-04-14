import { configureStore } from '@reduxjs/toolkit';

import { api } from '../utils/api';
import { counterReducer } from './counter';
import { userReducer } from './user';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
