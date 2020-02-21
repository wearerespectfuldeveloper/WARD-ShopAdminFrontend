// 1. 액션 type 선언 - 값을 타입으로써 설정
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

// 2. 액션 함수 선언 - 액션 객체를 반환
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});

// 3. 액션 객체들에 대한 type 준비 - Counter 라는 컴포넌트에서는 이 타입의 액션만이 일어나야 함
// ReturnType 은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 4. 상태의 타입과 상태의 초깃값 선언하기
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

// 5. 리듀서 작성

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;

