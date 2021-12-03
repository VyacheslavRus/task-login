import { createAction } from "@reduxjs/toolkit";

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const logOut = createAction("auth/logOut");
