import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../setupStore";
import { DishState, PostDishRequest } from "../types";

const initialState = {
  postDishError: false,
  postDishSuccess: false,
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    postDishRequest: (
      state: DishState,
      action: PayloadAction<PostDishRequest>
    ) => {},
    postDishSuccess: (state: DishState) => {
      state.postDishError = false;
      state.postDishSuccess = true;
    },
    postDishError: (state: DishState) => {
      state.postDishError = true;
      state.postDishSuccess = false;
    },
  },
});

export const dishReducer = dishSlice.reducer;

const selectSelf = (state: RootState) => state;

const selectPostDishSuccess = createSelector(
  selectSelf,
  (state) => state.dish.postDishSuccess
);

const selectPostDishError = createSelector(
  selectSelf,
  (state) => state.dish.postDishError
);

export const dishActions = dishSlice.actions;

export const dishSelectors = {
  selectPostDishSuccess,
  selectPostDishError,
};
