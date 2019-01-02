import { getItemFromForm, getNewState } from '../../utils/formUtil'

// Actions
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

export function validateForm(payload) {
  return {
    type: 'VALIDATE_FORM',
    payload,
  }
}

export function clearForm(payload) {
  return {
    type: 'CLEAR_FORM',
    payload,
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
function form(state = stateForm, action) {
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

    case 'VALIDATE_FORM':
      return []
    case 'CLEAR_FORM':
      return []
    default:
      return state
  }
}

export { form }
