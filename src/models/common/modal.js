// ActionCreators
export function closeAllModal() {
  return {
    type: 'CLOSE_ALL_MODAL',
  }
}

export function openRequestModal() {
  return {
    type: 'OPEN_REQUEST_MODAL',
  }
}

export function openSuccessModal() {
  return {
    type: 'OPEN_SUCCESS_MODAL',
  }
}

// Reducers
const stateModal = {
  isRequest: false,
  isSuccess: false,
}
export function modal(state = stateModal, action) {
  switch (action.type) {
    case 'CLOSE_ALL_MODAL':
      return {
        ...state,
        isRequest: false,
        isSuccess: false,
      }

    case 'OPEN_REQUEST_MODAL':
      return {
        ...state,
        isRequest: true,
      }

    case 'OPEN_SUCCESS_MODAL':
      return {
        ...state,
        isSuccess: true,
      }

    default:
      return state
  }
}
