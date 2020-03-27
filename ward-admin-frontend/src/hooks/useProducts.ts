import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  getProductsAsync,
  createProductAsync,
  updateProductAsync,
  deleteProductAsync
} from "../modules/products/actions";
import { RootState } from "../modules";
import { Product } from "../api/products";

const useProducts = () => {
  const { products, selectedProduct } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  const loadProducts = useCallback(
    (payload: { categoryIdx: string | number; createdDate: string }) => {
      return dispatch(getProductsAsync.request(payload));
    },
    [dispatch]
  );

  const createProducts = useCallback(
    (payload: Product) => {
      return dispatch(createProductAsync.request(payload));
    },
    [dispatch]
  );

  const updateProduct = useCallback(
    (payload: Product) => {
      return dispatch(updateProductAsync.request(payload));
    },
    [dispatch]
  );

  const deleteProduct = useCallback(
    (payload: string | number) => {
      return dispatch(deleteProductAsync.request(payload));
    },
    [dispatch]
  );

  return {
    products,
    selectedProduct,
    loadProducts,
    createProducts,
    updateProduct,
    deleteProduct
  };
};

export default useProducts;
