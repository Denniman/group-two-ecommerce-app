import { toast } from "sonner";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { products } from "../../network";

const initialState = {
    error: null,
    data: null,
    settings: null,
    storeName: null,
    products: [],
    isLoading: false,
};

export const getProducts = createAsyncThunk(
    "products/get-store",
    async (payload, thunkAPI) => {
        try {
            const data = await products(payload);
            toast.success("Products fetched!🎉");
            return data;
        } catch (error) {
            const message = error?.response?.data.message;
            toast.error(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.signUpSuccess = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload.products;
            state.settings = action.payload.setting;
            state.storeName = action.payload.storeName;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default productsSlice.reducer;
