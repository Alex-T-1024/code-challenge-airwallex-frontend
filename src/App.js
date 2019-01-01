import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import BasicLayout from './components/Layouts/BasicLayout'

class App extends Component {
  render() {
    return (
      <Router>
        <BasicLayout>
          <Routes />
        </BasicLayout>
      </Router>
    )
  }
}

export default App
