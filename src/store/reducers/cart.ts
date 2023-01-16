import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../types";
import { ICartState } from "../../types";

const initialCartItems: Array<ICartItem> = [
  // {
  //   id: "0",
  //   title: "Erkek Alaska Fermuar Detay Oversize Sweatshirt",
  //   color: "Black",
  //   size: "M",
  //   price: "99,99",
  //   currency: "TL",
  //   discountPrice: "50,88",
  //   amount: 1,
  //   productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
  // },
];

const initialState: ICartState = {
  cartItems: initialCartItems,
  amount: initialCartItems.length,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      // check if item already in state
      const cartItem = state.cartItems.find((item: ICartItem) => {
        return (
          item.id === action.payload.id && item.size === action.payload.size
        );
      });

      if (cartItem) {
        state.amount += action.payload.amount;
        cartItem.amount += action.payload.amount;
        return;
      }
      state.amount += action.payload.amount;
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const cartItem = state.cartItems.find((item: ICartItem) => {
        return item.id === action.payload;
      });
      if (cartItem) {
        state.amount -= cartItem.amount;
        state.cartItems = state.cartItems.filter(
          (item: ICartItem) => item.id !== action.payload
        );
      }
    },
    updateItem: (state, action: PayloadAction<ICartItem>) => {
      const cartItem = state.cartItems.find(
        (item: ICartItem) => item.id === action.payload.id
      );
      if (cartItem) {
        const indexOfCart = state.cartItems.indexOf(cartItem);
        state.cartItems[indexOfCart] = action.payload;
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
