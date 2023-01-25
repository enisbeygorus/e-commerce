import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";

export const store = configureStore({
  reducer: { cart: cartReducer, user: userReducer },
});
