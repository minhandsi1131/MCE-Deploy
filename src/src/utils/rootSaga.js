import { all } from "redux-saga/effects";
import { auth } from "../providers/AuthProviders/saga";
export default function* rootSaga() {
  yield all([...auth]);
}
