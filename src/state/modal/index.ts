import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { ModalState } from "../types";

const initialState: ModalState = {
    isWalletModal: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showWalletModal: (state: ModalState) => {
            state.isWalletModal = true;
        },
        toggleWalletModal: (state: ModalState) => {
            state.isWalletModal = !state.isWalletModal;
        },
    },
});

export const { showWalletModal, toggleWalletModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;