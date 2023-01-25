import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { IUserState } from "../../types/reduxStoreTypes";

const initialUser: IUser | null = null;

const initialState: IUserState = {
  user: initialUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
