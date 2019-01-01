import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <ul style={{ fontSize: '2rem' }}>
          <li>
            <Link to="/example">Example</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Home;
