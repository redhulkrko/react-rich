import { combineReducers } from "redux";
import errors from "./errors/errors";
import session from "./session/session";
// import post from "./post/post";

export default combineReducers({
  // post,
  session,
  errors
});