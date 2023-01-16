import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../types";
import { ICartState } from "../../types";

const initialCartItems: Array<ICartItem> = [
  {
    id: "1",
    title: "Erkek Alaska Fermuar Detay Oversize Sweatshirt",
    color: "Black",
    size: "M",
    price: "99,99",
    currency: "TL",
    discountPrice: "50,88",
    amount: 1,
    productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
  },
  // {
  //   id: "2",
  //   title: "Erkek Alaska Fermuar Detay Oversize Sweatshirt 2",
  //   color: "Red",
  //   size: "S",
  //   price: "224,00",
  //   currency: "TL",
  //   discountPrice: "50,88",
  //   amount: 1,
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
      state.cartItems = [...state.cartItems, action.payload];
      state.amount++;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item: ICartItem) => item.id !== itemId
      );
    },
    updateItem: (state, action: PayloadAction<ICartItem>) => {
      const cart = state.cartItems.find(
        (item: ICartItem) => item.id !== action.payload.id
      );
      if (cart) {
        const indexOfCart = state.cartItems.indexOf(cart);
        state.cartItems[indexOfCart] = action.payload;
        // state.cartItems = [...state.cartItems];
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
