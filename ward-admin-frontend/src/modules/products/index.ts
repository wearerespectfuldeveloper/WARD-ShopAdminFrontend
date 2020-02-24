import { createAction, ActionType, createReducer } from "typesafe-actions";

// 액션 type
const GET_PRODUCTS = "products/GET_PRODUCTS";
const CREATE_PRODUCT = "products/CREATE_PRODUCT";
const UPDATE_PRODUCT = "products/UPDATE_PRODUCT";
const DELETE_PRODUCT = "products/DELETE_PRODUCT";

// 액션 생성 함수

export const getProducts = createAction(GET_PRODUCTS)();

export const createProduct = createAction(CREATE_PRODUCT)<Product>();

export const updateProduct = createAction(UPDATE_PRODUCT)<Product>();

export const deleteProduct = createAction(DELETE_PRODUCT)<number>();

// export const getProducts = () => ({
//   type: GET_PRODUCTS
// });

// export const createProduct = (product: Product) => ({
//   type: CREATE_PRODUCT,
//   payload: product
// });

// export const updateProduct = (product: Product) => ({
//   type: UPDATE_PRODUCT,
//   payload: product
// });

// export const deleteProduct = (idx: number) => ({
//   type: DELETE_PRODUCT,
//   payload: idx
// });

// 액션들의 타입스크립트 타입 준비
const actions = { getProducts, createProduct, updateProduct, deleteProduct };

type ProductsAction = ActionType<typeof actions>;

// type ProductsAction =
//   | ReturnType<typeof getProducts>
//   | ReturnType<typeof createProduct>
//   | ReturnType<typeof updateProduct>
//   | ReturnType<typeof deleteProduct>;

// 상태를 위한 타입 선언 - 컴포넌트에서 불러와서 사용할 것이기 때문에 내보낸다.
export type Product = {
  idx: number;
  name: string;
  price: number | string;
  description: string;
  imageResource: string;
  amount: number | string;
  categoryName: string;
  createdDate: string;
};

type ProductsState = Product[];

// 초기값 설정
const initialState: ProductsState = [
  {
    idx: 1,
    name: "준비중입니다",
    price: 0,
    description: "잠시만 기다려주십시오",
    imageResource:
      "https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
    amount: 22,
    categoryName: "티셔츠",
    createdDate: "2020-12-12"
  }
];

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
