import * as types from "./actiontype";
const initstate = {
  isAuth: false,
  user:{},
  isAuthLoding: false,
  isAuthError: false,
};

export const reducer = (state = initstate, action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoding: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthLoding:false,
        user:payload,
        isAuth: true,
       
      };
   
    case types.USER_LOGIN_ERROR:
      return {
        ...state,
        isAuth:false,
        isAuthLoding:false,
        isAuthError: true,
      };

    default:
      return state;
  }
};
