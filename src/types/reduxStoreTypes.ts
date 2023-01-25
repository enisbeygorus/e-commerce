import { ICartItem } from "./productTypes";
import { IUser } from "./userTypes";

export interface ICartState {
  cartItems: Array<ICartItem>;
  amount: number;
}

export interface IUserState {
  user: IUser | null;
}

export interface RootState {
  cart: ICartState;
  user: IUserState;
}
