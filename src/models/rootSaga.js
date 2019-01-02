import { all } from 'redux-saga/effects'
import { watchForm } from './common/form'

export default function* rootSaga() {
  yield all([watchForm()])
}
