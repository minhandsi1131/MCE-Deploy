import { combineReducers } from "redux";
import auth from "../providers/AuthProviders/slice";
const rootReducer = combineReducers({
  auth,
});
export default rootReducer;
