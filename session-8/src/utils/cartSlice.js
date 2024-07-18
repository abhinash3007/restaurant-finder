// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
        },
        clearItem: (state) => {
            state.items = [];
        },
    }
});

export const { addItems, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
