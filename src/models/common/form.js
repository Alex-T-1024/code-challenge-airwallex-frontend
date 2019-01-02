import axios from 'axios'
import { put, takeLatest, select } from 'redux-saga/effects'
import { getItemFromForm, getNewState } from '../../utils/formUtil'
import { closeAllModal, openSuccessModal } from './modal'

// ActionCreators
export function validateFullname(value) {
  return {
    type: 'VALIDATE_FULLNAME',
    value,
  }
}

export function validateEmail(value) {
  return {
    type: 'VALIDATE_EMAIL',
    value,
  }
}

export function validateConfirmationEmail(value) {
  return {
    type: 'VALIDATE_CONFIRMATION_EMAIL',
    value,
  }
}

export function clearForm() {
  return {
    type: 'CLEAR_FORM',
  }
}

export function postFormData() {
  return {
    type: 'POST_FORM_DATA',
  }
}

export function setRequestLoading(payload) {
  return {
    type: 'SET_REQUEST_LOADING',
    payload,
  }
}

export function setResponseData(payload) {
  return {
    type: 'SET_RESPONSE_DATA',
    payload,
  }
}

export function resetResponseData(payload) {
  return {
    type: 'RESET_RESPONSE_DATA',
  }
}

// Reducers
/**
 * stateForm: [
 *  {
 *  rule: 'ACTION',
 *  value: value,
 *  errorMessage: '',
 *  isValid: bool,
 *  },
 *  ...
 * ]
 */
const stateForm = []
export function form(state = stateForm, action) {
  let validater, errorMessage
  switch (action.type) {
    case 'VALIDATE_FULLNAME':
      validater = value => value.length >= 3
      errorMessage = 'Please input at least three characters.'
      return getNewState(state, action, validater, errorMessage)

    case 'VALIDATE_EMAIL':
      validater = value =>
        value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      errorMessage = 'Please input valid email.'
      return getNewState(state, action, validater, errorMessage)

    case 'VALIDATE_CONFIRMATION_EMAIL':
      const emailItem = getItemFromForm(state, 'VALIDATE_EMAIL')
      validater = value => value === emailItem.value
      errorMessage = "Email doesn't match"
      return getNewState(state, action, validater, errorMessage)

    case 'CLEAR_FORM':
      return []

    default:
      return state
  }
}

const stateRequestResult = { isRequesting: false, error: '', isSuccess: false }
export function requestResult(state = stateRequestResult, action) {
  switch (action.type) {
    case 'SET_REQUEST_LOADING':
      return {
        ...state,
        isRequesting: action.payload.isRequesting,
      }
    case 'SET_RESPONSE_DATA':
      return {
        ...state,
        error: action.payload.error,
      }
    case 'RESET_RESPONSE_DATA':
      return {
        ...state,
        ...stateRequestResult,
      }
    default:
      return state
  }
}

// Sagas
function* postFormDataSaga() {
  const form = yield select(state => state.form)
  if (form.every(item => item.isValid)) {
    // Send request
    yield put(setRequestLoading({ isRequesting: true }))
    const res = yield axios.post(
      'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
      {
        name: getItemFromForm(form, 'VALIDATE_FULLNAME'),
        email: getItemFromForm(form, 'VALIDATE_EMAIL'),
      }
    )
    yield put(setRequestLoading({ isRequesting: false }))
    switch (res.status) {
      case 200:
        yield put(closeAllModal())
        yield put(openSuccessModal())
        break
      case 400:
        yield put(setResponseData({ error: res.data }))
        break
      default:
    }
  }
}

export function* watchForm() {
  yield takeLatest('POST_FORM_DATA', postFormDataSaga)
}

// API
