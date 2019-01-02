import React from 'react'
import { connect } from 'react-redux'
import { clearForm } from '../../models/common/form'
import Button from '../../components/Button'
import styles from './index.less'
import RequestModal from './RequestModal'

class Home extends React.PureComponent {
  state = {
    open: true,
  }

  openModal = () => {
    this.setState({ open: true })
  }
  closeModal = () => {
    this.setState({ open: false })
    this.props.clearForm()
  }

  render() {
    const { open } = this.state
    return (
      <main className={styles.home}>
        <h1>A better way</h1>
        <h1>to enjoy every day.</h1>
        <p>Be the first to know when we launch.</p>
        <Button style={{ fontSize: '1.8rem' }} onClick={this.openModal}>
          Request an invite
        </Button>
        <RequestModal open={open} onClose={this.closeModal} />
      </main>
    )
  }
}

const mapDispatchToProps = { clearForm }
export default connect(
  null,
  mapDispatchToProps
)(Home)
