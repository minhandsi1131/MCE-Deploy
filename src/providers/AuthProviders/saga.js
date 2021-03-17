import { call, takeLatest } from "redux-saga/effects";
import request from "../../utils/request";
import { testRequest } from "./slice";
export function* helloSaga() {
  try {
    const result = yield call(request, "/rest/session/token");
    console.log(result, "result");
  } catch (error) {
    console.log(error);
  }
}
export const auth = [takeLatest(testRequest.type, helloSaga)];
