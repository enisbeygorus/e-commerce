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
      state.user.adresses = [...state.user.adresses, action.payload];
      setLocal<IUser>(LOCAL_STORAGE_SELECTORS.user, state.user);
    },
  },
});

export const { setUser, setAddress } = userSlice.actions;

export default userSlice.reducer;
