import { ICartItem } from "./productTypes";

export interface ICartState {
  cartItems: Array<ICartItem>;
  amount: number;
}

export interface RootState {
  cart: ICartState;
}
