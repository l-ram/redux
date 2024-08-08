import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import postsReducer from './features/post/postSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;