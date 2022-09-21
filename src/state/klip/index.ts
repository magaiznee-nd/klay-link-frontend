import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { KlipState } from "../types";

const initialState: KlipState = {
    isKlipModal: false,
    qrCode: "",
};

export const klipSlice = createSlice({
    name: "klip",
    initialState,
    reducers: {
        showKlipModal: (state: KlipState) => {
            state.isKlipModal = true;
        },
        toggleKlipModal: (state: KlipState) => {
            state.isKlipModal = !state.isKlipModal;
        },
        setQrCode: (state: KlipState, action: PayloadAction<{ qrCode: string; }>) => {
            state.qrCode = action.payload.qrCode;
        },
    },
});

export const { toggleKlipModal, showKlipModal, setQrCode } = klipSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default klipSlice.reducer;
