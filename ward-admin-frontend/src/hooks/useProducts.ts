import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getProductsAsync } from '../modules/products/actions'
import { RootState } from '../modules';

const useProducts = () => {
  const { products, selectedProduct } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const onPaginate = useCallback((payload: { categoryIdx: string | number, createdDate: string }) => dispatch(getProductsAsync.request(payload)), [dispatch]);

  return {
    products,
    selectedProduct,
    onPaginate,
  };
}

export default useProducts;