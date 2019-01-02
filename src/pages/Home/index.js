import React from 'react'
import { connect } from 'react-redux'
import { clearForm } from '../../models/common/form'
import {
  closeAllModal,
  openRequestModal,
  openSuccessModal,
} from '../../models/common/modal'
import { resetResponseData } from '../../models/common/form'
import Button from '../../components/Button'
import styles from './index.less'
import RequestModal from './RequestModal'
import SuccessModal from './SuccessModal'

class Home extends React.PureComponent {
  openModal = () => {
    const { openRequestModal } = this.props
    openRequestModal()
  }

  closeModal = () => {
    const { clearForm, closeAllModal, resetResponseData } = this.props
    closeAllModal()
    clearForm()
    resetResponseData()
  }

  render() {
    const { modal } = this.props
    return (
      <main className={styles.home}>
        <h1>A better way</h1>
        <h1>to enjoy every day.</h1>
        <p>Be the first to know when we launch.</p>
        <Button style={{ fontSize: '1.8rem' }} onClick={this.openModal}>
          Request an invite
        </Button>
        <RequestModal open={modal.isRequest} onClose={this.closeModal} />
        <SuccessModal open={modal.isSuccess} onClose={this.closeModal} />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
})
const mapDispatchToProps = {
  clearForm,
  closeAllModal,
  openRequestModal,
  openSuccessModal,
  resetResponseData,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
