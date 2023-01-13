import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../types";
import { ICartState } from "../../types";

const initialCartItems = [
  {
    id: "1",
    title: "Erkek Alaska Fermuar Detay Oversize Sweatshir",
    color: "Black",
    size: "M",
    price: "99,99",
    currency: "TL",
    discountPrice: "50,88",
  },
  {
    id: "2",
    title: "Erkek Alaska Fermuar Detay Oversize Sweatshir 2",
    color: "Red",
    size: "S",
    price: "224,00",
    currency: "TL",
    discountPrice: "50,88",
  },
];

const initialState: ICartState = {
  cartItems: initialCartItems,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: any) => {
      state.cartItems = [...state.cartItems, action.cart];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item: ICartItem) => item.id !== itemId
      );
    },
  },
});

export default cartSlice.reducer;
