import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getCategoriesAsync } from '../modules/categories/actions'
import { RootState } from '../modules';

const useCategories = () => {
  const { products, selectedProduct } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const onClickCategoryItem = useCallback((payload) => dispatch(getCategoriesAsync.request(payload)), [dispatch]);

  return {
    products,
    selectedProduct,
    onClickCategoryItem,
  };
}

export default useCategories;