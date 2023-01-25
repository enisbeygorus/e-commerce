import { RootState } from "../types/reduxStoreTypes";

const getCart = (state: RootState) => state.cart;
const getUser = (state: RootState) => state.user;

export const ACTION_SELECTORS = {
  getCart,
  getUser,
};
