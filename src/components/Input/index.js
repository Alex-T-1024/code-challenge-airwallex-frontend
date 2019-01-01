import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.less'

class Input extends React.PureComponent {
  static defaultProps = {
    onBlur: () => {},
  }

  static propTypes = {
    rule: PropTypes.shape({
      name: PropTypes.string,
      message: PropTypes.string,
    }),
    onBlur: PropTypes.func,
    rest: PropTypes.object,
  }

  state = {
    isValidated: true,
    errorMessage: '',
  }

  selfOnBlur = e => {
    const value = e.target.value
    // Our app supported rules here.
    const { rule, onBlur } = this.props
    this.setState({ isValidated: true })
    switch (rule.name) {
      case 'fullname':
        if (value.length < 3) {
          this.setState({ isValidated: false, errorMessage: rule.message })
        }
        break
      case 'email':
        if (
          !value.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          this.setState({ isValidated: false, errorMessage: rule.message })
        }
        break
      case 'confirmation':
        if (!value === rule.data) {
          this.setState({ isValidated: false, errorMessage: rule.message })
        }
        break
      default:
      // No validation rules
    }
    onBlur(e)
  }

  render() {
    const { ...rest } = this.props
    const { isValidated, errorMessage } = this.state
    return (
      <div className={styles.main}>
        <input
          className={isValidated ? null : styles.invalid}
          {...rest}
          onBlur={this.selfOnBlur}
        />
        {isValidated ? null : <p>{errorMessage}</p>}
      </div>
    )
  }
}

export default Input
