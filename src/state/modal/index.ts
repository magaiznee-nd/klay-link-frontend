import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { ModalState } from "../types";

const initialState: ModalState = {
    isModal: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state: ModalState) => {
            state.isModal = true;
        },
        toggleModal: (state: ModalState) => {
            state.isModal = !state.isModal;
        },
    },
});

export const { showModal, toggleModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;