import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getCategoriesAsync } from '../modules/categories/actions'
import { RootState } from '../modules';

const useCategories = () => {
  const { categories, selectedCategory } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  const loadCategories = useCallback(() => dispatch(getCategoriesAsync.request()), [dispatch]);

  return {
    categories,
    selectedCategory,
    loadCategories,
  };
}

export default useCategories;