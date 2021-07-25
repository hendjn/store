import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storeApi from "../../app/fakeStoreAPI";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const { data } = await storeApi.get("/products");
    return data;
})

const initialState = {
    products: [],
    status: 'idle',
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
       // setProducts: (state, action) => { state.value = action.payload },

    },
    extraReducers: {
        [fetchProducts.pending]:
            (state, action) => {
                state.status = 'loading';
            },
        [fetchProducts.fulfilled]:
            (state, action) => {
                console.log("fullfilled")
                state.status = 'succeeded';
                state.products = state.products.concat(action.payload)
                console.log(action.payload)
            },
        [fetchProducts.rejected]:
            (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            }
    }
});

//export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;