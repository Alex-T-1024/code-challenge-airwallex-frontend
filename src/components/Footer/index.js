import React from 'react'
import Icon from '@material-ui/core/Icon'
import classnames from 'classnames'
import styles from './index.less'

function Footer() {
  return (
    <footer className={classnames(styles.footer)}>
      <p>
        Made with <Icon fontSize="inherit">favorite</Icon> in Melbourne
      </p>
      <p>@ 2016 Broccoli & Co. All rights reserved.</p>
    </footer>
  )
}

export default Footer
