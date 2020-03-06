import * as actions from './actions';
import { ActionType } from "typesafe-actions";
import { Product } from "../../api/produts";

export type ProductState = {
  products: {
    loading: boolean;
    error: Error | null;
    all: Product[];
    selected: Product | null;
  }
};

export type ProductAction = ActionType<typeof actions>;