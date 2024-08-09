import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import postsReducer from './features/post/postSlice';
import usersReducer from './features/users/usersSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;