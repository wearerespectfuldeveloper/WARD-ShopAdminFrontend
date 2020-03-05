import { createReducer } from "typesafe-actions";
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

const initialState = {
  loading: false,
  error: null,
  allProducts: [],
  selectedProduct: {}
};

const product = createReducer<ProductState, ProductAction>(initialState, {
  [GET_PRODUCTS]: state => ({
    ...state,
    
  })
});
