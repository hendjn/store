import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { } from '../features/products/productsSlice';
import storeApi from './fakeStoreAPI';

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
});



export const getProduct = id => (dispatch, getState) => {
  const products = getState().products;
  return products.find(product => product.id === id);
}