import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #de6066 30%, #f2bc54 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  disabled: {
    background: '#999999',
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(99, 99, 99, .3)',
  },
}

function MyButton(props) {
  const { classes, children, className, ...rest } = props
  return (
    <Button
      className={classNames(
        classes.root,
        rest.disabled ? classes.disabled : null,
        className
      )}
      {...rest}
    >
      {children || 'class names'}
    </Button>
  )
}

MyButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(MyButton)
