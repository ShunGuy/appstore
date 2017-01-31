import React, { PropTypes } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import './Home.scss';

export default class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { title: this.props.title };
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <h3>
              {this.state.title}!
            </h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}
