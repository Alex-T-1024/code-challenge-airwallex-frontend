import { combineReducers } from 'redux'
import { i18n } from '../containers/I18nProvider/model'
import { toast } from './common/toast'
import { form, requestResult } from './common/form'
import { modal } from './common/modal'

const rootReducer = combineReducers({
  i18n,
  toast,
  form,
  requestResult,
  modal,
})

export default rootReducer
