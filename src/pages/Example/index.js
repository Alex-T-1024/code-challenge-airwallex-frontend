import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from '../../components';
import { fetchExample } from './model';

class Example extends React.PureComponent {
  render() {
    return (
      <>
        <h1>Example</h1>
        <Row gutter={10}>
          <Col offset={6} span={6}>
            <div style={{ backgroundColor: 'green' }}>G</div>
          </Col>
          <Col span={6}>
            <div style={{ backgroundColor: 'green' }}>G</div>
          </Col>
        </Row>
        <h1>
          <FormattedMessage
            id="app.title"
            defaultMessage="Hello, {name}!"
            description="Greeting to welcome the user to the app"
            values={{
              name: 'react-intl',
            }}
          />
        </h1>
        <FormattedMessage
          id="app.intro"
          defaultMessage="To get started, edit <code>src/App.js</code> and save to reload."
          description="intro of en.json"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  reduxState: state.example,
});

const mapDispatchToProps = { fetchExample };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
