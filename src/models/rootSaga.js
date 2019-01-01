import { all } from 'redux-saga/effects';
import { watchExample } from '../pages/Example/model';

export default function* rootSaga() {
  yield all([watchExample()]);
}
