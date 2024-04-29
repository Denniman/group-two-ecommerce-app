import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );

            if (!existingItem) {
                state.cartItems.push({
                    ...newItem,
                });
            }
        },
        increaseQuantity: (state, action) => {
            const newItem = action.payload;
            const newQuantity = action.payload.quantity;
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item.id === newItem.id
            );

            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex].quantity = newQuantity;
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export const { addToCart, increaseQuantity, removeFromCart } =
    cartSlice.actions;

export default cartSlice.reducer;
