import { RootState } from "../types/reduxStoreTypes";

const getCart = (state: RootState) => state.cart;

export const ACTION_SELECTORS = {
  getCart,
};
