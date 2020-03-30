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
  DELETE_PRODUCT_SUCCESS,
  SELECT_PRODUCT
} from "./actions";

// 전체 상품 리스트의
const initialState: ProductState = {
  products: {
    loading: false,
    error: null,
    data: []
  },
  selectedProduct: {
    idx: 0,
    name: "상품을 선택해주세요",
    description: "상품을 선택해주세요",
    createdDate: "상품을 선택해주세요"
  }
};

const product = createReducer<ProductState, ProductAction>(initialState, {
  [GET_PRODUCTS]: state => ({
    ...state,
    products: {
      ...state.products,
      loading: true,
      error: null
    }
  }),
  [GET_PRODUCTS_SUCCESS]: (state, action) => {
    const processed = { ...state };
    const productList = processed.products.data;
    for (let i of action.payload) {
      const targetIndex = productList.findIndex(x => x.idx === i.idx);
      if (targetIndex) {
        productList.splice(targetIndex, 1, i);
      } else {
        productList.push(i);
      }
    }
    return {
      ...processed,
      products: {
        ...state.products,
        loading: false,
        error: null
      }
    };
  },
  [GET_PRODUCTS_ERROR]: (state, action) => ({
    ...state,
    products: {
      ...state.products,
      loading: false,
      error: action.payload
    }
  }),
  [CREATE_PRODUCT]: (state, action) => {
    return {
      ...state,
      products: {
        ...state.products,
        loading: true
      }
    };
  },
  [CREATE_PRODUCT_SUCCESS]: (state, action) => {
    const processed = { ...state };
    processed.products.data.push(action.payload);
    return {
      ...processed,
      products: {
        ...processed.products,
        loading: false
      }
    };
  },
  [CREATE_PRODUCT_ERROR]: (state, action) => {
    return {
      ...state,
      products: {
        ...state.products,
        loading: false,
        error: action.payload
      }
    };
  },
  [UPDATE_PRODUCT]: (state, action) => {
    return {
      ...state,
      products: {
        ...state.products,
        loading: true
      }
    };
  },
  [UPDATE_PRODUCT_SUCCESS]: (state, action) => {
    const processed = { ...state };
    const productList = processed.products.data;
    const targetIndex = productList.findIndex(x => x.idx == action.payload.idx);
    productList.splice(targetIndex, 1, action.payload);

    return {
      ...state,
      products: {
        ...state.products,
        loading: false
      }
    };
  },
  [UPDATE_PRODUCT_ERROR]: (state, action) => ({
    ...state,
    products: {
      ...state.products,
      loading: false,
      error: action.payload
    }
  }),
  [DELETE_PRODUCT]: (state, action) => ({
    ...state,
    products: {
      ...state.products,
      loading: true
    }
  }),
  [DELETE_PRODUCT_SUCCESS]: (state, action) => {
    const processed = { ...state };
    const productList = processed.products.data;
    const targetIndex = productList.findIndex(x => x.idx == action.payload);
    productList.splice(targetIndex, 1);

    return {
      ...processed,
      products: {
        ...processed.products,
        loading: false
      }
    };
  },
  [DELETE_PRODUCT_ERROR]: (state, action) => ({
    ...state,
    products: {
      ...state.products,
      loading: false,
      error: action.payload
    }
  }),
  [SELECT_PRODUCT]: (state, action) => {
    const productList = state.products.data;
    
    const target = productList.find(x => x.idx == action.payload);

    return {
      ...state,
      selectedProduct: target
    }
  }
});

export default product;
