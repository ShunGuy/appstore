import React, { PropTypes } from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import './Home.scss'

function Home({ title }) {
  return (
    <Panel>
      <Grid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <h3>
              {title}!
            </h3>
          </Col>
        </Row>
      </Grid>
    </Panel>
  )
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Home
