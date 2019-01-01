import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '../../../components/Button'
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

  state = {}

  sendInvite = () => {}

  render() {
    const { open, onClose } = this.props
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
              <TextField
                autoFocus
                id="fullname"
                label="Full Name"
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                errorText={this.state.password_error_text}
                onChange={e => this.changeValue(e, 'password')}
                onBlur={this.isDisabled}
                fullWidth
              />
              <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
              />

              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                errorText={this.state.password_error_text}
                onChange={e => this.changeValue(e, 'password')}
                onBlur={this.isDisabled}
              />
              <Button
                style={{ fontSize: '1.5rem' }}
                onClick={this.sendInvite}
                fullWidth
              >
                Send
              </Button>
            </section>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default RequestModal
