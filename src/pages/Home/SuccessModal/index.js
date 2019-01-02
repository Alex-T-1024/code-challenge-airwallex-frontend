import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '../../../components/Button'
import styles from './index.less'

class SuccessModal extends React.PureComponent {
  static defaultProps = {
    open: false,
    onClose: () => {},
  }

  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
  }

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
              <h1>All done!</h1>
              <p>
                You will be one of the first to experience Boccoli & Co. when we
                launch.
              </p>
              <Button
                style={{ fontSize: '1.5rem' }}
                onClick={this.sendInvite}
                fullWidth
              >
                OK
              </Button>
            </section>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default SuccessModal
