import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { Highlight } from 'react-instantsearch/dom'
import { Button, Glyphicon } from 'react-bootstrap'
import deleteApp from './api'
import styles from './App.scss'

function handleError(e) {
  e.target.setAttribute('src', 'http://placehold.it/175x175')
}

class App extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this)
    this.state = { show: true }
  }

  delete() {
    const { id, objectID } = this.props.hit
    deleteApp(id, objectID)
    this.setState({ show: false })
  }

  render() {
    const { hit, hit: { id, image, link, rank, category } } = this.props
    const { show } = this.state

    return (
      <div className={classNames(styles.app, { [styles.show]: show })}>
        <img
          src={image}
          className={styles.image}
          onError={handleError}
          alt={name}
        />
        <div className={styles.content}>
          <h3>
            <a href={link} target="blank">
              <Highlight
                attributeName="name"
                hit={hit}
              />
            </a>
          </h3>
          <div><b>Rank:</b> {rank}</div>
          <div><b>Category:</b> {category}</div>
          <div className={styles.actions}>
            <Button
              className={styles.btn}
              bsSize="xsmall"
              onClick={this.delete}
              href="#"
            >
              <Glyphicon glyph="remove" />
            </Button>
            <Button
              className={styles.btn}
              bsSize="xsmall"
              onClick={this.edit}
              href={`apps/${id}/edit`}
            >
              <Glyphicon glyph="edit" />
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  hit: PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
}

export default App
