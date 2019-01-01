import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import messages_en from './translations/en.json'
import messages_zh from './translations/zh.json'
import I18nProvider from './containers/I18nProvider'
import rootReducer from './models/rootReducer'
import rootSaga from './models/rootSaga'
import 'normalize.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

addLocaleData([...en, ...zh])

const messages = {
  en: messages_en,
  zh: messages_zh,
}

ReactDOM.render(
  <Provider store={store}>
    <I18nProvider messages={messages}>
      <App />
    </I18nProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
