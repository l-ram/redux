import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";

const initialState = [
    { id: 0, name: "Dude Lebowski" },
    { id: 1, name: "Dude Lebowski" },
    { id: 2, name: "Dude Lebowski" },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer