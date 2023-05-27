import { legacy_createStore, applyMiddleware,combineReducers } from "redux";
// import {rootReducer  as appreducer} from "./appRedux/reducer";
import {reducer as authreducer} from "./authRedux/reducer"
import thunk from "redux-thunk"
const rootreducer=combineReducers({authreducer})
// const customMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   return next(action);
// };
export const store = legacy_createStore(
  rootreducer,(applyMiddleware(thunk))
);

