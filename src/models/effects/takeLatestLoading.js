import { takeLatest, put, throttle } from 'redux-saga/effects';
import actionCreators from '../actionCreators';

function* autoLoading(saga, ...args) {
  try {
    yield put(actionCreators.toastLoading());
    yield* saga(...args);
    yield put(actionCreators.toastClose());
  } catch (e) {
    console.error('API Error:', e);
    yield put(actionCreators.toastFail('网络数据错误！'));
  }
}

export function takeLatestLoading(pattern, saga, ...args) {
  return takeLatest(
    pattern,
    function*(...args) {
      yield* autoLoading(saga, ...args);
    },
    ...args
  );
}

export function throttleTakeLatestLoading(ms, pattern, saga, ...args) {
  return throttle(
    ms,
    pattern,
    function*(...args) {
      yield* autoLoading(saga, ...args);
    },
    ...args
  );
}
