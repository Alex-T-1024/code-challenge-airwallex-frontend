import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import {
  validateFullname,
  validateEmail,
  validateConfirmationEmail,
  postFormData,
} from '../../../models/common/form'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import styles from './index.less'

class RequestModal extends React.PureComponent {
  static defaultProps = {
    open: false,
    onClose: () => {},
  }

  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
  }

  sendInvite = () => {
    const {
      validateFullname,
      validateEmail,
      validateConfirmationEmail,
      postFormData,
    } = this.props
    validateFullname()
    validateEmail()
    validateConfirmationEmail()
    postFormData()
  }

  render() {
    const { open, onClose, requestResult } = this.props
    return (
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <section className={styles.main}>
              <h1>Request an invite</h1>
              <div className={styles.form}>
                <Input
                  rule={'VALIDATE_FULLNAME'}
                  type="text"
                  placeholder="Full Name"
                />
                <Input
                  rule={'VALIDATE_EMAIL'}
                  type="email"
                  placeholder="Email"
                />
                <Input
                  rule={'VALIDATE_CONFIRMATION_EMAIL'}
                  type="text"
                  placeholder="Confirm Email"
                />
              </div>

              <Button
                style={{ fontSize: '1.5rem' }}
                onClick={this.sendInvite}
                fullWidth
                disabled={requestResult.isRequesting}
              >
                {requestResult.isRequesting
                  ? 'Sending, please wait...'
                  : 'Send'}
              </Button>
              {requestResult.error && (
                <p className={styles.serverError}>{requestResult.error}</p>
              )}
            </section>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  requestResult: state.requestResult,
})

const mapDispatchToProps = {
  validateFullname,
  validateEmail,
  validateConfirmationEmail,
  postFormData,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestModal)
