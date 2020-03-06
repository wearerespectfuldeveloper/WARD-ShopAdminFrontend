import { createReducer } from "typesafe-actions";
// import { Product } from "../../api/produts";
import { ProductState, ProductAction } from "./types";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS
} from "./actions";

// 전체 상품 리스트의
const initialState: ProductState = {
  products: {
    loading: false,
    error: null,
    data: [],
  },
  selectedProduct: {
    idx: 0,
    name: "상품을 선택해주세요",
    description: "상품을 선택해주세요"
  }
  // 분리해야겠다. 그냥 퍼즐 맞추기라고 생각하자. 안 그러면 정말 재미없을 듯
};

const product = createReducer<ProductState, ProductAction>(initialState, {
  [GET_PRODUCTS]: state => ({
    ...state,
    products: {
      loading: true,
      error: null,
      data: [],
    }
  }),
  [GET_PRODUCTS_SUCCESS]: (state, action) => ({
    ...state,
    products: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_PRODUCTS_ERROR]: (state, action) => ({
    ...state,
    products: {
      loading: false,
      error: action.payload,
      data: []
    }
  }),
  [CREATE_PRODUCT]: (state, action) => ({
    ...state
  }),
  [CREATE_PRODUCT_SUCCESS]: (state, action) => {
    const processed = { ...state };
    processed.products.data.push(action.payload);
    return {
      ...processed
    };
  },
  [CREATE_PRODUCT_ERROR]: (state, action) => ({
    ...state
  }),
  [UPDATE_PRODUCT]: (state, action) => ({
    ...state
  }),
  [UPDATE_PRODUCT_SUCCESS]: (state, action) => ({
    ...state
  }),
  [UPDATE_PRODUCT_ERROR]: (state, action) => ({
    ...state
  }),
  [DELETE_PRODUCT]: (state, action) => ({
    ...state
  }),
  [DELETE_PRODUCT_SUCCESS]: (state, action) => ({
    ...state
  }),
  [DELETE_PRODUCT_ERROR]: (state, action) => ({
    ...state
  })
});
