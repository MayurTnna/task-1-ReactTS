import * as types from "../actionType";
import axios from "axios";
import { Dispatch } from "redux";

export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface FetchPostStartAction {
  type: typeof types.FETCH_POST_START;
}

export interface FetchPostSuccessAction {
  type: typeof types.FETCH_POST_SUCCESS;
  payload: Post[];
}

export interface FetchPostFailAction {
  type: typeof types.FETCH_POST_FAIL;
  payload: string;
}

export const fetchPostStart = (): FetchPostStartAction => ({
  type: types.FETCH_POST_START,
});

export const fetchPostSuccess = (posts: Post[]): FetchPostSuccessAction => ({
  type: types.FETCH_POST_SUCCESS,
  payload: posts,
});

export const fetchPostFail = (error: string): FetchPostFailAction => ({
  type: types.FETCH_POST_FAIL,
  payload: error,
});

export const addItemToCart = (items: any) => ({
  type: types.ADD_ITEM_TO_CART,
  payload: items,
});

export const removeItemFromCart = (items: any) => ({
  type: types.REMOVE_ITEM_FROM_CART,
  payload: items,
});

export const getProductTotal = (total_price: number) => ({
  type: types.GET_PRODUCT_TOTAL,
  payload: total_price,
});

export const fetchPost = (skip: number) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPostStart());
    axios
      .get(`https://dummyjson.com/products?limit=8&skip=${skip}`)
      .then((response) => {
        const posts: Post[] = response.data;
        console.log(posts)
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostFail(error.message));
      });
  };
};
