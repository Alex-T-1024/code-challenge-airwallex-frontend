// Action creators
export function setLocale(locale) {
  return {
    type: 'SET_LOCALE',
    locale,
  }
}

// Reducers
const getLocale = () => {
  try {
    let i18n = JSON.parse(localStorage.getItem('i18n'))
    switch (i18n.locale) {
      case 'en':
        return 'en'
      case 'zh':
        return 'zh'
      default:
        i18n.locale =
          (navigator.languages && navigator.languages[0]) ||
          navigator.language ||
          navigator.userLanguage ||
          'en'
        localStorage.setItem('i18n', JSON.stringify(i18n))
        return null
    }
  } catch {
    return 'en'
  }
}

const stateLocale = {
  locale: getLocale(),
}

export function i18n(state = stateLocale, action) {
  switch (action.type) {
    case 'SET_LOCALE':
      let i18n = {}
      i18n.locale = action.locale
      localStorage.setItem('i18n', JSON.stringify(i18n))
      return {
        ...state,
        locale: action.locale,
      }
    default:
      return state
  }
}
