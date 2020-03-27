import { createAsyncAction, createAction } from "typesafe-actions";
import { Category } from "../../api/categories";
import { AxiosError } from "axios";

// 액션 type
export const GET_CATEGORIES = "CATEGORIEs/GET_CATEGORIES";
export const GET_CATEGORIES_SUCCESS = "CATEGORIES/GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_ERROR = "CATEGORIES/GET_CATEGORIES_ERROR";

export const CREATE_CATEGORY = "CATEGORIES/CREATE_CATEGORY";
export const CREATE_CATEGORY_SUCCESS = "CATEGORIES/CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_ERROR = "CATEGORIES/CREATE_CATEGORY_ERROR";

export const UPDATE_CATEGORY = "CATEGORIES/UPDATE_CATEGORY";
export const UPDATE_CATEGORY_SUCCESS = "CATEGORIES/UPDATE_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_ERROR = "CATEGORIES/UPDATE_CATEGORY_ERROR";

export const MOVE_CATEGORY = "CATEGORIES/MOVE_CATEGORY";
export const MOVE_CATEGORY_SUCCESS = "CATEGORIES/MOVE_CATEGORY_SUCCESS";
export const MOVE_CATEGORY_ERROR = "CATEGORIES/MOVE_CATEGORY_ERROR";

// 액션 생성 함수
export const getCategoriesAsync = createAsyncAction(
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
  // Request, Success, Error 의 action.payload의 타입
)<void, Category[], AxiosError>();

export const createCategoryAsync = createAsyncAction(
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR
)<string, any, AxiosError>();

export const updateCategoryAsync = createAsyncAction(
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_ERROR
)<{ categoryIdx: string | number; categoryName: string; }, any, AxiosError>();

export const moveCategoryAsync = createAsyncAction(
  MOVE_CATEGORY,
  MOVE_CATEGORY_SUCCESS,
  MOVE_CATEGORY_ERROR
)<{ destIdx: number | string; sequence: number | string; targetIdx: number | string; }, any, AxiosError>();




export const SELECT_CATEGORY = "CATEGORIES/SELECT_CATEGORY";

export const selectCategoryAsync = createAction(SELECT_CATEGORY)<string | number>();
