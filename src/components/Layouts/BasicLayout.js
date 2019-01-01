import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './BasicLayout.less'

export default class BasicLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    )
  }
}
