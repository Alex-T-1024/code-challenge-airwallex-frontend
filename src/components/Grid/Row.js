import React from 'react'

const Context = React.createContext(0)

const Row = ({ align, gutter, justify, children }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: justify || 'flex-start',
      alignItems: align || 'flex-start',
    },
  }
  return (
    <Context.Provider value={gutter}>
      <div style={styles.container}>{children}</div>
    </Context.Provider>
  )
}

export default Row
export { Context as RowContext }
