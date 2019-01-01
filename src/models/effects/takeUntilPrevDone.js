import { takeEvery } from 'redux-saga/effects';

function* waitUntilPrevDone(saga, ...args) {
  try {
    yield* saga(...args);
  } catch (e) {
    console.error('API Error:', e);
  }
}

/**
 * Take an action until previous done.
 * @param {Number} ms Time-out
 * @param {any} pattern Saga pattern
 * @param {function*} saga
 * @param  {...any} args
 */
export function takeUntilPrevDone(ms, pattern, saga, ...args) {
  let isPrevDone = true;
  let prevDate = Date.now();
  return takeEvery(
    pattern,
    function*(...args) {
      if (isPrevDone || (ms > 0 && Date.now() - prevDate >= ms)) {
        isPrevDone = false;
        prevDate = Date.now();
        yield* waitUntilPrevDone(saga, ...args);
        isPrevDone = true;
      } else return;
    },
    ...args
  );
}
