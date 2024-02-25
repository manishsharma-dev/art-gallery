import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: true };


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSidebarState(state) {
            state.isOpen = !state.isOpen;
        }
    }
});

export const { setSidebarState } = sidebarSlice.actions;

