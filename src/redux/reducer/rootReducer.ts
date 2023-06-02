import { combineReducers } from "redux";

import { Reducer } from "react";
import cartReducer from "./cartReducer";
import postReducer from "./postReducer";
// import { RootState } from "./types/types";

const rootReducer = combineReducers({
  cart: cartReducer,
  posts: postReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
