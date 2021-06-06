import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import { dishReducer } from "./slices/dishSlices";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { dish: dishReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
