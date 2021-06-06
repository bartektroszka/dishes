import { all } from "redux-saga/effects";
import { dishSaga } from "./dishSaga";

export function* rootSaga() {
  yield all([dishSaga()]);
}
