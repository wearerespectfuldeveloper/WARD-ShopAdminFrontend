import {
  getCategoriesAsync,
  createCategoryAsync,
  updateCategoryAsync,
  moveCategoryAsync,
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  MOVE_CATEGORY
} from "./actions";
import { Category, getCategories, createCategory, updateCategory, moveCategory } from "../../api/categories";
import { call, put, takeLatest } from "redux-saga/effects";

function* getCategoriesSaga(action: ReturnType<typeof getCategoriesAsync.request>) {
  try {
    const categories: Category[] = yield call(getCategories);
    yield put(getCategoriesAsync.success(categories));
  } catch (e) {
    yield put(getCategoriesAsync.failure(e));
  }
}

function* createCategorySaga(
  action: ReturnType<typeof createCategoryAsync.request>
) {
  try {
    const response = yield call(createCategory, action.payload);
    yield put(createCategoryAsync.success(response));
  } catch (e) {
    yield put(createCategoryAsync.failure(e));
  }
}

function* updateCategorySaga(
  action: ReturnType<typeof updateCategoryAsync.request>
) {
  try {
    const response = yield call(updateCategory, action.payload);
    yield put(updateCategoryAsync.success(response));
  } catch (e) {
    yield put(updateCategoryAsync.failure(e));
  }
}

function* moveCategorySaga(
  action: ReturnType<typeof moveCategoryAsync.request>
) {
  try {
    const response = yield call(moveCategory, action.payload);
    yield put(moveCategoryAsync.success(response));
  } catch (e) {
    yield put(moveCategoryAsync.failure(e));
  }
}

export function* categoriesSaga() {
  yield takeLatest(GET_CATEGORIES, getCategoriesSaga);
  yield takeLatest(CREATE_CATEGORY, createCategorySaga);
  yield takeLatest(UPDATE_CATEGORY, updateCategorySaga);
  yield takeLatest(MOVE_CATEGORY, moveCategorySaga);
}
