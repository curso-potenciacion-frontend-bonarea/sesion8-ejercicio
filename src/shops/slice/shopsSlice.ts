import { ShopsState } from "../types";

import { Shop } from "@/shops/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialShopsState: ShopsState = {
  list: [],
};

const shopsSlice = createSlice({
  name: "shops",
  initialState: initialShopsState,
  reducers: {
    loadShops: (shopsState, action: PayloadAction<Shop[]>): ShopsState => ({
      ...shopsState,
      list: action.payload,
    }),
  },
});

export const { loadShops } = shopsSlice.actions;
export const shopsReducer = shopsSlice.reducer;
