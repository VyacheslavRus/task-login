import axios from "axios";
import { toast } from "react-toastify";
import { loginError, loginRequest, loginSuccess } from "./authActions";

export const loginOperation = (user) => async (dispatch, getState) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(
      `https://site.ualegion.com/api/v1/security/login`,
      { ...user }
    );
    dispatch(loginSuccess(data.token));
    toast.success("Welcome");
  } catch (error) {
    dispatch(loginError(error.message));
    toast.error("Invalid email or password");
  }
};
