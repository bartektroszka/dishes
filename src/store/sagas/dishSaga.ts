import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { dishActions } from "../slices/dishSlices";
import { PostDishRequest } from "../types";
import { postDish } from "../services/dishService";
function* postDishWorker(action: PayloadAction<PostDishRequest>) {
  try {
    const response: AxiosResponse = yield call(postDish, action.payload);
    switch (response.status) {
      case 200: {
        yield put(dishActions.postDishSuccess());
        break;
      }
      default: {
        yield put(dishActions.postDishError());
      }
    }
  } catch (error) {
    yield put(dishActions.postDishError());
  }
}

export function* dishSaga() {
  yield takeEvery(dishActions.postDishRequest.type, postDishWorker);
}
