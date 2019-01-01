import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

class I18nProvider extends React.Component {
  static defaultProps = {
    i18n: { locale: 'en' },
  }

  static propTypes = {
    i18n: PropTypes.shape({ locale: PropTypes.string }),
    messages: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  render() {
    const { i18n, messages, children } = this.props
    const locale = i18n.locale
    const languageWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]

    return (
      <IntlProvider
        locale={locale}
        messages={messages[locale] || messages[languageWithoutRegionCode]}
      >
        {children}
      </IntlProvider>
    )
  }
}

const mapStateToProps = state => ({
  i18n: state.i18n,
})

export default connect(mapStateToProps)(I18nProvider)
