import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );

            state.totalQuantity++;
            state.totalPrice += newItem.price;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    amount: newItem.amount,
                    productName: newItem.productName,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
