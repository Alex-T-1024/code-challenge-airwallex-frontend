import React from 'react';

const styles = {
  blankLayout: { backgroundColor: 'white' },
};

const BlankLayout = ({ children }) => {
  return <div style={styles.blankLayout}>{children}</div>;
};

export default BlankLayout;
