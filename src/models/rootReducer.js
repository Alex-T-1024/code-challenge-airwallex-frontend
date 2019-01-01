import { combineReducers } from 'redux'
import { i18n } from '../containers/I18nProvider/model'
import { example } from '../pages/Example/model'
import { toast } from './common/toast'

const rootReducer = combineReducers({
  i18n,
  toast,
  example,
})

export default rootReducer
