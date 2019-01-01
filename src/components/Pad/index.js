import React from 'react';

const Pad = ({ width, height, block, children }) => {
  let defaultVal = width && !height ? width : height;
  if (!width && !height) defaultVal = 17; // 17px is the same as scrollbar width

  const inlineStyles = {
    width: width || defaultVal,
    height: height || defaultVal,
    display: block ? 'block' : 'inline-block',
  };
  return <div style={inlineStyles}>{children}</div>;
};

export default Pad;
