import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getItemFromForm } from '../../utils/formUtil'
import styles from './index.less'

class Input extends React.Component {
  static defaultProps = {
    onBlur: () => {},
  }

  static propTypes = {
    rule: PropTypes.string,
    form: PropTypes.array,
    onBlur: PropTypes.func,
    rest: PropTypes.object,
  }

  selfOnBlur = e => {
    const value = e.target.value
    const { rule, onBlur, dispatch } = this.props
    if (rule) {
      dispatch({ type: rule, value })
    }
    onBlur(e)
  }

  render() {
    const { rule, form, ...rest } = this.props
    delete rest.dispatch
    const { isValid, errorMessage } = getItemFromForm(form, rule)
    return (
      <div className={styles.main}>
        <input
          className={isValid ? null : styles.invalid}
          {...rest}
          onBlur={this.selfOnBlur}
        />
        {isValid ? null : <p>{errorMessage}</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  form: state.form,
})
export default connect(mapStateToProps)(Input)
