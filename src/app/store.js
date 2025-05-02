import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../src/features/products/productSlice";
import authReducer from "../../src/features/auth/authSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // redux-thunk avtomatik qo‘shiladi, shu sababli bu satrni olib tashlang
});
