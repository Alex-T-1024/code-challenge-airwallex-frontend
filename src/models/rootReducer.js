import { combineReducers } from 'redux'
import { i18n } from '../containers/I18nProvider/model'
import { toast } from './common/toast'
import { form } from './common/form'

const rootReducer = combineReducers({
  i18n,
  toast,
  form,
})

export default rootReducer
