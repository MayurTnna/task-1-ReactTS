import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import {
  RootState,
  CartActionTypes,
  PostActionTypes,
} from "../reducer/types/types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import rootReducer from "../reducer/rootReducer";

const store: Store<RootState, CartActionTypes | PostActionTypes> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export { store };

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
