import { createAsyncAction, ActionType, createReducer, createAction } from "typesafe-actions";
import { Product } from "../../api/products";
import { AxiosError } from "axios";

// 액션 type
export const GET_PRODUCTS = "products/GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "products/GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "products/GET_PRODUCTS_ERROR";

export const CREATE_PRODUCT = "products/CREATE_PRODUCT";
export const CREATE_PRODUCT_SUCCESS = "products/CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_ERROR = "products/CREATE_PRODUCT_ERROR";

export const UPDATE_PRODUCT = "products/UPDATE_PRODUCT";
export const UPDATE_PRODUCT_SUCCESS = "products/UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_ERROR = "products/UPDATE_PRODUCT_ERROR";

export const DELETE_PRODUCT = "products/DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "products/DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "products/DELETE_PRODUCT_ERROR";

// 액션 생성 함수
export const getProductsAsync = createAsyncAction(
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
  // Request, Success, Error 의 action.payload의 타입
)<{ categoryIdx: string | number, createdDate: string }, Product[], AxiosError>();

export const createProductAsync = createAsyncAction(
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR
)<Product, Product, AxiosError>();

export const updateProductAsync = createAsyncAction(
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR
)<Product, Product, AxiosError>();

export const deleteProductAsync = createAsyncAction(
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR
)<string | number, number | string, AxiosError>();







export const SELECT_PRODUCT = "products/SELECT_PRODUCT";

export const selectProductSync = createAction(SELECT_PRODUCT)<string | number>();