import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userdata: [],
    usersingle: {
        name: 'aravinda',
        email: 'email@gmail.com'
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userStore: (state, action) => {
            state.userdata = action.payload;
        },
        removeUserStore: (state) => {
            state.usersingle = {};
        }
    }
});

export const { userStore, removeUserStore } = userSlice.actions;

export default userSlice.reducer;
