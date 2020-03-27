import { createReducer } from "typesafe-actions";
import { CategoryState, CategoryAction } from "./types";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS,
  CREATE_CATEGORY,
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_ERROR,
  UPDATE_CATEGORY_SUCCESS,
  MOVE_CATEGORY,
  MOVE_CATEGORY_ERROR,
  MOVE_CATEGORY_SUCCESS,
  SELECT_CATEGORY
} from "./actions";

// 전체 상품 리스트의
const initialState: CategoryState = {
  categories: {
    loading: false,
    error: null,
    data: []
  },
  selectedCategory: null
  // 분리해야겠다. 그냥 퍼즐 맞추기라고 생각하자. 안 그러면 정말 재미없을 듯
};

const categories = createReducer<CategoryState, CategoryAction>(initialState, {
  [GET_CATEGORIES]: state => ({
    ...state,
    categories: {
      loading: true,
      error: null,
      data: []
    }
  }),
  [GET_CATEGORIES_SUCCESS]: (state, action) => ({
    ...state,
    categories: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_CATEGORIES_ERROR]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: false,
      error: action.payload
    }
  }),
  [CREATE_CATEGORY]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: true
    }
  }),
  [CREATE_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: false
    }
  }),
  [CREATE_CATEGORY_ERROR]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: false,
      error: action.payload
    }
  }),
  [UPDATE_CATEGORY]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: true
    }
  }),
  [UPDATE_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: false
    }
  }),
  [UPDATE_CATEGORY_ERROR]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: false,
      error: action.payload
    }
  }),
  [MOVE_CATEGORY]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: true
    }
  }),
  [MOVE_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: false
    }
  }),
  [MOVE_CATEGORY_ERROR]: (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      loading: false,
      error: action.payload
    }
  }),
  [SELECT_CATEGORY]: (state, action) => {
    const target = state.categories.data.find(x => x.idx === action.payload)

    return {
      ...state,
      selectedCategory: target
    }
    
  }
});

export default categories;
