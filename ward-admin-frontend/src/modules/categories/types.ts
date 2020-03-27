import * as actions from './actions';
import { ActionType } from "typesafe-actions";
import { Category } from "../../api/categories";

export type CategoryState = {
  categories: {
    loading: boolean;
    error: Error | null;
    data: Category[];
  },
  selectedCategory: Category | null | undefined;
};

export type CategoryAction = ActionType<typeof actions>;