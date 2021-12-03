import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { loginError, loginRequest, loginSuccess, logOut } from "./authActions";

const tokenReducer = createReducer(
  {},
  {
    [loginSuccess]: (_, { payload }) => payload,
    [logOut]: () => null,
  }
);

const loaderReducer = createReducer(false, {
  [loginRequest]: (state) => !state,
  [loginSuccess]: (state) => !state,
  [loginError]: (state) => !state,
  [logOut]: () => false,
});

const errorReducer = createReducer("", {
  [loginError]: (_, { payload }) => payload,
  [loginSuccess]: () => "",
  [logOut]: () => "",
});

const authReducer = combineReducers({
  tokens: tokenReducer,
  isLoading: loaderReducer,
  error: errorReducer,
});

export default authReducer;
