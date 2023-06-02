import * as types from "../actionType";
import { PostState, PostActionTypes } from "./types/types";

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  total: 0,
  data: [],
};

const postReducer = (state = initialState, action: PostActionTypes): PostState => {
  switch (action.type) {
    case types.FETCH_POST_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case types.FETCH_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
