// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        // addItems: (state, action) => {
        //     state.items.push(action.payload);
        // },
        addItems: (state, action) => {
            const itemToAdd = action.payload;
            itemToAdd.cartItemId = Math.random().toString(36).substr(2, 9);
            state.items.push(itemToAdd);
        },
        removeItem: (state, action) => {
            const cartItemIdToRemove = action.payload;
            state.items = state.items.filter((item) => item.cartItemId!== cartItemIdToRemove);
            if (state.items.length === 0) {
                state.items = [];
            }
        },
        clearItem: (state) => {
            state.items = [];
        },
    }
});

export const { addItems, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
