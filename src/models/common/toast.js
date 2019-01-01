// Actions
export function toastClose() {
  return {
    type: 'TOAST_CLOSE',
  };
}

export function toastInfo(text) {
  return {
    type: 'TOAST_INFO',
    text,
  };
}

export function toastSuccess(text = '成功！') {
  return {
    type: 'TOAST_SUCCESS',
    text,
  };
}

export function toastFail(text = '失败！') {
  return {
    type: 'TOAST_FAIL',
    text,
  };
}

export function toastLoading(text = '加载中...') {
  return {
    type: 'TOAST_LOADING',
    text,
  };
}

// Reducers
const stateToast = {
  isOpened: false,
  isInformed: false,
  isSuccessed: false,
  isFailed: false,
  isLoading: false,
};
function toast(state = stateToast, action) {
  switch (action.type) {
    case 'TOAST_CLOSE':
      return {
        ...state,
        isOpened: false,
        isInformed: false,
        isSuccessed: false,
        isFailed: false,
        isLoading: false,
      };
    case 'TOAST_INFO':
      console.error('NOT IMPLEMENT!!');
      return {
        ...state,
        isOpened: true,
        isInformed: true,
      };
    case 'TOAST_SUCCESS':
      console.error('NOT IMPLEMENT!!');
      return {
        ...state,
        isOpened: true,
        isSuccessed: true,
      };
    case 'TOAST_FAIL':
      console.error('NOT IMPLEMENT!!');
      return {
        ...state,
        isOpened: true,
        isFailed: true,
      };
    case 'TOAST_LOADING':
      return {
        ...state,
        isOpened: true,
        isLoading: true,
      };
    default:
      return state;
  }
}

export { toast };
