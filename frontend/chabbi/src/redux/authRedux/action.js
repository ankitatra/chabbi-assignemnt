import * as types from "./actiontype";
import axios from "axios";
export const login = (payload) => (dispatch) => {
    console.log("payload",payload.data)
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("http://localhost:8000/user/register", payload.data)
    .then((r) => {
        console.log("R",r.data)
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload:r.data });
    })
    .catch((e) => {
        console.log(e)
      dispatch({ type: types.USER_LOGIN_ERROR });
    });
};
