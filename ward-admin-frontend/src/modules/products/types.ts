import * as actions from './actions';
import { ActionType } from "typesafe-actions";
import { Product } from "../../api/produts";

export type ProductState = {
  products: {
    loading: boolean;
    error: Error | null;
    data: Product[];
  },
  selectedProduct: Product | null;
};

export type ProductAction = ActionType<typeof actions>;