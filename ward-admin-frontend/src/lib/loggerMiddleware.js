const loggerMiddleware = store => next => action => {
  // next 파라미터는 함수 형태이며, store.dispatch와 비슷한 역할을 합니다. next(action) 을 호출하면 그 다음에 처리해야할 미들웨어에게 액션을 넘겨주고, 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨줍니다. 미들웨어 내부에서 store.dispatch 를 사용하면 첫번째 미들웨어부터 다시 처리하게 됩니다. 만일 미들웨어에서 next를 사용하지 않는다면 액션이 리듀서에게 전달되지 않으므로, 액션이 무시됩니다.

  // store는 리덕스 스토어 인스턴스를, action은 디스패치된 액션을 가리킵니다. 
  console.group(action && action.type); // action type으로 log를 그룹화함
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달(액션을)
  console.log('다음 상태', store.getState());
  console.groupEnd();
}

export default loggerMiddleware;