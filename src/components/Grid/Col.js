import React from 'react'
import { RowContext } from './Row'

const Col = ({ offset, span, children }) => {
  offset = Number.parseInt(offset, 10) || 0
  span = Number.parseInt(span, 10) || 0
  const styles = {
    col: {
      boxSizing: 'border-box',
      width: (span / 24) * 100 + '%',
      padding: 0,
      marginLeft: (offset / 24) * 100 + '%',
    },
  }
  return (
    <RowContext.Consumer>
      {value => {
        styles.col.padding = value / 2
        return <div style={styles.col}>{children}</div>
      }}
    </RowContext.Consumer>
  )
}

export default Col
