import { useSelector } from 'react-redux';
import { RootState } from '../modules';

const useProducts = () => {
  const products = useSelector((state: RootState) => state.products);
  return products;
}

export default useProducts;