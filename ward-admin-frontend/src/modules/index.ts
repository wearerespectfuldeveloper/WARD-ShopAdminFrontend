import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import github from './github/reducer';
import { githubSaga } from './github';
import { productsSaga } from './products';
import { categoriesSaga } from './categories';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  github,
  categories,
  products,
});

export default rootReducer;

// 꼭 RootState 타입을 만들어서 내보내주어야 한다. 이 타입은 추후 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를 사용할 때 필요하다
export type RootState = ReturnType<typeof rootReducer>;

// 루트 사가 만들어서 내보내기
export function* rootSaga() {
  yield all([githubSaga(), productsSaga(), categoriesSaga()]);
}