import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from "./api/base.api";

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;