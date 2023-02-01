import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IAddress } from "../../types";
import { IUserState } from "../../types/reduxStoreTypes";
import {
  setLocal,
  removeLocal,
  LOCAL_STORAGE_SELECTORS,
} from "../../utils/localStorage";

const initialUser: IUser | null = null;

const initialState: IUserState = {
  user: initialUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      const user = action.payload ? { ...state.user, ...action.payload } : null;
      state.user = user;
      if (user) {
        setLocal<IUser>(LOCAL_STORAGE_SELECTORS.user, user);
      } else {
        removeLocal(LOCAL_STORAGE_SELECTORS.user);
      }
    },
    setAddress: (state, action: PayloadAction<IAddress | null>) => {
      if (!state.user || !action.payload) return;
      state.user.addresses = [...state.user.addresses, action.payload];
      setLocal<IUser>(LOCAL_STORAGE_SELECTORS.user, state.user);
    },

    deleteAddress: (state, action: PayloadAction<string>) => {
      if (!state.user || !action.payload) return;
      if (state.user.addresses.length < 1) return;
      state.user.addresses = state.user.addresses.filter(
        (address) => address.addressId === action.payload
      );
    },
  },
});

export const { setUser, setAddress, deleteAddress } = userSlice.actions;

export default userSlice.reducer;
