import {
  getProductsAsync,
  createProductAsync,
  updateProductAsync,
  deleteProductAsync,
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "./actions";
import { Product, getProducts, createProduct, updateProduct, deleteProduct } from "../../api/products";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* getProductsSaga(action: ReturnType<typeof getProductsAsync.request>) {
  try {
    const products: Product[] = yield call(getProducts, action.payload);
    yield put(getProductsAsync.success(products));
  } catch (e) {
    yield put(getProductsAsync.failure(e));
  }
}

function* createProductSaga(
  action: ReturnType<typeof createProductAsync.request>
) {
  try {
    const response = yield call(createProduct, action.payload);
    yield put(createProductAsync.success(response));
  } catch (e) {
    yield put(createProductAsync.failure(e));
  }
}

function* updateProductSaga(
  action: ReturnType<typeof updateProductAsync.request>
) {
  try {
    const response = yield call(updateProduct, action.payload);
    yield put(updateProductAsync.success(response));
  } catch (e) {
    yield put(updateProductAsync.failure(e));
  }
}

function* deleteProductSaga(
  action: ReturnType<typeof deleteProductAsync.request>
) {
  try {
    const response = yield call(deleteProduct, action.payload);
    yield put(deleteProductAsync.success(response));
  } catch (e) {
    yield put(deleteProductAsync.failure(e));
  }
}

export function* productsSaga() {
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
  yield takeLatest(CREATE_PRODUCT, createProductSaga);
  yield takeLatest(UPDATE_PRODUCT, updateProductSaga);
  yield takeLatest(DELETE_PRODUCT, deleteProductSaga);
}
