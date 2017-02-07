import React, { PropTypes } from 'react'
import { SearchBox } from 'react-instantsearch/dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import ReactSVG from 'react-svg'
import styles from './Header.scss'

function Header({ withSearchBox }) {
  return (
    <Navbar fluid inverse fixedTop className={styles.navbar}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" className={styles.link}>
            <ReactSVG path="/logo.svg" className={styles.logo} />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className={styles.links}>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={1} href="/items/new">New App</NavItem>
        </Nav>
        <Navbar.Form pullLeft>
          { withSearchBox && (
            <SearchBox
              focusShortcuts={['s']}
              translations={{
                submit: null,
                reset: null,
                submitTitle: 'Submit your search query.',
                resetTitle: 'Clear your search query.',
                placeholder: 'Search for an app...',
              }}
            />
          )}
          {' '}
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.defaultProps = {
  withSearchBox: false,
}

Header.propTypes = {
  withSearchBox: PropTypes.bool,
}

export default Header
