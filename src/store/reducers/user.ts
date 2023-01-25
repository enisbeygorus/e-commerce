import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { IUserState } from "../../types/reduxStoreTypes";
import { setLocal, LOCAL_STORAGE_SELECTORS } from "../../utils/localStorage";

const initialUser: IUser | null = null;

const initialState: IUserState = {
  user: initialUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      const user = { ...state.user, ...action.payload };
      state.user = user;

      setLocal<IUser>(LOCAL_STORAGE_SELECTORS.user, user);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
