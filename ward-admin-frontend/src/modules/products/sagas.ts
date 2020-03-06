import { getProductsAsync, GET_PRODUCTS } from './actions'
import { Product, ProductObj, getProducts } from '../../api/produts';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getProductsSaga(action: ReturnType<typeof getProductsAsync.request>) {
  try {
    const products: Product[] = yield call(getProducts, action.payload);
    yield put(getProductsAsync.success(products));
  } catch (e) {
    yield put(getProductsAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
}
