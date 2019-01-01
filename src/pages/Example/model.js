import { call, put } from 'redux-saga/effects'
import { takeLatestLoading } from '../../models/effects/takeLatestLoading'

const getData = () => {}

// Action creators
export function fetchExample(params) {
  return {
    type: 'FETCH_EXAMPLE',
    params,
  }
}

export function setExample(data) {
  return {
    type: 'SET_EXAMPLE',
    data,
  }
}

// Reducers
const stateExample = {
  data: 0,
}

export function example(state = stateExample, action) {
  switch (action.type) {
    case 'SET_EXAMPLE':
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

// Sagas
function* fetchData(action) {
  const responseData = yield call(getData, action.params)
  if (responseData) {
    yield put(setExample(responseData))
  }
}

export function* watchExample() {
  yield takeLatestLoading('FETCH_EXAMPLE', fetchData)
}
