import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { AuthState } from "../types";

const initialState: AuthState = {
    isAuth: false,
    address: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state: AuthState, action: PayloadAction<{ address: string; isAuth: boolean; }>) => {
            state.address = action.payload.address;
            state.isAuth = action.payload.isAuth;
        },
    },
});

export const { setAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state;

export default authSlice.reducer;