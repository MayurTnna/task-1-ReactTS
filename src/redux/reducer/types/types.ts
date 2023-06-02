import * as types from "../../actionType";
export interface RootState {
  cart: CartState;
  posts: PostState;

  // Add other state slices as needed
}
export interface CartItem {
  id: number;
  name: string;
  price: number;
  total: number;
}

export interface CartState {
  total: number;
  data: CartItem[];
  total_price: number;
}

export interface AddItemToCartAction {
  type: typeof types.ADD_ITEM_TO_CART;
  payload: CartItem;
}

export interface RemoveItemFromCartAction {
  type: typeof types.REMOVE_ITEM_FROM_CART;
  payload: CartItem;
}

export interface GetProductTotalAction {
  type: typeof types.GET_PRODUCT_TOTAL;
  payload: CartItem;
}

export type CartActionTypes =
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | GetProductTotalAction;

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: any;
  total: number;
  data: any[];
}

export interface FetchPostStartAction {
  type: typeof types.FETCH_POST_START;
  payload: CartItem;
}

export interface FetchPostSuccessAction {
  type: typeof types.FETCH_POST_SUCCESS;
  payload: Post[];
}

export interface FetchPostFailAction {
  type: typeof types.FETCH_POST_FAIL;
  payload: any;
}

export type PostActionTypes =
  | FetchPostStartAction
  | FetchPostSuccessAction
  | FetchPostFailAction;
