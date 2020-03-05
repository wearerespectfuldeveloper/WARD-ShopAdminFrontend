import * as actions from './actions';
import { ActionType } from "typesafe-actions";
import { Product } from "../../api/produts";

type ProductState = {
  loading: boolean;
  error: Error | null;
  allProducts: Product[] | [];
  selectedProduct: Product | {};
};

type ProductAction = ActionType<typeof actions>;