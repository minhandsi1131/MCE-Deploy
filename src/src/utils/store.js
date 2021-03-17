import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(preloadedState = {}) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      sagaMiddleware,
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ],
    preloadedState,
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }
  sagaMiddleware.run(rootSaga);

  return store;
}
