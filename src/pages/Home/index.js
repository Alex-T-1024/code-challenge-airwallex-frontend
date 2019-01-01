import React from 'react'
import BasicLayout from '../../components/Layouts/BasicLayout'
import Button from '../../components/Button'
import styles from './index.less'

class Home extends React.PureComponent {
  render() {
    return (
      <main className={styles.home}>
        <h1>A better way</h1>
        <h1>to enjoy every day.</h1>
        <p>Be the first to know when we launch.</p>
        <Button className={styles.root}>Request an invite</Button>
      </main>
    )
  }
}

export default Home
