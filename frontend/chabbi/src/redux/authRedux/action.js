import * as types from "./actiontype";
import axios from "axios";

export const login = (payload) => (dispatch) => {
    console.log("payload",payload.data)
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("https://fair-erin-woodpecker-yoke.cyclic.app/user/register", payload.data)
    .then((r) => {
        console.log("R",r.data._id)
        localStorage.setItem("userid",r.data._id)
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload:r.data });
    })
    .catch((e) => {
        console.log(e)
      dispatch({ type: types.USER_LOGIN_ERROR });
    });
};

export const fetchData = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://fair-erin-woodpecker-yoke.cyclic.app/user/data/${localStorage.getItem("userid")}`);
        const data = response.data;
        dispatch({ type: types.USER_DATA_SUCCESS, payload: data });
      
      } catch (error) {
        console.error(error);
        dispatch({ type: types.USER_DATA_ERROR, payload: error.message });
       
      }
    };
  };
