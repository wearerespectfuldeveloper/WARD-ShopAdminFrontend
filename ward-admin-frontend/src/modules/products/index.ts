import { createAsyncAction, ActionType, createReducer } from "typesafe-actions";
import { Product } from "../../api/produts";
import { AxiosError } from "axios";

// 액션 type
const GET_PRODUCTS = "products/GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "products/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "products/GET_PRODUCTS_ERROR";

const CREATE_PRODUCT = "products/CREATE_PRODUCT";
const CREATE_PRODUCT_SUCCESS = "products/CREATE_PRODUCT_SUCCESS";
const CREATE_PRODUCT_ERROR = "products/CREATE_PRODUCT_ERROR";

const UPDATE_PRODUCT = "products/UPDATE_PRODUCT";
const UPDATE_PRODUCT_SUCCESS = "products/UPDATE_PRODUCT_SUCCESS";
const UPDATE_PRODUCT_ERROR = "products/UPDATE_PRODUCT_ERROR";

const DELETE_PRODUCT = "products/DELETE_PRODUCT";
const DELETE_PRODUCT_SUCCESS = "products/DELETE_PRODUCT_SUCCESS";
const DELETE_PRODUCT_ERROR = "products/DELETE_PRODUCT_ERROR";

// 액션 생성 함수
export const getProducts = createAsyncAction(
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
)<string, Product[], AxiosError>();

export const createProduct = createAsyncAction(
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR
)<string, unknown, AxiosError>();

export const updateProduct = createAsyncAction(
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR
)<string, unknown, AxiosError>();

export const deleteProduct = createAsyncAction(
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR
)<string, unknown, AxiosError>();

const actions = { getProducts, createProduct, updateProduct, deleteProduct };

type ProductState = {
  loading: boolean;
  error: Error | null;
  allProducts: Product[] | [];
  selectedProduct: Product | {};
};

type ProductAction = ActionType<typeof actions>;

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

// type ProductsAction =
//   | ReturnType<typeof getProducts>
//   | ReturnType<typeof createProduct>
//   | ReturnType<typeof updateProduct>
//   | ReturnType<typeof deleteProduct>;

// 리듀서 생성 - 모두 작업 이후 전체 상품을 담을 배열 상태를 반환합니다.

//createReducer 를 사용 할 때에는 Generic 으로 상태의 타입과 액션들의 타입을 넣어주어야 합니다. createReducer에서는 이를 사용하여 내부에 각각 액션들을 위하여 구현할 함수에서 타입을 추론합니다.

const products = createReducer<ProductsState, ProductsAction>(initialState, {
  [GET_PRODUCTS]: state => state,
  [CREATE_PRODUCT]: (state, action) => {
    const newProduct = action.payload;
    state.push(newProduct);
    return state;
  },
  [UPDATE_PRODUCT]: (state, action) => {
    const updatedProduct = action.payload;
    const updateTargetIndex = state.findIndex(
      x => x.idx === updatedProduct.idx
    );
    state.splice(updateTargetIndex, 1, updatedProduct);
    return state;
  },
  [DELETE_PRODUCT]: (state, action) => {
    const deleteTargetIdx = action.payload;
    const deleteTargetIndex = state.findIndex(x => x.idx === deleteTargetIdx);
    state.splice(deleteTargetIndex, 1);
    return state;
  }
});

// const products = (
//   state: ProductsState = initialState,
//   action: ProductsAction
// ): Product[] => {
//   switch (action.type) {
//     case GET_PRODUCTS:
//       return state;
//     case CREATE_PRODUCT:
//       const newProduct = action.payload;
//       state.push(newProduct);
//       return state;
//     case UPDATE_PRODUCT:
//       const updatedProduct = action.payload;
//       const updateTargetIndex = state.findIndex(x => x.idx === updatedProduct.idx);
//       state.splice(updateTargetIndex, 1, updatedProduct);
//       return state;
//     case DELETE_PRODUCT:
//       const deleteTargetIdx = action.payload;
//       const deleteTargetIndex = state.findIndex(x => x.idx === deleteTargetIdx);
//       state.splice(deleteTargetIndex, 1);
//       return state;
//     default:
//       return state;
//   }
// };

export default products;
