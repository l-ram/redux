import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = [
    { id: 1, title: "Learning Redux", content: "I've heard good things" },
    { id: 2, title: "Slices....", content: "The more I slice, the more I want pizza" }
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reducer(state, action) {
            state.push(action.payload)
        },
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId
                }
            }
        }
    }
})

export const selectAllPosts = (state: RootState) => state.posts;
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer;